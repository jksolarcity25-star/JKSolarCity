/**
 * TNEB Units Calculator - JavaScript Version
 * Converted from Python tn_eb_calculator.py
 * Integrates directly into the existing JK Solar City calculator
 */

class TNEBCalculator {
    constructor() {
        // Tariff parameters
        this.domesticTierCutoff = 500; // bi-monthly units
        this.commercialThreshold = 100; // bi-monthly units
        this.billingMonths = 2;
        
        // Commercial rates
        this.commercialRateLow = 6.65; // ₹/unit up to threshold
        this.commercialRateHigh = 10.45; // ₹/unit above threshold
        
        // Electricity duty
        this.electricityDutyCommercial = 0.05; // 5%
        this.electricityDutyDomestic = 0.0; // 0%
        
        // Domestic Tier A slabs (<=500 units, first 200 free)
        this.domesticTierASlabs = [
            { from: 0, to: 200, rate: 0.0 },
            { from: 200, to: 400, rate: 4.95 },
            { from: 400, to: 500, rate: 6.65 }
        ];
        
        // Domestic Tier B slabs (>500 units, first 100 free)
        this.domesticTierBSlabs = [
            { from: 0, to: 100, rate: 0.0 },
            { from: 100, to: 400, rate: 4.95 },
            { from: 400, to: 500, rate: 6.65 },
            { from: 500, to: 600, rate: 8.8 },
            { from: 600, to: 800, rate: 9.95 },
            { from: 800, to: 1000, rate: 11.05 },
            { from: 1000, to: 999999999, rate: 12.15 }
        ];
    }
    
    /**
     * Build slab lookup table for reverse calculation
     */
    buildSlabLookup(slabs) {
        const lookup = [];
        let runningBill = 0;
        
        for (const slab of slabs) {
            const width = slab.to - slab.from;
            const slabCharge = width * slab.rate;
            
            lookup.push({
                from: slab.from,
                to: slab.to,
                rate: slab.rate,
                width: width,
                billAtStart: runningBill,
                billAtEnd: runningBill + slabCharge
            });
            
            runningBill += slabCharge;
        }
        
        return lookup;
    }
    
    /**
     * Calculate units from net charge using lookup method
     */
    calculateUnitsFromLookup(netCharge, lookup) {
        let units = 0;
        
        for (const entry of lookup) {
            const width = entry.width;
            const rate = entry.rate;
            const billAtStart = entry.billAtStart;
            
            let unitsInSlab;
            if (width === 0) {
                unitsInSlab = 0;
            } else if (rate === 0) {
                unitsInSlab = width;
            } else {
                // Excel formula: MIN(width, MAX(0, net_charge - bill_at_start) / rate)
                unitsInSlab = Math.min(width, Math.max(0, netCharge - billAtStart) / rate);
            }
            
            units += unitsInSlab;
        }
        
        return units;
    }
    
    /**
     * Reverse calculate units for domestic connection
     */
    reverseCalculateUnitsDomestic(billAmount) {
        // Remove duty (0% for domestic)
        const netEnergyCharge = Math.max(0, billAmount) / (1 + this.electricityDutyDomestic);
        
        // Build lookup tables
        const tierALookup = this.buildSlabLookup(this.domesticTierASlabs);
        const tierBLookup = this.buildSlabLookup(this.domesticTierBSlabs);
        
        // Calculate max charge at Tier A cutoff
        const tierAMaxCharge = tierALookup[tierALookup.length - 1].billAtEnd;
        
        // Determine tier and calculate units
        let units;
        if (netEnergyCharge <= tierAMaxCharge) {
            // Use Tier A lookup
            units = this.calculateUnitsFromLookup(netEnergyCharge, tierALookup);
        } else {
            // Use Tier B lookup
            units = this.calculateUnitsFromLookup(netEnergyCharge, tierBLookup);
        }
        
        // Check if bill falls in a gap
        const fallsInGap = (netEnergyCharge > tierAMaxCharge && units <= this.domesticTierCutoff);
        
        if (fallsInGap) {
            units = Math.max(units, this.domesticTierCutoff);
        }
        
        return Math.round(units);
    }
    
    /**
     * Reverse calculate units for commercial connection
     */
    reverseCalculateUnitsCommercial(billAmount, loadKw = 5) {
        // Calculate fixed charge (simplified - assuming <=50kW)
        const fixedCharge = loadKw * 110 * this.billingMonths;
        
        // Remove fixed charge and duty
        const netEnergyCharge = Math.max(0, billAmount - fixedCharge) / (1 + this.electricityDutyCommercial);
        
        // Try low rate (up to threshold)
        const thresholdCharge = this.commercialThreshold * this.commercialRateLow;
        
        let units;
        if (netEnergyCharge <= thresholdCharge) {
            units = netEnergyCharge / this.commercialRateLow;
        } else {
            units = netEnergyCharge / this.commercialRateHigh;
        }
        
        // Check if bill falls in a gap
        const fallsInGap = (netEnergyCharge > thresholdCharge && units <= this.commercialThreshold);
        
        if (fallsInGap) {
            units = Math.max(units, this.commercialThreshold);
        }
        
        return Math.round(units);
    }
    
    /**
     * Main function: Calculate units from bill amount
     * @param {number} billAmount - 2-month bill amount in Rs.
     * @param {boolean} isHome - true for Home, false for Commercial
     * @returns {number} Total units in 2 months
     */
    calculateUnitsFromBill(billAmount, isHome) {
        if (isHome) {
            return this.reverseCalculateUnitsDomestic(billAmount);
        } else {
            return this.reverseCalculateUnitsCommercial(billAmount);
        }
    }
}

// Initialize calculator
const tnebCalculator = new TNEBCalculator();

/**
 * Function to call from your existing calculator
 * @param {number} billAmount - 2-month bill amount
 * @param {boolean} isHome - true for Home, false for Commercial
 * @returns {number} Total units in 2 months
 */
function getTNEBUnits(billAmount, isHome) {
    return tnebCalculator.calculateUnitsFromBill(billAmount, isHome);
}
