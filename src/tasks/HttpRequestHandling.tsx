import { FC, useEffect } from 'react';
import { GetAllEpisodes } from '../interfaces/responses/episodes';
import { IEpisode } from '../interfaces/episode.interface';

const HttpRequestHandling: FC = (): JSX.Element => {
   useEffect(() => {
      let episodes: Array<IEpisode> = [];
      fetch('https://rickandmortyapi.com/api/episode')
         .then((res) => res.json())
         .then((res: GetAllEpisodes) => {
            episodes = res.results;
            const promises = episodes.map((episode, i) => {
               return Promise.allSettled(
                  episode.characters.map((characterUrl) => fetch(characterUrl).then((results: Response) => results.json()))
               ).then((results) => {
                  episodes[i].characters = results.map((result) => {
                     if (result.status === 'fulfilled') {
                        return result.value;
                     }
                  });
               });
            });
            Promise.allSettled(promises).then(() => {
               console.log('done', { episodes });
            });
         });
   }, []);

   return <div>Http request handling</div>;
};

export default HttpRequestHandling;
