import React from 'react';
import Row from '../Row/Row';
import { requests } from '../../../utils/request';

const Rowlist = () => {
  return (
    <div className="rowlist">
      {/* Netflix Originals */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      {/* Trending & Top Rated */}
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      {/* Movie Genres */}
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Drama Movies" fetchUrl={requests.fetchDramaMovies} />
      <Row title="Family Movies" fetchUrl={requests.fetchFamilyMovies} />
      <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies} />
      <Row title="History Movies" fetchUrl={requests.fetchHistoryMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Music Movies" fetchUrl={requests.fetchMusicMovies} />
      <Row title="Mystery Movies" fetchUrl={requests.fetchMysteryMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Sci-Fi Movies" fetchUrl={requests.fetchSciFiMovies} />
      <Row title="Thriller Movies" fetchUrl={requests.fetchThrillerMovies} />
      <Row title="War Movies" fetchUrl={requests.fetchWarMovies} />
      <Row title="Western Movies" fetchUrl={requests.fetchWesternMovies} />

      {/* TV Shows */}
      <Row title="Popular TV Shows" fetchUrl={requests.fetchTVShowsPopular} />
      <Row title="Top Rated TV Shows" fetchUrl={requests.fetchTVShowsTopRated} />
      console.log("jhghghgh");
    </div>
  );
};

export default Rowlist;
