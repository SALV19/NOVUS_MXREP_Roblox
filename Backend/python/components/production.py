class Production:
    def __init__(
        self,
        year,
        quality,
        secondsXUnit,
        hourShift,
        shifts,
        productionLines,
        workingDays,
        workingWeeks,
        yearWorkingMonths,
    ):
        self.year = year
        self.quality = quality
        self.secondsXUnit = secondsXUnit
        self.hourShift = hourShift
        self.shifts = shifts
        self.productionLines = productionLines
        self.workingDays = workingDays
        self.workingWeeks = workingWeeks
        self.yearWorkingMonths = yearWorkingMonths
