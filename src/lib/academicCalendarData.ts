export interface CalendarEvent {
  date: string;
  month: string;
  year: number;
  day: string;
  event: string;
  type: "holiday" | "assessment" | "exam" | "practical" | "class" | "review" | "event";
  yearLevels: ("I Year" | "II/III Year" | "IV Year")[];
}

export const academicEvents: CalendarEvent[] = [
  // JULY 2025
  { date: "6", month: "July", year: 2025, day: "SUN", event: "Muharram - Holiday", type: "holiday", yearLevels: ["I Year", "II/III Year", "IV Year"] },
  { date: "14", month: "July", year: 2025, day: "MON", event: "Commencement of ODD Semester Classes", type: "class", yearLevels: ["II/III Year", "IV Year"] },
  
  // AUGUST 2025
  { date: "14", month: "August", year: 2025, day: "THU", event: "First Internal Assessment Subject - 1", type: "assessment", yearLevels: ["II/III Year", "IV Year"] },
  { date: "15", month: "August", year: 2025, day: "FRI", event: "Independence Day - Holiday", type: "holiday", yearLevels: ["I Year", "II/III Year", "IV Year"] },
  { date: "16", month: "August", year: 2025, day: "SAT", event: "Krishna Jayanthi - Holiday", type: "holiday", yearLevels: ["I Year", "II/III Year", "IV Year"] },
  { date: "29", month: "August", year: 2025, day: "FRI", event: "Inauguration of Student Induction Programme", type: "event", yearLevels: ["I Year"] },
  
  // SEPTEMBER 2025
  { date: "4", month: "September", year: 2025, day: "THU", event: "Commencement of ODD Semester Classes", type: "class", yearLevels: ["I Year"] },
  { date: "5", month: "September", year: 2025, day: "FRI", event: "Milad-un-Nabi - Holiday", type: "holiday", yearLevels: ["I Year", "II/III Year", "IV Year"] },
  { date: "23", month: "September", year: 2025, day: "TUE", event: "Second Internal Assessment Test - 1", type: "assessment", yearLevels: ["II/III Year", "IV Year"] },
  
  // OCTOBER 2025
  { date: "1", month: "October", year: 2025, day: "WED", event: "Ayutha Pooja - Holiday", type: "holiday", yearLevels: ["I Year", "II/III Year", "IV Year"] },
  { date: "2", month: "October", year: 2025, day: "THU", event: "Gandhi Jayanthi / Vijaya Dasami - Holiday", type: "holiday", yearLevels: ["I Year", "II/III Year", "IV Year"] },
  { date: "14", month: "October", year: 2025, day: "TUE", event: "First Internal Assessment Subject - 1", type: "assessment", yearLevels: ["I Year"] },
  { date: "20", month: "October", year: 2025, day: "MON", event: "Deepavali - Holiday", type: "holiday", yearLevels: ["I Year", "II/III Year", "IV Year"] },
  { date: "28", month: "October", year: 2025, day: "TUE", event: "Model Examination Subject - 1", type: "exam", yearLevels: ["II/III Year", "IV Year"] },
  
  // NOVEMBER 2025
  { date: "10", month: "November", year: 2025, day: "MON", event: "Commencement of Practical Examinations - 1", type: "practical", yearLevels: ["II/III Year", "IV Year"] },
  { date: "20", month: "November", year: 2025, day: "THU", event: "Commencement of Theory Examinations", type: "exam", yearLevels: ["II/III Year", "IV Year"] },
  { date: "21", month: "November", year: 2025, day: "FRI", event: "Second Internal Assessment Test - 1", type: "assessment", yearLevels: ["I Year"] },
  
  // DECEMBER 2025
  { date: "9", month: "December", year: 2025, day: "TUE", event: "Model Examination Subject - 1", type: "exam", yearLevels: ["I Year"] },
  { date: "18", month: "December", year: 2025, day: "THU", event: "Commencement of Practical Examinations - 1", type: "practical", yearLevels: ["I Year"] },
  { date: "22", month: "December", year: 2025, day: "MON", event: "Commencement of Theory Examinations - 1", type: "exam", yearLevels: ["I Year"] },
  { date: "25", month: "December", year: 2025, day: "THU", event: "Christmas - Holiday", type: "holiday", yearLevels: ["I Year", "II/III Year", "IV Year"] },
  { date: "15", month: "December", year: 2025, day: "MON", event: "Commencement of EVEN SEMESTER Classes", type: "class", yearLevels: ["II/III Year", "IV Year"] },
  
  // JANUARY 2026
  { date: "1", month: "January", year: 2026, day: "THU", event: "New Year's Day - Holiday", type: "holiday", yearLevels: ["I Year", "II/III Year", "IV Year"] },
  { date: "14", month: "January", year: 2026, day: "WED", event: "Pongal - Holiday", type: "holiday", yearLevels: ["I Year", "II/III Year", "IV Year"] },
  { date: "26", month: "January", year: 2026, day: "MON", event: "Republic Day - Holiday", type: "holiday", yearLevels: ["I Year", "II/III Year", "IV Year"] },
  { date: "19", month: "January", year: 2026, day: "MON", event: "Commencement of EVEN SEMESTER Classes", type: "class", yearLevels: ["I Year"] },
  { date: "20", month: "January", year: 2026, day: "TUE", event: "Project - First Review", type: "review", yearLevels: ["IV Year"] },
  
  // FEBRUARY 2026
  { date: "2", month: "February", year: 2026, day: "MON", event: "First Internal Assessment Subject - 4", type: "assessment", yearLevels: ["II/III Year"] },
  { date: "10", month: "February", year: 2026, day: "TUE", event: "Project - Second Review", type: "review", yearLevels: ["IV Year"] },
  { date: "26", month: "February", year: 2026, day: "THU", event: "First Internal Assessment Subject - 1", type: "assessment", yearLevels: ["I Year"] },
  
  // MARCH 2026
  { date: "2", month: "March", year: 2026, day: "MON", event: "First Internal Assessment Subject - 4", type: "assessment", yearLevels: ["I Year"] },
  { date: "3", month: "March", year: 2026, day: "TUE", event: "Project - Third Review", type: "review", yearLevels: ["IV Year"] },
  { date: "10", month: "March", year: 2026, day: "TUE", event: "Second Internal Assessment Test - 1", type: "assessment", yearLevels: ["II/III Year"] },
  { date: "20", month: "March", year: 2026, day: "FRI", event: "Telugu New Year - Holiday", type: "holiday", yearLevels: ["I Year", "II/III Year", "IV Year"] },
  { date: "24", month: "March", year: 2026, day: "TUE", event: "Project viva voce", type: "exam", yearLevels: ["IV Year"] },
  { date: "31", month: "March", year: 2026, day: "TUE", event: "Mahaveer Jayanthi - Holiday", type: "holiday", yearLevels: ["I Year", "II/III Year", "IV Year"] },
  
  // APRIL 2026
  { date: "3", month: "April", year: 2026, day: "FRI", event: "Good Friday - Holiday", type: "holiday", yearLevels: ["I Year", "II/III Year", "IV Year"] },
  { date: "7", month: "April", year: 2026, day: "TUE", event: "Commemoration Day Holiday", type: "holiday", yearLevels: ["I Year", "II/III Year", "IV Year"] },
  { date: "8", month: "April", year: 2026, day: "WED", event: "Second Internal Assessment Test - 1", type: "assessment", yearLevels: ["I Year"] },
  { date: "14", month: "April", year: 2026, day: "TUE", event: "Tamil New Year - Holiday", type: "holiday", yearLevels: ["I Year", "II/III Year", "IV Year"] },
  { date: "20", month: "April", year: 2026, day: "MON", event: "Commencement of Practical Examinations", type: "practical", yearLevels: ["II/III Year"] },
  { date: "27", month: "April", year: 2026, day: "MON", event: "Commencement of Theory Examinations", type: "exam", yearLevels: ["II/III Year"] },
  
  // MAY 2026
  { date: "1", month: "May", year: 2026, day: "FRI", event: "May Day - Holiday", type: "holiday", yearLevels: ["I Year", "II/III Year", "IV Year"] },
  { date: "2", month: "May", year: 2026, day: "SAT", event: "Model Examination Subject - 3", type: "exam", yearLevels: ["I Year"] },
  { date: "7", month: "May", year: 2026, day: "THU", event: "Commencement of Practical Examinations", type: "practical", yearLevels: ["I Year"] },
  { date: "12", month: "May", year: 2026, day: "TUE", event: "Commencement of Theory Examinations", type: "exam", yearLevels: ["I Year"] },
  { date: "27", month: "May", year: 2026, day: "WED", event: "Bakrid - Holiday", type: "holiday", yearLevels: ["I Year", "II/III Year", "IV Year"] },
];

