import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import getLikedSongs from "@/actions/getLikedSongs";
import { Song } from "@/types";

jest.mock("@supabase/auth-helpers-nextjs");
jest.mock("next/headers");

describe("getLikedSongs", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns an empty array if there is an error", async () => {
    const mockSupabaseClient = {
      auth: {
        getSession: jest.fn().mockResolvedValue({ data: { session: null } }),
      },
      from: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      order: jest.fn().mockReturnThis(),
      then: jest.fn().mockResolvedValue({ error: true, data: null }),
    };

    (createServerComponentClient as jest.Mock).mockReturnValue(
      mockSupabaseClient
    );
    (cookies as jest.Mock).mockReturnValue({});

    const result = await getLikedSongs();
    expect(result).toEqual([]);
  });

  it("returns an empty array if no data is returned", async () => {
    const mockSupabaseClient = {
      auth: {
        getSession: jest.fn().mockResolvedValue({
          data: { session: { user: { id: "user-id" } } },
        }),
      },
      from: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      order: jest.fn().mockReturnThis(),
      then: jest.fn().mockResolvedValue({ error: null, data: null }),
    };

    (createServerComponentClient as jest.Mock).mockReturnValue(
      mockSupabaseClient
    );
    (cookies as jest.Mock).mockReturnValue({});

    const result = await getLikedSongs();
    expect(result).toEqual([]);
  });

  it("returns liked songs correctly", async () => {
    const mockData = [
      { songs: { id: 1, title: "Song 1" } },
      { songs: { id: 2, title: "Song 2" } },
    ];

    const mockSupabaseClient = {
      auth: {
        getSession: jest.fn().mockResolvedValue({
          data: { session: { user: { id: "user-id" } } },
        }),
      },
      from: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      order: jest.fn().mockReturnThis(),
      then: jest.fn().mockResolvedValue({ error: null, data: mockData }),
    };

    (createServerComponentClient as jest.Mock).mockReturnValue(
      mockSupabaseClient
    );
    (cookies as jest.Mock).mockReturnValue({});

    const result = await getLikedSongs();
    expect(result).toEqual(mockData.map((item) => item.songs));
  });
});
