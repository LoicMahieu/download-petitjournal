
## Usage

[![Greenkeeper badge](https://badges.greenkeeper.io/LoicMahieu/download-petitjournal.svg)](https://greenkeeper.io/)

```sh
$ ./node_modules/phantomjs/bin/phantomjs get_url.js
http://us-cplus-aka.canal-plus.com/i/1506/09/nip_NIP_57549_,200k,400k,800k,1500k,.mp4.csmil/master.m3u8

$ node resolve_good_m3u8.js http://us-cplus-aka.canal-plus.com/i/1506/09/nip_NIP_57549_,200k,400k,800k,1500k,.mp4.csmil/master.m3u8
http://us-cplus-aka.canal-plus.com/i/1506/09/nip_NIP_57549_,200k,400k,800k,1500k,.mp4.csmil/index_3_av.m3u8

$ ./download http://us-cplus-aka.canal-plus.com/i/1506/09/nip_NIP_57549_,200k,400k,800k,1500k,.mp4.csmil/index_3_av.m3u8 petitjournal.mkv
```
