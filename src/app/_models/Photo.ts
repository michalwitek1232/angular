import { User } from './user';

export interface Photo {
        id: number;
        url: string;
        addedDate: Date;
        isMain: boolean;
        user: User;
        userId: number;
}
