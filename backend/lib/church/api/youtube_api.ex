defmodule Church.Api.YoutubeApi do
  alias GoogleApi.YouTube.V3.Api.{Playlists, PlaylistItems, Search}

  @doc """
  Get all Playlists in specified channel

  Returns a {:ok, %GoogleApi.YouTube.V3.Model.PlaylistListResponse{}}
  """

  @spec get_playlists(%Tesla.Client{}, String.t(), String.t(), String.t()) ::
          %GoogleApi.YouTube.V3.Model.PlaylistListResponse{}

  def get_playlists(
        %Tesla.Client{} = connection,
        part \\ "snippet",
        api_key,
        channel_id,
        max_results \\ 10
      ) do
    Playlists.youtube_playlists_list(connection, part,
      key: api_key,
      channelId: channel_id,
      maxResults: max_results
    )
  end

  @doc """
  Get playlist items in specified playlist.
  Returns a {:ok, %GoogleApi.YouTube.V3.Model.PlaylistItemListResponse{}}
  """
  @spec get_playlist_items(%Tesla.Client{}, String.to(), String.t(), String.t(), integer) ::
          %GoogleApi.YouTube.V3.Model.PlaylistItemListResponse{}

  def get_playlist_items(connection, part \\ "snippet", api_key, playlist_id, max_results \\ 25) do
    PlaylistItems.youtube_playlist_items_list(connection, part,
      key: api_key,
      playlistId: playlist_id,
      maxResults: max_results
    )
  end

  def search_videos(
        connection,
        part \\ "snippet",
        query \\ "",
        order \\ "date",
        api_key,
        channel_id,
        max_results \\ 25,
        next_page_token
      ) do
    Search.youtube_search_list(connection, part,
      key: api_key,
      channelId: channel_id,
      type: "video",
      maxResults: max_results,
      order: order,
      q: query,
      nextPageToken: next_page_token
    )
  end
end
