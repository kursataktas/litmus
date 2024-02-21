/* eslint-disable */
// This code is autogenerated using @harnessio/oats-cli.
// Please do not modify this code directly.
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import type { DeclineInvitationBodyRequestBody } from '../requestBodies/DeclineInvitationBodyRequestBody';
import { fetcher, FetcherOptions } from 'services/fetcher';

export type DeclineInvitationRequestBody = DeclineInvitationBodyRequestBody;

export type DeclineInvitationOkResponse = {
  message?: string;
};

export type DeclineInvitationErrorResponse = unknown;

export interface DeclineInvitationProps extends Omit<FetcherOptions<unknown, DeclineInvitationRequestBody>, 'url'> {
  body: DeclineInvitationRequestBody;
}

export function declineInvitation(props: DeclineInvitationProps): Promise<DeclineInvitationOkResponse> {
  return fetcher<DeclineInvitationOkResponse, unknown, DeclineInvitationRequestBody>({
    url: `/auth/decline_invitation`,
    method: 'POST',
    ...props
  });
}

export type DeclineInvitationMutationProps<T extends keyof DeclineInvitationProps> = Omit<DeclineInvitationProps, T> &
  Partial<Pick<DeclineInvitationProps, T>>;

/**
 * This API is used to decline a project invite
 */
export function useDeclineInvitationMutation<T extends keyof DeclineInvitationProps>(
  props: Pick<Partial<DeclineInvitationProps>, T>,
  options?: Omit<
    UseMutationOptions<DeclineInvitationOkResponse, DeclineInvitationErrorResponse, DeclineInvitationMutationProps<T>>,
    'mutationKey' | 'mutationFn'
  >
) {
  return useMutation<DeclineInvitationOkResponse, DeclineInvitationErrorResponse, DeclineInvitationMutationProps<T>>(
    (mutateProps: DeclineInvitationMutationProps<T>) =>
      declineInvitation({ ...props, ...mutateProps } as DeclineInvitationProps),
    options
  );
}