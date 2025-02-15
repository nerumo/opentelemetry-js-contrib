/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type * as dns from 'dns';

export type Dns = typeof dns;

export type LookupFunction = ((
  hostname: string,
  family: number,
  callback: LookupSimpleCallback
) => void) &
  ((
    hostname: string,
    options: dns.LookupOneOptions,
    callback: LookupSimpleCallback
  ) => void) &
  ((
    hostname: string,
    options: dns.LookupAllOptions,
    callback: (
      err: NodeJS.ErrnoException | null,
      addresses: dns.LookupAddress[]
    ) => void
  ) => void) &
  ((
    hostname: string,
    options: dns.LookupOptions,
    callback: (
      err: NodeJS.ErrnoException | null,
      address: string | dns.LookupAddress[],
      family: number
    ) => void
  ) => void) &
  ((hostname: string, callback: LookupSimpleCallback) => void);

export type LookupSimpleArgs = [number, LookupSimpleCallback];
export type LookupOneArgs = [dns.LookupOneOptions, LookupSimpleCallback];
export type LookupAllArgs = [
  dns.LookupAllOptions,
  (err: NodeJS.ErrnoException | null, addresses: dns.LookupAddress[]) => void
];
export type LookupArgs = [
  dns.LookupOptions,
  (
    err: NodeJS.ErrnoException | null,
    address: string | dns.LookupAddress[],
    family: number
  ) => void
];
export type LookupArgSignature = LookupSimpleArgs &
  LookupSimpleCallback &
  LookupOneArgs &
  LookupAllArgs &
  LookupArgs;

export type LookupFunctionSignature = (
  hostname: string,
  args: Array<LookupArgSignature>
) => void;
export type LookupPromiseSignature = (
  hostname: string,
  ...args: unknown[]
) => Promise<unknown>;
export type LookupSimpleCallback = (
  err: NodeJS.ErrnoException | null,
  address: string,
  family: number
) => void;

export type LookupCallbackSignature = LookupSimpleCallback &
  ((
    err: NodeJS.ErrnoException | null,
    addresses: dns.LookupAddress[]
  ) => void) &
  ((
    err: NodeJS.ErrnoException | null,
    address: string | dns.LookupAddress[],
    family: number
  ) => void);
