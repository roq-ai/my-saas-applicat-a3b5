import { GetQueryInterface } from 'interfaces';

export interface PlatformInterface {
  id?: string;
  name: string;
  url: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface PlatformGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  url?: string;
}
