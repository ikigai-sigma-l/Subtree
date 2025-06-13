
/*
 * copy from avplayer
 * for avoid circular dependency
 */

import Stats from './struct/stats'
import { AVFrameRef } from 'avutil/struct/avframe'
import { AVPacketRef } from 'avutil/struct/avpacket'
import List from 'cheap/std/collection/List'
import { Mutex } from 'cheap/thread/mutex'

@struct
export class AVPlayerGlobalData {
  avpacketList: List<pointer<AVPacketRef>>
  avframeList: List<pointer<AVFrameRef>>
  avpacketListMutex: Mutex
  avframeListMutex: Mutex
  stats: Stats
  sharedTimeCodeList: List<int64>
  sharedTimeCodeMutex: Mutex
}
