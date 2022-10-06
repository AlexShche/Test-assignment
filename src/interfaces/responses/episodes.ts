import { IEpisode } from '../episode.interface';

export interface GetAllEpisodes {
   info: {
      count: number;
      pages: number;
      next: string;
      prev: null;
   };
   results: Array<IEpisode>;
}
