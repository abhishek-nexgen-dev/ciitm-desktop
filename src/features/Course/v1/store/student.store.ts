import { create } from "zustand";

export interface Student {
  _id: string;
  uniqueId: string;

  semester: number;
  course_Id?: string;
  course?: string;
  mode?: string;
  university?: string;

  isAdmitted: boolean;
  dateOfAdmission?: string;
  applicationStatus?: string;
  statusMessage?: string;

  student: {
    firstName: string;
    lastName: string;
    fatherName?: string;
    motherName?: string;

    email: string[];

    dateOfBirth: string;
    gender?: string;
    nationality?: string;

    contactNumber: string;
    avtar?: string;
  };

  guardian?: {
    Gname: string;
    Grelation: string;
    GcontactNumber: string;
  };

  address?: {
    street: string;
    city: string;
    state: string;
    pinCode: number;
  };

  AadharCard?: {
    AadharCardNumber: string;
  };

  tenth?: {
    tenthMarks: number;
    tenthBoard: string;
    tenthGrade: string;
  };

  twelfth?: {
    twelfthMarks: number;
    twelfthBoard: string;
    twelfthGrade: string;
  };

  fee: {
    amount_paid: number;
    late_Fine?: number;
    amount_due?: number;
    course_Fee?: number;
  };

  __v?: number;
}

interface StudentStore {
  students: Student[];

  setStudents: (students: Student[]) => void;

  addStudent: (student: Student) => void;

  removeStudent: (id: string) => void;

  updateStudent: (student: Student) => void;

  clearStudents: () => void;
}

const useStudentStore = create<StudentStore>((set) => ({
  students: [],

  setStudents: (students) =>
    set({
      students,
    }),

  addStudent: (student) =>
    set((state) => ({
      students: [...state.students, student],
    })),

  removeStudent: (id) =>
    set((state) => ({
      students: state.students.filter((student) => student._id !== id),
    })),

  updateStudent: (updatedStudent) =>
    set((state) => ({
      students: state.students.map((student) =>
        student._id === updatedStudent._id ? updatedStudent : student,
      ),
    })),

  clearStudents: () =>
    set({
      students: [],
    }),
}));

export default useStudentStore;
