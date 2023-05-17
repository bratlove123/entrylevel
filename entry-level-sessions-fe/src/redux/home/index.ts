import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Session } from '../../models/session.model';
import { Status } from '../../models/status.model';
import SessionsDataService from '../../services/sessions.service';
import { compareDesc } from 'date-fns';
//Define state
export interface HomeState {
  isLoading: boolean;
  sessions: Session[];
}

const initialState: HomeState = {
  isLoading: false,
  sessions: []
};

//Define action
export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSessions: (state, action: PayloadAction<Session[]>) => {
      state.sessions = action.payload;
      state.isLoading = false;
    }
  }
});

export const { setLoading, setSessions } = homeSlice.actions;

//Define async action
export const getSessions =
  ({ shortTitle, status }: { shortTitle?: string; status?: Status }) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (dispatch: any) => {
    dispatch(setLoading(true));
    const { data } = await SessionsDataService.getAll({ shortTitle, status });
    let responseSessions = data;
    responseSessions.sort(function (a, b) {
      return compareDesc(new Date(a.start_date), new Date(b.start_date));
    });
    responseSessions = responseSessions.slice(0, 50);
    dispatch(setSessions(responseSessions));
  };

export default homeSlice.reducer;
