export interface Image {
  small: string;
  large: string;
  empty: boolean;
  colorCode: number;
}

export interface Name {
  fullName: string;
  firstName: string;
  middleName: string;
  lastName: string;
}

export interface Checkin {
  childCheckinId: string;
  childId: string;
  institutionId: string;
  groupId: string;
  checkinTime: string;
  pickupTime: string;
  pickupRelationId: string;
  goHomeWithChildId: string;
  checkoutTime: string;
  checkinLoginId: string;
  checkoutLoginId: string;
  autoCheckedOut: boolean;
  deletedAt: string | null;
  hours: number;
  checkinStatements: null;
}

export interface Child {
  childId: string;
  institutionId: string;
  groupId: string;
  createdTime: string;
  name: Name;
  birthday: string;
  homeAddress: null;
  extraInfo: string;
  language: string;
  nationality: string;
  birthplace: string;
  gender: number;
  startDate: string;
  endDate: null;
  leavingReason: null;
  isTestChild: boolean;
  relations: null;
  image: Image;
  isSleeping: boolean;
  naps: unknown[];
  hasVacation: boolean;
  isSick: boolean;
  isAbsent: boolean;
  leaves: unknown[];
  onBus: boolean;
  onTrip: boolean;
  statuses: unknown[];
  statusRegistrations: unknown[];
  checkins: Checkin[];
  checkedIn: boolean;
  checkinTime: string;
  pickupTime: string;
  pickupRelationId: string;
  pickupName: string;
}

export interface ChildrenResponse {
  children: Child[];
}
