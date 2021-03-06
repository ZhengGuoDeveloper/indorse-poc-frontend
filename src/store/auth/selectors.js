import { createSelector } from 'reselect';

const authState = rootState => rootState.auth;

export const selectIsSignedUp = createSelector(
  authState,
  authState => authState.signedUp
);

export const selectEmailVerification = createSelector(
  authState,
  authState => authState.emailVerification
);

export const selectAuthToken = createSelector(
  authState,
  authState => authState.token
);

export const selectIsLoggedIn = createSelector(
  authState,
  authState => authState.loggedIn
);

export const selectCurrentUser = createSelector(
  authState,
  authState => authState.currentUser
);

export const selectIsCurrentUserApproved = createSelector(
  selectCurrentUser,
  currentUser => currentUser && currentUser.approved ? currentUser.approved.toString() === 'true' : false
)

export const selectIsCurrentUserAdmin = createSelector(
  selectCurrentUser,
  currentUser => currentUser ? currentUser.role === 'admin' : false
)

export const selectCurrentUserId = createSelector(
  authState,
  authState => authState.currentUser ? authState.currentUser.id : undefined
);

export const selectCurrentUserRole = createSelector(
  authState,
  authState => authState.currentUser ? authState.currentUser.role : undefined
);

export const selectIsForgotPasswordEmailSent = createSelector(
  authState,
  authState => authState.forgotPasswordEmailSent
);

export const selectCurrentUserClaimsFetched = createSelector(
  authState,
  authState => authState.currentUserClaimsFetched
);

export const selectCurrentUserVotesFetched = createSelector(
  authState,
  authState => authState.currentUserVotesFetched
);
