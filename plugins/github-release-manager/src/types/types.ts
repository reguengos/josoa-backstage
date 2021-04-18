/*
 * Copyright 2021 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export type ComponentConfig<Args> =
  | {
      omit?: void;
      successCb?: (args: Args) => Promise<void> | void;
    }
  | {
      omit: boolean;
      successCb?: void;
    };

interface CreateRcSuccessCbArgs {
  gitHubReleaseUrl: string;
  gitHubReleaseName: string | null;
  comparisonUrl: string;
  previousTag?: string;
  createdTag: string;
}
export type ComponentConfigCreateRc = ComponentConfig<CreateRcSuccessCbArgs>;

interface PromoteRcSuccessCbArgs {
  gitHubReleaseUrl: string;
  gitHubReleaseName: string | null;
  previousTagUrl: string;
  previousTag: string;
  updatedTagUrl: string;
  updatedTag: string;
}
export type ComponentConfigPromoteRc = ComponentConfig<PromoteRcSuccessCbArgs>;

interface PatchSuccessCbArgs {
  updatedReleaseUrl: string;
  updatedReleaseName: string | null;
  previousTag: string;
  patchedTag: string;
  patchCommitUrl: string;
  patchCommitMessage: string;
}
export type ComponentConfigPatch = ComponentConfig<PatchSuccessCbArgs>;

export interface ResponseStep {
  message: string | React.ReactNode;
  secondaryMessage?: string | React.ReactNode;
  link?: string;
  icon?: 'success' | 'failure';
}
