import { CommitOptions, Payload } from 'vuex';

export interface Commit {
  (type: string, payload?: unknown, options?: CommitOptions): void;
  <P extends Payload>(payloadWithType: P, options?: CommitOptions): void;
}
