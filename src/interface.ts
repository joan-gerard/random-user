export interface UserType {
  gender: string | undefined;
  name: {
    title: string;
    first: string | undefined;
    last: string | undefined;
  };
  dob: {
    date: string;
    age: number;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    country: string;
    postcode: number;
  };
  picture: {
    large: string;
  };
}
