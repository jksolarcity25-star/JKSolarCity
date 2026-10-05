# TNEB Calculator Integration Guide

## Overview
This guide shows how to integrate the TNEB (Tamil Nadu Electricity Board) Units Calculator directly into your existing JK Solar City website calculator.

## Files Created

1. **tneb_calculator.js** - JavaScript version of the TNEB calculator
2. This integration guide

## What It Does

- Takes the 2-month bill amount from your existing calculator
- Determines if it's Home or Commercial based on property type
- Calculates the total units consumed in 2 months
- Displays the units dynamically in your calculator results

## Integration Steps

### Step 1: Add the JavaScript File

Add this line to your HTML `<head>` section (before the closing `</head>` tag):

```html
<script src="tneb_calculator.js"></script>
```

Place it around line 280 (after other meta tags, before styles).

### Step 2: Add Units Display to Calculator Results

Find the calculator results section (around line 1768):

```html
<div class="calc-result">
  <div class="calc-result-row"><span class="lbl">Suggested system size</span><span class="val" id="resSize">3 to 4 kW</span></div>
  <div class="calc-result-row"><span class="lbl">Potential new monthly bill</span><span class="val" id="resNewBill">₹240/mo</span></div>
  <div class="calc-result-row"><span class="lbl">Estimated monthly savings</span><span class="val gold" id="resSavings">₹2,760/mo</span></div>
  <div class="calc-result-row"><span class="lbl">Estimated yearly savings</span><span class="val gold" id="resYearly">₹33,120/yr</span></div>
  <div class="calc-result-row"><span class="lbl">Government subsidy</span><span class="val gold" id="resSubsidy">Up to ₹1,00,000</span></div>
  <div class="calc-result-row" id="resRoofRow" style="display:none;"><span class="lbl">Roof-space check</span><span class="val" id="resRoof">fits comfortably</span></div>
</div>
```

**ADD THIS LINE** after the subsidy line (after line 1773):

```html
<div class="calc-result-row"><span class="lbl">Your 2-month consumption</span><span class="val" id="resUnits">-</span></div>
```

So it should look like:

```html
<div class="calc-result-row"><span class="lbl">Government subsidy</span><span class="val gold" id="resSubsidy">Up to ₹1,00,000</span></div>
<div class="calc-result-row"><span class="lbl">Your 2-month consumption</span><span class="val" id="resUnits">-</span></div>
<div class="calc-result-row" id="resRoofRow" style="display:none;"><span class="lbl">Roof-space check</span><span class="val" id="resRoof">fits comfortably</span></div>
```

### Step 3: Modify the recalc() Function

Find the `recalc()` function (around line 2435). Add the units calculation at the end of the function.

**Current function ends at line 2471:**

```javascript
  recalc();
```

**ADD THIS CODE** before the last `recalc();` call (before line 2513):

```javascript
  // Calculate TNEB units
  var isHome = (propType === 'home' || propType === 'apartment');
  var units = getTNEBUnits(bill, isHome);
  resUnits.textContent = units + ' units';
```

**The modified section should look like this:**

```javascript
  } else {
    resRoof.textContent = 'Tight - closer to ' + Math.max(roofCapableKw,1) + ' kW, ask us';
  }
  } else {
    resRoofRow.style.display = 'none';
  }

  // Calculate TNEB units
  var isHome = (propType === 'home' || propType === 'apartment');
  var units = getTNEBUnits(bill, isHome);
  resUnits.textContent = units + ' units';
}
```

### Step 4: Add Variable Declaration

At the top of your calculator script (around line 2420), add the variable for the units result element:

Find where other variables are declared:
```javascript
var billRange = document.getElementById('billRange');
var billNumber = document.getElementById('billNumber');
var roofRange = document.getElementById('roofRange');
var roofNumber = document.getElementById('roofNumber');
var resSize = document.getElementById('resSize');
var resNewBill = document.getElementById('resNewBill');
var resSavings = document.getElementById('resSavings');
var resYearly = document.getElementById('resYearly');
var resSubsidy = document.getElementById('resSubsidy');
var resRoof = document.getElementById('resRoof');
var resRoofRow = document.getElementById('resRoofRow');
```

**ADD THIS LINE:**
```javascript
var resUnits = document.getElementById('resUnits');
```

So it becomes:
```javascript
var resUnits = document.getElementById('resUnits');
var resRoof = document.getElementById('resRoof');
var resRoofRow = document.getElementById('resRoofRow');
```

### Step 5: Upload Files to Your Repository

1. Copy `tneb_calculator.js` to your JKS folder
2. Modify `index.html` with the changes above
3. Commit and push to GitHub

## How It Works

### Input Mapping

- **Home or Apartment** → `isHome = true` (Domestic connection)
- **Business** → `isHome = false` (Commercial connection)
- **Bill Amount** → Direct from your existing calculator input

### Output

The calculator will now display:
- "Your 2-month consumption: XXX units"

This updates dynamically as the user changes the bill amount or property type.

## Testing

After making the changes:

1. Open your website locally or on GitHub Pages
2. Scroll to the "Quick savings estimate" calculator
3. Change the bill amount
4. You should see "Your 2-month consumption: XXX units" update automatically
5. Try switching between Home, Apartment, and Business
6. The units should change based on the connection type

## Example Results

- **Home, ₹3000 bill** → ~250 units
- **Home, ₹5000 bill** → ~400 units
- **Business, ₹5000 bill** → ~350 units (different tariff)

## Technical Details

### Tariff Logic Used

**Domestic (Home/Apartment):**
- Tier A (≤500 units): First 200 units free
- Tier B (>500 units): First 100 units free
- Slab-wise (telescopic) rates

**Commercial (Business):**
- Flat rate on all units
- No free units
- 5% electricity duty

### Calculation Method

Uses the same reverse calculation as the Excel/Python version:
1. Remove fixed charges and duty
2. Build lookup table for slab boundaries
3. Calculate units by working backwards through slabs
4. Round to whole units

## Troubleshooting

### Units not showing

- Check that `tneb_calculator.js` is loaded (check browser console)
- Verify `resUnits` element ID matches in HTML and JavaScript
- Check browser console for JavaScript errors

### Wrong units calculated

- Verify bill amount is being passed correctly
- Check that `isHome` boolean is correct
- Ensure the calculator script is loaded before the main script

### Not updating dynamically

- Check that the units calculation is inside the `recalc()` function
- Verify `recalc()` is called on input changes
- Check browser console for errors

## Benefits

✅ **No external API needed** - runs entirely in browser
✅ **Fast** - instant calculation, no network calls
✅ **Offline capable** - works without internet
✅ **Accurate** - matches Excel/Python exactly
✅ **Easy to maintain** - single JavaScript file
✅ **No hosting costs** - runs on GitHub Pages for free

## Future Enhancements

If you want to add more features later:

1. **Show monthly units**: Divide by 2 for monthly average
2. **Show tariff details**: Display which tier is applied
3. **Show free units**: Display how many units are free
4. **Add commercial load input**: For more accurate commercial calculations

These can be added by modifying the `getTNEBUnits()` function and displaying additional results.

## Support

If you encounter issues:
1. Check browser console (F12) for JavaScript errors
2. Verify all file paths are correct
3. Ensure tneb_calculator.js is loaded before the main script
4. Test with known values (e.g., ₹4000 bill should give ~350 units for Home)
