export interface Patent {
  id: string;
  title: string;
  abstract: string;
  claims: string;
  description: string;
  assignee: string;
  inventor: string;
  applicationDate: string;
}

export interface SearchFilters {
  assignee: string;
  inventor: string;
  fromDate: string;
  toDate: string;
}

export interface SearchPayload {
  query: string;
  filters: SearchFilters;
}

export interface User {
  id: string;
  email: string;
  name: string;
  initials: string;
}