export const getMonthEvents = (month: string, year: number, yearLevel?: string): CalendarEvent[] => {
  return academicEvents.filter(
    (event) =>
      event.month === month &&
      event.year === year &&
      (!yearLevel || event.yearLevels.includes(yearLevel as any))
  );
};

export const getUpcomingEvents = (count: number = 5, yearLevel?: string): CalendarEvent[] => {
  const today = new Date();
  const upcoming = academicEvents
    .filter((event) => {
      const eventDate = new Date(event.year, getMonthIndex(event.month), parseInt(event.date));
      return eventDate >= today && (!yearLevel || event.yearLevels.includes(yearLevel as any));
    })
    .sort((a, b) => {
      const dateA = new Date(a.year, getMonthIndex(a.month), parseInt(a.date));
      const dateB = new Date(b.year, getMonthIndex(b.month), parseInt(b.date));
      return dateA.getTime() - dateB.getTime();
    });
  return upcoming.slice(0, count);
};

const getMonthIndex = (month: string): number => {
  const months: Record<string, number> = {
    January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
    July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
  };
  return months[month] ?? 0;
};

export const formatDate = (date: string, month: string, year: number): string => {
  const monthIndex = getMonthIndex(month);
  const d = new Date(year, monthIndex, parseInt(date));
  return d.toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" });
};
