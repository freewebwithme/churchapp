import gql from 'graphql-tag';

export const MOST_RECENT_VIDEOS = gql`
  query($order: String!, $query: String!, $maxResults: Int!) {
    searchVideos(order: $order, query: $query, maxResults: $maxResults) {
      id
      etag
      nextPageToken
      prevPageToken
      resultsPerPage
      totalResults
      items {
        id
        videoId
        channelId
        channelTitle
        description
        etag
        liveBroadcastContent
        publishedAt
        thumbnailUrl
        title
      }
    }
  }
`;

export const LATEST_VIDEO = gql`
  query {
    searchVideos(order: "date", query: "", maxResults: 1) {
      id
      items {
        id
        videoId
        channelId
        channelTitle
        description
        etag
        liveBroadcastContent
        publishedAt
        thumbnailUrl
        title
      }
    }
  }
`;
