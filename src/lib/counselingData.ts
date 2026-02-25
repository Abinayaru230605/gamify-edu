export interface Student {
  sl: number;
  regNo: string;
  name: string;
  gender: "M" | "F" | string;
  category: string;
  residency: "Hosteller" | "Day Scholar" | string;
  mentor: string;
  counselor: string;
  branch?: string;
  yearSem?: string;
}

// Counselor and default mentor information
const defaultCounselor = "Dr. Shakunthala, Dept of ECE, RMDEC";
const defaultMentor = "Mr. M. JyothiPrasad";

export const students: Student[] = [
  { sl: 1, regNo: "111523104001", name: "AASHISH KUMAR D", gender: "M", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 2, regNo: "111523104006", name: "AJAY BUTTI", gender: "M", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 3, regNo: "111523104013", name: "ASHA PADMANABAN", gender: "F", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 4, regNo: "111523104015", name: "BARANITHA G", gender: "F", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 5, regNo: "111523104023", name: "DHARSHINI D G", gender: "F", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 6, regNo: "111523104024", name: "DILIP KHUMAR T", gender: "M", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 7, regNo: "111523104028", name: "EDIGA SATHVIKA", gender: "F", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 8, regNo: "111523104030", name: "GADDAM BABI", gender: "M", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 9, regNo: "111523104031", name: "GADDAM BHAVYA SRI", gender: "F", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 10, regNo: "111523104032", name: "GADHAMSETTY LAKSHMI TEJA", gender: "M", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 11, regNo: "111523104043", name: "HARIKESH D", gender: "M", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 12, regNo: "111523104050", name: "HARISHRAGHAVENDRA S", gender: "M", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 13, regNo: "111523104052", name: "JAHNAVI P V", gender: "F", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 14, regNo: "111523104056", name: "JAYAPRAKASH E", gender: "M", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 15, regNo: "111523104058", name: "JOSHIKA V", gender: "F", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 16, regNo: "111523104060", name: "KAIPU POOJITHA", gender: "F", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 17, regNo: "111523104064", name: "KANNA REDDY BHAVYASREE", gender: "F", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 18, regNo: "111523104065", name: "KARMUGILAN V", gender: "M", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 19, regNo: "111523104068", name: "KAVITHA S", gender: "F", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 20, regNo: "111523104074", name: "LACHIVAKAM VELESWAR", gender: "M", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 21, regNo: "111523104075", name: "LAVANYA DEVI S", gender: "F", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 22, regNo: "111523104077", name: "LOCHAN Y S", gender: "M", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 23, regNo: "111523104078", name: "LOGISHWARAN N", gender: "M", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 24, regNo: "111523104079", name: "LOHIT SRINIVASA H", gender: "M", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 25, regNo: "111523104082", name: "MADHAN KUMAR C P", gender: "M", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 26, regNo: "111523104088", name: "MARATHU VENKAT SAI", gender: "M", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 27, regNo: "111523104089", name: "MODI MANOHAR", gender: "M", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 28, regNo: "111523104091", name: "MOHAN D", gender: "M", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 29, regNo: "111523104095", name: "MONISHA V", gender: "F", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 30, regNo: "111523104098", name: "NAINAMMAL V", gender: "F", category: "G", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 31, regNo: "111523104099", name: "NARENDRAN Y", gender: "M", category: "G", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 32, regNo: "111523104102", name: "NAVEEN SAI B", gender: "M", category: "G", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 33, regNo: "111523104103", name: "NELLIPUDI GOPI SAI KRISHNA", gender: "M", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 34, regNo: "111523104108", name: "PADMAVATHI A", gender: "F", category: "G", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 35, regNo: "111523104112", name: "PIRATHISH R", gender: "M", category: "G", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 36, regNo: "111523104113", name: "POOJA D", gender: "F", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 37, regNo: "111523104114", name: "POOJA K", gender: "F", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 38, regNo: "111523104116", name: "PRAGADEESHWARAN K M S", gender: "M", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 39, regNo: "111523104125", name: "PURUSHOTHAMAN C", gender: "M", category: "G", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 40, regNo: "111523104127", name: "RANJHANA S", gender: "F", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 41, regNo: "111523104128", name: "RAVIRAJ R", gender: "M", category: "G", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 42, regNo: "111523104129", name: "RAVURU THARUN", gender: "M", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 43, regNo: "111523104131", name: "REENA R", gender: "F", category: "G", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 44, regNo: "111523104132", name: "REVATHI M A", gender: "F", category: "G", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 45, regNo: "111523104133", name: "RITEESH M M", gender: "M", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 46, regNo: "111523104135", name: "RUPA SRI B", gender: "F", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 47, regNo: "111523104136", name: "SACHIN R", gender: "M", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 48, regNo: "111523104139", name: "SANDEEP S S", gender: "M", category: "G", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 49, regNo: "111523104143", name: "SANJAY S", gender: "M", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 50, regNo: "111523104144", name: "SANTHAVELURU MUNI YASHWANTH", gender: "M", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 51, regNo: "111523104148", name: "SHIRJIN S R", gender: "M", category: "G", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 52, regNo: "111523104149", name: "SHOMESHWAR A", gender: "M", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 53, regNo: "111523104151", name: "SHYAM KUMAR N", gender: "M", category: "G", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 54, regNo: "111523104154", name: "SRINAVEEN S", gender: "M", category: "G", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 55, regNo: "111523104158", name: "SUBALAKSHMI M", gender: "F", category: "G", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 56, regNo: "111523104159", name: "SWETHA G", gender: "F", category: "G", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 57, regNo: "111523104160", name: "SWETHA G J", gender: "F", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 58, regNo: "111523104172", name: "VENKATA RAJESH REDDY BOMMA", gender: "M", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 59, regNo: "111523104180", name: "GOUTHAM V", gender: "M", category: "G", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 60, regNo: "111523104182", name: "LINGESH K R", gender: "M", category: "G", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 61, regNo: "111523104186", name: "TANDRA VENU", gender: "M", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 62, regNo: "111523104301", name: "CHINTHAKUNTA LAKSHMI NARASIMHA REDDY", gender: "M", category: "M", residency: "Hosteller", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 63, regNo: "111523104304", name: "MOHAN KUMAR S", gender: "M", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
  { sl: 64, regNo: "111523104306", name: "SURATHI THOYZEN", gender: "M", category: "M", residency: "Day Scholar", mentor: defaultMentor, counselor: defaultCounselor },
];

export const getStudents = (filter?: { residency?: string; search?: string }) => {
  let list = students.slice();
  if (filter?.residency) {
    list = list.filter((s) => s.residency === filter.residency);
  }
  if (filter?.search) {
    const q = filter.search.toLowerCase();
    list = list.filter((s) => s.name.toLowerCase().includes(q) || s.regNo.includes(q));
  }
  return list;
};
