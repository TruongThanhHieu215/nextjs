import { RootState } from "store/store.component"

export const selectCurrentUser = (state: RootState) => state.user.currentUser
