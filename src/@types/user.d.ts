export class User implements DBUser {
  id: string;
  name: string;
  email: string;
  cel: string;
  file_id?: string;

  latitude?: number;
  longitude?: number;

  doccument?: string;

  created_at: Date;
  updated_at: Date;
}
