// canales de lista m3u https://jsfiddle.net/onigetoc/f26zuLtw/
function m3utojson(m3u) {
    return m3u
        .replace('#EXTM3U', '')
        .split('#EXTINF:-1 ')
        .slice(1)
        .map(function(str, index) {
            let channel = str.split('\n').slice(0,-1);
			if(channel[1].indexOf('m3u8') >= 0){
            /* 
                    channel[0].split('"')[0]
                        | channel[0].split('"')[1]
                        |    |   channel[0].split('"')[2]
                        |    |      |    channel[0].split('"')[3]   
                        |    |      |        |     channel[0].split('"')[4]  
                        |    |      |        |         |      channel[0].split('"')[5]          
                        |    |      |        |         |             |        channel[0].split(',')[1]    
                        __|__  |  ____|___   __|__   ____|___   _______|______    ___|__
                    |     | | |        | |     | |        | |              |  |      |
            #EXTINF:-1 tvg-id="1" tvg-name="nombre1" tvg-logo="https://foto.png", nombre1
            https://enlace.m3u8
            -------|-----------
                channel[1]

            */
                return {
                 "id": index + 1,
                 "tvg-id": channel[0].split('"')[1],
                 "title": channel[0].split('"')[3],
                 "name": channel[0].split(',')[1],
                 "m3u8_url": channel[1].replace('http://', 'https://')                        
                }
			}
        });
}



// https://www.m3u.cl/iptv-chile.php
let m3u = `
#EXTM3U
#EXTINF:-1 tvg-id="4" tvg-name="Retro Plus TV" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", Retro Plus TV * | CL
https://video06.logicahost.com.br/retroplustv/retroplustv/playlist.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Retro Plus TV Señal 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", Retro Plus TV Señal 2 * | CL
https://video06.logicahost.com.br/retroplussenal2/retroplussenal2/playlist.m3u8
#EXTINF:-1 tvg-id="465" tvg-name="Retro Plus TV Señal 3" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", Retro Plus TV Señal 3 * | CL
https://video06.logicahost.com.br/retroplussenal3/retroplussenal3/playlist.m3u8
#EXTINF:-1 tvg-id="1160" tvg-name="VClassicTV" tvg-logo="https://i2.paste.pics/99cc893c37784a17aac9a95ac3c7e5c8.png", VClassicTV * | CL
https://5eaccbab48461.streamlock.net:1936/8112/8112/playlist.m3u8
#EXTINF:-1 tvg-id="1255" tvg-name="VClassicTV Tropical" tvg-logo="https://i2.paste.pics/355ba171055dd0e6747131673432cc18.png", VClassicTV Tropical * | CL
https://5eaccbab48461.streamlock.net:1936/8222/8222/playlist.m3u8
#EXTINF:-1 tvg-id="31" tvg-name="Portal FoxMix" tvg-logo="https://i2.paste.pics/6abc319563c207c4ba1fb2c199fedd86.png", Portal FoxMix * | CL
https://panel.tvstream.cl:1936/8040/8040/playlist.m3u8
#EXTINF:-1 tvg-id="1436" tvg-name="Apanines TV" tvg-logo="https://i2.paste.pics/eee2cbc0f52cbb9c7c73ee13f72c0b96.png", Apanines TV * | CL
https://inliveserver.com:1936/10010/10010/playlist.m3u8
#EXTINF:-1 tvg-id="1058" tvg-name="Spectrum Channel" tvg-logo="https://i2.paste.pics/e3cde58abf314e0e6b17b595c357936a.png", Spectrum Channel * | CL
https://panel.miplay.cl:8081/spectrumchannel/index.m3u8
#EXTINF:-1 tvg-id="1112" tvg-name="Fanpop TV" tvg-logo="https://i2.paste.pics/5d6d67c298360548fd41a897f987628c.png", Fanpop TV * | CL
https://wifispeed.trapemn.tv:1936/infantil/energeek-2/playlist.m3u8
#EXTINF:-1 tvg-id="947" tvg-name="EnerGeek" tvg-logo="https://i2.paste.pics/5efe361b75000b6eb6104bf22a0880fe.png", EnerGeek * | CL
https://wifispeed.trapemn.tv:1936/infantil/energeek-1/playlist.m3u8
#EXTINF:-1 tvg-id="1266" tvg-name="EnerGeek Radio" tvg-logo="https://i.paste.pics/4a15cf6d76aaf3246f3a6cedd48e0ac9.png", EnerGeek Radio * | CL
https://stream.wifiexpert.cl/energeek/radio/playlist.m3u8
#EXTINF:-1 tvg-id="1300" tvg-name="Moni TV" tvg-logo="https://i2.paste.pics/dad53a17aceb11d80b7ec90ec2398f2f.png", Moni TV * | CL
https://tv.streaming-chile.com:1936/ngencrcbyy/ngencrcbyy/playlist.m3u8
#EXTINF:-1 tvg-id="1420" tvg-name="Terror TV" tvg-logo="https://i2.paste.pics/3d543690d890b9a5918a8025aebcf2bc.png", Terror TV * | CL
https://tv.streaming-chile.com:1936/8140/8140/playlist.m3u8
#EXTINF:-1 tvg-id="13" tvg-name="Ruidos TV" tvg-logo="https://i2.paste.pics/004835d0c1a19dd14fa643dd18897d4d.png", Ruidos TV * | CL
https://panel.tvstream.cl:1936/8022/8022/playlist.m3u8
#EXTINF:-1 tvg-id="1312" tvg-name="Eternal Metal" tvg-logo="https://i.paste.pics/8504c462729d61af6e1f0b59323f9a85.png", Eternal Metal * | CL
https://vdo.panelstreaming.live:3261/hybrid/play.m3u8
#EXTINF:-1 tvg-id="996" tvg-name="Latinos Radio" tvg-logo="https://i2.paste.pics/f5a6133c6b0fcec076105dfd2508549c.png", Latinos Radio * | CL
https://stmv2.zcasthn.com.br/latinosmedia/latinosmedia/playlist.m3u8
#EXTINF:-1 tvg-id="1014" tvg-name="PlanetaTV Music" tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", PlanetaTV Music * | CL
https://scl.edge.grupoz.cl/music/live/music.m3u8
#EXTINF:-1 tvg-id="1016" tvg-name="PlanetaTV Movies" tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", PlanetaTV Movies * | CL
https://scl.edge.grupoz.cl/movie/live/movie.m3u8
#EXTINF:-1 tvg-id="1424" tvg-name="Parentesis TV" tvg-logo="https://i2.paste.pics/d94a5f7f1913eea53167784065b56aee.png", Parentesis TV * | CL
https://vdo.miserver.pro:3591/live/parentesistvlive.m3u8
#EXTINF:-1 tvg-id="771" tvg-name="Mundo de la Musica TV" tvg-logo="https://i2.paste.pics/a66f18725932decfa4fcf7f634060922.png", Mundo de la Musica TV * | CL
https://tv.streaming-chile.com:1936/mundodelamusicatv/mundodelamusicatv/playlist.m3u8
#EXTINF:-1 tvg-id="1195" tvg-name="La Chilena TV" tvg-logo="https://i2.paste.pics/8c05e352159b95f3dc0092a6149b3daf.png", La Chilena TV * | CL
https://vdochile.com:3134/hybrid/play.m3u8
#EXTINF:-1 tvg-id="1288" tvg-name="Suyai TV" tvg-logo="https://i2.paste.pics/3d29bee85a41e947ab505098d83e8d64.png", Suyai TV * | CL
https://5ff3d9babae13.streamlock.net:443/ewdnnusyjt/ewdnnusyjt/playlist.m3u8
#EXTINF:-1 tvg-id="1287" tvg-name="CDR" tvg-logo="https://i2.paste.pics/bd867f1a431411c9720ec246807ade49.png", CDR * | CL
https://live-hls-xgod.livepush.io/live_cdn/emaf6CHYV7M-RQcL2/index.m3u8
#EXTINF:-1 tvg-id="1098" tvg-name="CRTV" tvg-logo="https://i2.paste.pics/bf68b159547597c39574aec9dd7c626a.png", CRTV * | CL
https://vdo.panelstreaming.live:3058/hybrid/play.m3u8
#EXTINF:-1 tvg-id="897" tvg-name="Retro Play TV" tvg-logo="https://i2.paste.pics/90f2f266cb4f68333119a06b99d65d10.png", Retro Play TV * | CL
https://v4.tustreaming.cl/retroplaytv/index.m3u8
#EXTINF:-1 tvg-id="1482" tvg-name="Radio Eva Digital" tvg-logo="https://i2.paste.pics/b242fea3347af3f807d518f3b834d2c1.png", Radio Eva Digital * | CL
https://vdo.panelstreaming.live:3466/stream/play.m3u8
#EXTINF:-1 tvg-id="1481" tvg-name="Mamalluca TV" tvg-logo="https://i2.paste.pics/5304dac5430b156b0909c664448fdc7a.png", Mamalluca TV * | CL
https://stmv2.zcasthn.com.br/mamallucatv/mamallucatv/playlist.m3u8
#EXTINF:-1 tvg-id="1476" tvg-name="Urban Pro DJ" tvg-logo="https://i2.paste.pics/5aed2aa69dbe9107dac26945d8e0f05c.png", Urban Pro DJ * | CL
https://vdochile.com:3119/stream/play.m3u8
#EXTINF:-1 tvg-id="1474" tvg-name="WF9" tvg-logo="https://i2.paste.pics/82bfc4cf5af7c8e65bbb2711cc1680d3.png", WF9 * | CL
https://5eaccbab48461.streamlock.net:1936/8240/8240/playlist.m3u8
#EXTINF:-1 tvg-id="1473" tvg-name="Music PUQ" tvg-logo="https://i2.paste.pics/e011164c3dcd24bc2f5f7924677e3891.png", Music PUQ * | CL
https://vdochile.com:3761/live/redupxprlive.m3u8
#EXTINF:-1 tvg-id="1472" tvg-name="La Nuestra" tvg-logo="https://i2.paste.pics/45043ca151a5f9ab3e8c62078c79ab26.png", La Nuestra * | CL
https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/ln/ln.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1469" tvg-name="TV Canal 5" tvg-logo="https://i2.paste.pics/fc72e5076205656f9240cf2c19659f51.png", TV Canal 5 * | CL
https://vdochile.com:3088/stream/play.m3u8
#EXTINF:-1 tvg-id="1468" tvg-name="Radio Araucania Laja" tvg-logo="https://i2.paste.pics/f49ac74349c5d554de967f2387274e12.png", Radio Araucania Laja * | CL
https://stmv2.zcasthn.com.br/radioaraucania/radioaraucania/playlist.m3u8
#EXTINF:-1 tvg-id="1467" tvg-name="Radio UC" tvg-logo="https://i2.paste.pics/174966158c389cbc1163bc9cddc678ce.png", Radio UC * | CL
https://stmv2.zcasthn.com.br/radiouc/radiouc/playlist.m3u8
#EXTINF:-1 tvg-id="1466" tvg-name="Pandamax TV" tvg-logo="https://i2.paste.pics/ec98378f852412f496eaa557998255ac.png", Pandamax TV * | CL
https://streaming.zappix.live:3062/live/animaxlive.m3u8
#EXTINF:-1 tvg-id="1465" tvg-name="33 Segundos TV" tvg-logo="https://i2.paste.pics/5590098cd138c0b1a626ecb266c1c10e.png", 33 Segundos TV * | CL
https://stmv2.zcasthn.com.br/segundos/segundos/playlist.m3u8
#EXTINF:-1 tvg-id="1463" tvg-name="Radio Bienvenida FM" tvg-logo="https://i2.paste.pics/17ed714058cb5e62802ef8e04482748a.png", Radio Bienvenida FM * | CL
https://panel.tvstream.cl:1936/8012/8012/playlist.m3u8
#EXTINF:-1 tvg-id="1461" tvg-name="Los Rios Al Dia" tvg-logo="https://i2.paste.pics/654339e3e8e4096492037cfbca2ec3e2.png", Los Rios Al Dia * | CL
https://losriosaldia.ngrok.app/hls/stream.m3u8
#EXTINF:-1 tvg-id="1457" tvg-name="Comunitaria Radio Tv" tvg-logo="https://i2.paste.pics/847f6fb846d40df92c90f6daff9730e9.png", Comunitaria Radio Tv * | CL
https://panel.tvstream.cl:1936/8050/8050/playlist.m3u8
#EXTINF:-1 tvg-id="1455" tvg-name="TV EnPlacilla" tvg-logo="https://i2.paste.pics/201212ba4a9e52d2a39ddb6bb86b18d5.png", TV EnPlacilla * | CL
https://panel.tvstream.cl:1936/8038/8038/playlist.m3u8
#EXTINF:-1 tvg-id="1451" tvg-name="Nexovision" tvg-logo="https://i2.paste.pics/3279c8ece7f77ca4b871193c50a37fca.png", Nexovision * | CL
https://stmv2.zcasthn.com.br/nexovision/nexovision/playlist.m3u8
#EXTINF:-1 tvg-id="905" tvg-name="Taltal TV" tvg-logo="https://i2.paste.pics/18b445e2ec674ae21c12e73f6714501d.png", Taltal TV * | CL
https://ssh101.bozztv.com/ssh101/taltal/playlist.m3u8
#EXTINF:-1 tvg-id="1445" tvg-name="Teatrix" tvg-logo="https://i2.paste.pics/704a8832ee0cecaadc927139a8a43db8.png", Teatrix * | CL
https://content.uplynk.com/channel/585ab4fbd865426abd6fbd48fc631b6e.m3u8
#EXTINF:-1 tvg-id="1435" tvg-name="+Cine" tvg-logo="https://i2.paste.pics/e349b7ba64870b6e3cceb058c1f3a6ce.png", +Cine * | CL
https://tv.streaming-chile.com:1936/8142/8142/+Cine.m3u8
#EXTINF:-1 tvg-id="349" tvg-name="Supersonika TV" tvg-logo="https://i2.paste.pics/fef1c0d39162f064f634fd3250f23659.png", Supersonika TV * | CL
https://unlimited1-cl-isp.dps.live/supersonikatv/supersonikatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1434" tvg-name="Marga Marga TV" tvg-logo="https://i2.paste.pics/ac3ec8e1657f335cc9a19e8c716f7d42.png", Marga Marga TV * | CL
https://v1.tustreaming.cl/margamargatv/index.m3u8
#EXTINF:-1 tvg-id="1432" tvg-name="El Centro TV" tvg-logo="https://i2.paste.pics/c7efa75621818f201a2d01c7eb17cf6c.png", El Centro TV * | CL
https://v1.tustreaming.cl:443/diarioelcentrotv/index.m3u8
#EXTINF:-1 tvg-id="1431" tvg-name="Canal 30 Loncomilla" tvg-logo="https://i2.paste.pics/4002196065803939c387bb88ae54b8be.png", Canal 30 Loncomilla * | CL
https://v1.tustreaming.cl:19360/canal30loncomilla/canal30loncomilla.m3u8
#EXTINF:-1 tvg-id="1430" tvg-name="Classic Channel" tvg-logo="https://i2.paste.pics/d2ece12bb549ab394f008dd5415ebbbf.png", Classic Channel * | CL
https://paneltv.online:1936/8046/8046/playlist.m3u8
#EXTINF:-1 tvg-id="1428" tvg-name="Castro Municipio TV" tvg-logo="https://i2.paste.pics/0e74cd22caf321b8f0c13583ab55f1d7.png", Castro Municipio TV * | CL
https://videostream.chileservidores.com:8081/chiloefour/index.m3u8
#EXTINF:-1 tvg-id="1427" tvg-name="TV Provincial" tvg-logo="https://i2.paste.pics/e04ebf765005c8e9ef9a26ef0c0c1134.png", TV Provincial * | CL
https://v4.tustreaming.cl/limachemovil/index.m3u8
#EXTINF:-1 tvg-id="1422" tvg-name="Radio Rosa FM" tvg-logo="https://i2.paste.pics/778a5721e70978104e5dd47376775293.png", Radio Rosa FM * | CL
https://tv.streaming-chile.com:1936/rosafm/rosafm/playlist.m3u8
#EXTINF:-1 tvg-id="1421" tvg-name="13 Kids" tvg-logo="https://i2.paste.pics/fe14daf029d32fcab7f6305dc2e7a86e.png", 13 Kids * | CL
https://origin.dpsgo.com/ssai/event/LhHrVtyeQkKZ-Ye_xEU75g/master.m3u8
#EXTINF:-1 tvg-id="1416" tvg-name="TV y TV" tvg-logo="https://i2.paste.pics/5f5e3edcd542883e19bd1c0c59b59fad.png", TV y TV * | CL
https://Stmv1.zcasthn.com.br/tvytv/tvytv/playlist.m3u8
#EXTINF:-1 tvg-id="1418" tvg-name="Chile Visual TV" tvg-logo="https://i2.paste.pics/9433332812f73a536d41248ff05a903c.png", Chile Visual TV * | CL
https://stmv2.zcasthn.com.br/streamlatino/streamlatino/playlist.m3u8
#EXTINF:-1 tvg-id="1415" tvg-name="Radio Stefania" tvg-logo="https://i2.paste.pics/72aa914d751b131216d9c3880ea3556b.png", Radio Stefania * | CL
https://Stmv1.zcasthn.com.br/franzvalenzuela/franzvalenzuela/playlist.m3u8
#EXTINF:-1 tvg-id="1408" tvg-name="Radio Continente FM" tvg-logo="https://i2.paste.pics/793d78275b250f7d1919c5cea6febd95.png", Radio Continente FM * | CL
https://streamlov.alsolnet.com/continentefm/live/playlist.m3u8
#EXTINF:-1 tvg-id="1407" tvg-name="Milodon TV" tvg-logo="https://i2.paste.pics/11978fb15e78b24dc2c7cd78342f3c9f.png", Milodon TV * | CL
https://oracle.streaminghd.cl/milodontvenvivo/milodontvenvivo/playlist.m3u8
#EXTINF:-1 tvg-id="1404" tvg-name="Canal Noticias Colchagua" tvg-logo="https://i2.paste.pics/e2bc4cbe5aab410fe3b44148f01c5877.png", Canal Noticias Colchagua * | CL
https://oracle.streaminghd.cl:443/cncmedia/cncmedia/playlist.m3u8
#EXTINF:-1 tvg-id="1402" tvg-name="Canal Pais" tvg-logo="https://pbs.twimg.com/profile_images/1603428853350907904/-UBQCAHz_400x400.jpg", Canal Pais * | CL
https://unlimited1-cl-isp.dps.live/canalpais/canalpais.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1396" tvg-name="Alerce TV" tvg-logo="https://i2.paste.pics/3fc7065e88b283066dc23173d5e21e2b.png", Alerce TV * | CL
https://s1.tvdatta.com:3384/live/canal20tvlive.m3u8
#EXTINF:-1 tvg-id="1393" tvg-name="La Melinkana TV" tvg-logo="https://i.paste.pics/d97e9b3a023839600a489348ed5f62df.png", La Melinkana TV * | CL
https://v1.tustreaming.cl/melinkana/index.m3u8
#EXTINF:-1 tvg-id="1330" tvg-name="Sureña TV" tvg-logo="https://i.paste.pics/61bca781a30ae3b52da01e9d47706654.png", Sureña TV * | CL
http://170.247.204.26:8081/wircom/surena/playlist.m3u8
#EXTINF:-1 tvg-id="1391" tvg-name="En la Noticia" tvg-logo="https://i.paste.pics/5bce4a819c49af17fd39a8d0f4a697e3.png", En la Noticia * | CL
https://videostream.chileservidores.com:8081/chiloetwo/index.m3u8
#EXTINF:-1 tvg-id="1389" tvg-name="Radio Acogida" tvg-logo="https://i.paste.pics/7cdfc8ed9e16ea9a007b84b7fe63c1de.png", Radio Acogida * | CL
https://videostream.chileservidores.com:8081/chiloethree/index.m3u8
#EXTINF:-1 tvg-id="1385" tvg-name="Veo TV" tvg-logo="https://i.paste.pics/801cf9a8ebc73581ca137bde012b80e1.png", Veo TV * | CL
https://oracle.streaminghd.cl/eduardo555/eduardo555/playlist.m3u8
#EXTINF:-1 tvg-id="1383" tvg-name="ATV Valdivia" tvg-logo="https://i.paste.pics/6270159fb81ff23a4e83a53a403ac21b.png", ATV Valdivia * | CL
https://6362ca6f1fc28.streamlock.net/8028/8028/playlist.m3u8
#EXTINF:-1 tvg-id="1378" tvg-name="Canal 5 Los Vilos" tvg-logo="https://i.paste.pics/6c8a3b10f42e59d51572e400faa0ed1d.png", Canal 5 Los Vilos * | CL
https://oracle.streaminghd.cl:443/canal5/canal5/playlist.m3u8
#EXTINF:-1 tvg-id="1377" tvg-name="Cauquenesnet TV" tvg-logo="https://i.paste.pics/c68d2bbc21789bd5b1ddc5353b4637ba.png", Cauquenesnet TV * | CL
https://vdo.miserver.pro:3102/stream/play.m3u8
#EXTINF:-1 tvg-id="1320" tvg-name="TV PRIME Movie" tvg-logo="https://i.paste.pics/9589e4ec10d95b3d940aa71538bc8afb.png", TV PRIME Movie * | CL
https://tv.clientetvstudio.net:3489/live/tvprimecllive.m3u8
#EXTINF:-1 tvg-id="1318" tvg-name="Los Sauces TV" tvg-logo="https://i.paste.pics/317980a53f40f246ec8a386f10c2fe9e.png", Los Sauces TV * | CL
http://live.mundogo.cl/mundo/LossaucesTV/index.m3u8
#EXTINF:-1 tvg-id="1314" tvg-name="Unetev" tvg-logo="https://i.paste.pics/a727f8da3132d12d50dd2f1c92b6a9a0.png", Unetev * | CL
https://v2.tustreaming.cl/unetev/index.m3u8
#EXTINF:-1 tvg-id="1313" tvg-name="Radio Edelweiss" tvg-logo="https://i.paste.pics/75cb3709ded84a16fb920d6eacfd7261.png", Radio Edelweiss * | CL
https://streamdemo.dyndns.biz/hls/edelweiss_src.m3u8
#EXTINF:-1 tvg-id="1309" tvg-name="Santa Cruz FM" tvg-logo="https://i.paste.pics/2ff8e62d475f86b1685957f0ef2c821b.png", Santa Cruz FM * | CL
https://unlimited1-cl-isp.dps.live/rcruz/rcruz.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1302" tvg-name="Telecauquenes" tvg-logo="https://i2.paste.pics/fd357045a21ccd1337a714a77aab254d.png", Telecauquenes * | CL
https://vdo.panelstreaming.live:3469/live/telecauqueneslive.m3u8
#EXTINF:-1 tvg-id="1299" tvg-name="Lanco TV" tvg-logo="https://i2.paste.pics/cab8424cb00058c514d0d5cd1aaaf9e2.png", Lanco TV * | CL
https://lancotv.ngrok.app/hls/stream.m3u8
#EXTINF:-1 tvg-id="1293" tvg-name="TVM" tvg-logo="https://i2.paste.pics/46d2ec568b713450ec11771e49f2dfdf.png", TVM * | CL
https://tls-cl.cdnz.cl/tvm/live/playlist.m3u8
#EXTINF:-1 tvg-id="1284" tvg-name="Autonoma Radio" tvg-logo="https://i2.paste.pics/ab3b4f72e0708cab3f568772f2f6bcac.png", Autonoma Radio * | CL
https://stream.wifispeed.cl:3033/hybrid/play.m3u8
#EXTINF:-1 tvg-id="1282" tvg-name="Galactika Media" tvg-logo="https://i2.paste.pics/334ded887e14d80c7f01e985aa2e521a.png", Galactika Media * | CL
https://oracle.streaminghd.cl/galactika/galactika/playlist.m3u8
#EXTINF:-1 tvg-id="1403" tvg-name="Red Circle" tvg-logo="https://i2.paste.pics/4fba878332fd8719df992619f751b2dd.png", Red Circle * | CL
https://5e3483cba9114.streamlock.net:443/8016/8016/playlist.m3u8
#EXTINF:-1 tvg-id="1181" tvg-name="Freestyledjs" tvg-logo="https://i2.paste.pics/d7192184924772147bbeed4fffde3680.png", Freestyledjs * | CL
https://freestyledjs.ddns.net/hls/stream.m3u8
#EXTINF:-1 tvg-id="1397" tvg-name="House music TV" tvg-logo="https://i2.paste.pics/dd681ddc5d29baacd3d2c2935b51e8ef.png", House music TV * | CL
https://paneltv.net:3767/stream/play.m3u8
#EXTINF:-1 tvg-id="1172" tvg-name="Radio Q" tvg-logo="https://i2.paste.pics/36610b128075b57027afdf3e49842a97.png", Radio Q * | CL
https://panel.miplay.cl:8081/radioq/index.m3u8
#EXTINF:-1 tvg-id="1166" tvg-name="Dance FM" tvg-logo="https://i2.paste.pics/ff3e1e1045a1968dcdbcda3824a94eb3.png", Dance FM * | CL
https://5eaccbab48461.streamlock.net:1936/dancefm_1/dancefm_1/playlist.m3u8
#EXTINF:-1 tvg-id="1128" tvg-name="Solobailalo TV" tvg-logo="https://i2.paste.pics/d96b857f73a9ce281cdef4e11766eddd.png", Solobailalo TV * | CL
https://5ff3d9babae13.streamlock.net:443/8000/8000/playlist.m3u8
#EXTINF:-1 tvg-id="1087" tvg-name="Opinionsur TV" tvg-logo="https://i2.paste.pics/bbb0373472ad737d7f75d40d9c3d1839.png", Opinionsur TV * | CL
https://stmv2.zcasthn.com.br/opinionsur/opinionsur/playlist.m3u8
#EXTINF:-1 tvg-id="432" tvg-name="HiperTV" tvg-logo="https://lh3.googleusercontent.com/-YUlLyA8Pk7Y/X5n9AMtVNNI/AAAAAAAA61E/UkiOjRsCTWMa94h4g35uC424D4E_wU_2gCK8BGAsYHg/s0/2020-10-28.png", HiperTV * | CL
https://stmv2.zcasthn.com.br/hiperconectados/hiperconectados/playlist.m3u8
#EXTINF:-1 tvg-id="1005" tvg-name="Onda Radio TV" tvg-logo="https://i2.paste.pics/791d996af084b58748f6af996631f28b.png", Onda Radio TV * | CL
https://tv.streaming-chile.com:1936/ondaradio/ondaradio/playlist.m3u8
#EXTINF:-1 tvg-id="1331" tvg-name="Super TV" tvg-logo="https://i.paste.pics/61260e061568a10afcb0dcdf499311a8.png", Super TV * | CL
https://stmv2.zcasthn.com.br/supertv/supertv/playlist.m3u8
#EXTINF:-1 tvg-id="484" tvg-name="Infinita TV Premium" tvg-logo="https://lh3.googleusercontent.com/-gtOJEZDXT74/X6ial-IEvuI/AAAAAAAA7HE/DVodKb8gbr4UYli0KdKGZf9Bfz4WrXqwQCK8BGAsYHg/s0/2020-11-08.png", Infinita TV Premium | US
https://s2.tvdatta.com:3753/hybrid/play.m3u8
#EXTINF:-1 tvg-id="482" tvg-name="Frecuencia Musical TV" tvg-logo="https://lh3.googleusercontent.com/-t4L8hNzWCqg/X5DE85fJ91I/AAAAAAAA6nc/obm_y2scE0ULVHohSM5KdnQEkvMjOYEOACK8BGAsYHg/s0/2020-10-21.png", Frecuencia Musical TV | US
https://s2.tvdatta.com:3307/hybrid/play.m3u8
#EXTINF:-1 tvg-id="1074" tvg-name="Eva Retro" tvg-logo="https://i2.paste.pics/1fac7deeb4ca257162cde40abd006d9d.png", Eva Retro | CL
https://stmv2.zcasthn.com.br/evaretro/evaretro/playlist.m3u8
#EXTINF:-1 tvg-id="1015" tvg-name="PlanetaTV Kids" tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", PlanetaTV Kids | CL
https://tls-cl.cdnz.cl/planetatvkids/live/playlist.m3u8
#EXTINF:-1 tvg-id="45" tvg-name="NTV" tvg-logo="https://i2.paste.pics/49116db7b95befdabb207ccbd2bb94b6.png", NTV | CL
https://marine2.miplay.cl/ntv/playlist.m3u8
#EXTINF:-1 tvg-id="64" tvg-name="Pintana TV" tvg-logo="https://lh3.googleusercontent.com/-Mthb4RQqfgU/XxyJnpes1QI/AAAAAAAA3Vo/Gmg_Wcr0Gv80KzXGNa3Z91BEea2r4ID0wCK8BGAsYHg/s0/2020-07-25.png", Pintana TV | CL
http://live.mundogo.cl/mundo/Pintanatv/index.m3u8
#EXTINF:-1 tvg-id="66" tvg-name="Pichilemu TV" tvg-logo="https://lh3.googleusercontent.com/-cLe1X-6sOWM/XqtZ-zhsGYI/AAAAAAAAydY/AFIEb1ZL-HEceewpnqr3m9QxC3_3_KzIwCK8BGAsYHg/s0/2020-04-30.png", Pichilemu TV | CL
https://5ff3d9babae13.streamlock.net/8028/8028/playlist.m3u8
#EXTINF:-1 tvg-id="65" tvg-name="El 3 de Conce" tvg-logo="https://lh3.googleusercontent.com/--o0_vpNuzz4/XqsNGuGSUEI/AAAAAAAAyck/t0v8luwsOWAEbNMHeaIvlrVCQrYyXLJXwCK8BGAsYHg/s0/2020-04-30.png", El 3 de Conce | CL
https://oracle.streaminghd.cl/8016/8016/playlist.m3u8
#EXTINF:-1 tvg-id="1001" tvg-name="La Granja TV" tvg-logo="https://i2.paste.pics/e5d61855b016df20f253d6b5b9ad8501.png", La Granja TV | CL
https://oracle.streaminghd.cl/8126/8126/playlist.m3u8
#EXTINF:-1 tvg-id="67" tvg-name="Exprezion TV" tvg-logo="https://i2.paste.pics/3a66236cd4d5f46b440f80ccc87129f1.png", Exprezion TV | CL
https://vdochile.com:3774/live/cnrhiawklive.m3u8
#EXTINF:-1 tvg-id="69" tvg-name="G Vision" tvg-logo="https://i2.paste.pics/d091b495e5432ae25bfab9dd4624cc6d.png", G Vision | CL
https://oracle.streaminghd.cl/gmistral/gmistral/playlist.m3u8
#EXTINF:-1 tvg-id="881" tvg-name="Wapp" tvg-logo="https://i2.paste.pics/08e536d8b5644b333832b035daeea1a9.png", Wapp | CL
https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/wapptv/wapptv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="790" tvg-name="La Red" tvg-logo="https://lh3.googleusercontent.com/-w3BIhImK3PM/YKLYqeFgJlI/AAAAAAABCXk/cJQItXH6BeII2A19RmryccG1o54twOSvACK8BGAsYHg/s512/2021-05-17.jpg", La Red | CL
https://unlimited1-cl-isp.dps.live/lared/lared.smil/playlist.m3u8
#EXTINF:-1 tvg-id="458" tvg-name="TV+" tvg-logo="https://lh3.googleusercontent.com/-OyqOBTEx-1E/XyA3AZwIgTI/AAAAAAAA3jQ/aDMZaLOx3mQuXBqjDKAF0X7dxExKFzawACK8BGAsYHg/s0/2020-07-28.png", TV+ | CL
https://mdstrm.com/live-stream-playlist/5c0e8b19e4c87f3f2d3e6a59.m3u8
#EXTINF:-1 tvg-id="1243" tvg-name="TVMas2" tvg-logo="https://i2.paste.pics/f37083fc717ad290191a24b61ee7eec7.png", TVMas2 | CL
https://marine2.miplay.cl/tateti/playlist.m3u8
#EXTINF:-1 tvg-id="1437" tvg-name="TVN3" tvg-logo="https://i2.paste.pics/2ba64b67051e159ff48060da1a687fd0.png", TVN3 | CL
https://mdstrm.com/live-stream-playlist/5653641561b4eba30a7e4929.m3u8
#EXTINF:-1 tvg-id="452" tvg-name="TVN" tvg-logo="https://lh3.googleusercontent.com/-ETprzEeH-JY/XbCxYXbNQUI/AAAAAAAArkw/zQxemFrwNjAbMoyByyr_sesnZ8QKgap-QCK8BGAsYHg/s0/2019-10-23.png", TVN | CL
https://panel.miplay.cl:8081/tvn/index.m3u8
#EXTINF:-1 tvg-id="453" tvg-name="TVN - 24h" tvg-logo="https://lh3.googleusercontent.com/-ETprzEeH-JY/XbCxYXbNQUI/AAAAAAAArkw/zQxemFrwNjAbMoyByyr_sesnZ8QKgap-QCK8BGAsYHg/s0/2019-10-23.png", TVN - 24h | CL
http://mdstrm.com/live-stream-playlist-v/5346f5f2c1e6f5810b5b9df0.m3u8
#EXTINF:-1 tvg-id="454" tvg-name="TVN - Reuters" tvg-logo="https://lh3.googleusercontent.com/-ETprzEeH-JY/XbCxYXbNQUI/AAAAAAAArkw/zQxemFrwNjAbMoyByyr_sesnZ8QKgap-QCK8BGAsYHg/s0/2019-10-23.png", TVN - Reuters | CL
https://mdstrm.com/live-stream-playlist/5346f657c1e6f5810b5b9df3.m3u8
#EXTINF:-1 tvg-id="455" tvg-name="Mega" tvg-logo="https://lh3.googleusercontent.com/-xqKe__ypgDY/XnzFn9NLnbI/AAAAAAAAxMU/2Wj9IOC1LaQxtJGRzcVOTrQWxP9z3RgPwCK8BGAsYHg/s0/2020-03-26.png", Mega | CL
https://unlimited1-cl-isp.dps.live/mega/mega.smil/playlist.m3u8
#EXTINF:-1 tvg-id="456" tvg-name="CHV" tvg-logo="https://lh3.googleusercontent.com/-8bGAVjbmdQo/Xlxxov1VBvI/AAAAAAAAwhU/ZO0JPjy4MaI7lGElqofGQbkOr52Hk1nUQCK8BGAsYHg/s0/2020-03-01.png", CHV | CL
https://panel.miplay.cl:8081/chilevision/index.m3u8
#EXTINF:-1 tvg-id="1193" tvg-name="13 Cultura" tvg-logo="https://i2.paste.pics/c04bad5b9339444b2acb44912d04b0a7.png", 13 Cultura | CL
https://origin.dpsgo.com/ssai/event/GI-9cp_bT8KcerLpZwkuhw/master.m3u8
#EXTINF:-1 tvg-id="979" tvg-name="13 Entretencion" tvg-logo="https://i2.paste.pics/a59418e1a9cb4068b83345be503f722c.png", 13 Entretencion | CL
https://origin.dpsgo.com/ssai/event/BBp0VeP6QtOOlH8nu3bWTg/master.m3u8
#EXTINF:-1 tvg-id="1033" tvg-name="13 Prime" tvg-logo="https://i2.paste.pics/544548398fcd92bf2db73e9d0fcddf5f.png", 13 Prime | CL
https://origin.dpsgo.com/ssai/event/p4mmBxEzSmKAxY1GusOHrw/master.m3u8
#EXTINF:-1 tvg-id="1032" tvg-name="13 Teleseries" tvg-logo="https://i2.paste.pics/863aea4fb1445b58f89afc7c692ed509.png", 13 Teleseries | CL
https://origin.dpsgo.com/ssai/event/f4TrySe8SoiGF8Lu3EIq1g/master.m3u8
#EXTINF:-1 tvg-id="1446" tvg-name="13 Festival" tvg-logo="https://i2.paste.pics/e0fd4b83e18449e31fca784e9ed7df03.png", 13 Festival | CL
https://origin.dpsgo.com/ssai/event/Nftd0fM2SXasfDlRphvUsg/master.m3u8
#EXTINF:-1 tvg-id="1447" tvg-name="13 Humor" tvg-logo="https://i2.paste.pics/07b96c9485f731aafdc798a406320c94.png", 13 Humor | CL
https://origin.dpsgo.com/ssai/event/cKWySXKgSK-SzlJmESkOWw/master.m3u8
#EXTINF:-1 tvg-id="1448" tvg-name="13 Realities" tvg-logo="https://i2.paste.pics/22b32c8870b49a5fad925b53b7485aa5.png", 13 Realities | CL
https://origin.dpsgo.com/ssai/event/g7_JOM0ORki9SR5RKHe-Kw/master.m3u8
#EXTINF:-1 tvg-id="1017" tvg-name="U Chile TV" tvg-logo="https://i2.paste.pics/2336e0cef4642213124e4192f019ccfd.png", U Chile TV | CL
https://unlimited1-cl-isp.dps.live/uchiletv/uchiletv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="54" tvg-name="UCV" tvg-logo="https://i2.paste.pics/87c6e7bb59c33bfab71e154181716e90.png", UCV | CL
https://unlimited2-cl-isp.dps.live/ucvtv2/ucvtv2.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1152" tvg-name="UCV 2" tvg-logo="https://i2.paste.pics/87c6e7bb59c33bfab71e154181716e90.png", UCV 2 | CL
https://unlimited10-cl.dps.live/ucvtveventos/ucvtveventos.smil/playlist.m3u8
#EXTINF:-1 tvg-id="53" tvg-name="STGO.TV" tvg-logo="https://lh3.googleusercontent.com/-02uPrXnaZuY/Xk_sz_MIaEI/AAAAAAAAwVo/wwJD8vjW0ScrhAp-BVHSElUKIOUN_CqJgCK8BGAsYHg/s0/2020-02-21.png", STGO.TV | CL
https://stv.janus.cl/playlist/stream.m3u8
#EXTINF:-1 tvg-id="55" tvg-name="Campus TV" tvg-logo="https://lh3.googleusercontent.com/-pW3OtBR0N4A/Xl5Y7H0fi7I/AAAAAAAAwjg/gdqG0LJ8DP42Md2rGIh2qHs1vNF7AYopACK8BGAsYHg/s0/2020-03-03.png", Campus TV | CL
https://unlimited1-cl-isp.dps.live/campustv/campustv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="56" tvg-name="TVU" tvg-logo="https://i2.paste.pics/a399853d40d3e97454b0e04d423d47a9.png", TVU | CL
https://unlimited1-cl-isp.dps.live/tvu/tvu.smil/playlist.m3u8
#EXTINF:-1 tvg-id="58" tvg-name="Universidad Autonoma TV" tvg-logo="https://i2.paste.pics/4f091f5c6fccbcd410cdc98e452bcb3b.png", Universidad Autonoma TV | CL
https://unlimited1-cl-isp.dps.live/uatv/uatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="802" tvg-name="TV UCT" tvg-logo="https://lh3.googleusercontent.com/-b5STpV7frCc/YHxqEk9aHxI/AAAAAAABBqs/CXWLe5jLyfgXXBgOSzhqb5sSUpn_A6K8ACK8BGAsYHg/s512/2021-04-18.png", TV UCT | CL
https://unlimited2-cl-isp.dps.live/uct/uct.smil/playlist.m3u8
#EXTINF:-1 tvg-id="57" tvg-name="Ufrovision" tvg-logo="https://lh3.googleusercontent.com/-fqdCC1PQsjQ/XbC1rzkVu6I/AAAAAAAArmE/eB5FcH8qqZkgXsnzuStsuYTohDPRfNMdQCK8BGAsYHg/s0/2019-10-23.png", Ufrovision | CL
https://mdstrm.com/live-stream-playlist/580a80b827de0ae2086ea6d8.m3u8
#EXTINF:-1 tvg-id="59" tvg-name="U Los Lagos" tvg-logo="https://lh3.googleusercontent.com/-mt7LVY0X3kE/XlBdyl_hwFI/AAAAAAAAwW0/vqFU9wiyuawEn3E39ERyYaOkVZ3TVterACK8BGAsYHg/s0/2020-02-21.png", U Los Lagos | CL
http://tv.ulagos.cl/web/live.m3u8
#EXTINF:-1 tvg-id="60" tvg-name="UMAG TV" tvg-logo="https://lh3.googleusercontent.com/-0NppS8zHXRU/XbC2cN4qlAI/AAAAAAAArmY/g4gYZKyGhHglj_lyBKSaRw-tBMgzO0NmACK8BGAsYHg/s0/2019-10-23.png", UMAG TV | CL
https://tls-cl.cdnz.cl/umag1/ngrp:live_all/playlist.m3u8
#EXTINF:-1 tvg-id="61" tvg-name="UMAG TV 2" tvg-logo="https://lh3.googleusercontent.com/-0NppS8zHXRU/XbC2cN4qlAI/AAAAAAAArmY/g4gYZKyGhHglj_lyBKSaRw-tBMgzO0NmACK8BGAsYHg/s0/2019-10-23.png", UMAG TV 2 | CL
https://tls-cl.cdnz.cl/umag2/live/playlist.m3u8
#EXTINF:-1 tvg-id="62" tvg-name="UesTV" tvg-logo="https://i2.paste.pics/360c8f7659accc54b1013b0b2b7669b6.png", UesTV | CL
https://tls-cl.cdnz.cl/uestv/live/playlist.m3u8
#EXTINF:-1 tvg-id="445" tvg-name="Camara de Diputados" tvg-logo="https://i2.paste.pics/8ac54ede0184c4fd9e872231a6d673b3.png", Camara de Diputados | CL
https://tls-cl.cdnz.cl/camara/live/playlist.m3u8
#EXTINF:-1 tvg-id="444" tvg-name="TV Senado" tvg-logo="https://i2.paste.pics/ee6b562807f06f0139f28cd160a82a8f.png", TV Senado | CL
https://janus-tv-ply.senado.cl/playlist/playlist.m3u8
#EXTINF:-1 tvg-id="798" tvg-name="Cultura Online" tvg-logo="https://i2.paste.pics/a64816b3950330d38cae04c477929f3f.png", Cultura Online | CL
https://v1.tustreaming.cl:19360/culturaonline/culturaonline.m3u8
#EXTINF:-1 tvg-id="442" tvg-name="CEAC TV" tvg-logo="https://lh3.googleusercontent.com/-Efv-00P_dR0/YLzynagSe1I/AAAAAAABCvM/yOhOzOxVWGwan9Xwgg-zpQzFK8WGJo12ACJEEGAsYHg/s512/2021-06-06.png", CEAC TV | CL
https://videostream.chileservidores.com:8081/ceactv/index.m3u8
#EXTINF:-1 tvg-id="415" tvg-name="Puranoticia" tvg-logo="https://i2.paste.pics/3dcc431073eca367aef2011ebdd26387.png", Puranoticia | CL
https://pnt.janusmedia.tv/hls/pnt.m3u8
#EXTINF:-1 tvg-id="448" tvg-name="TVN 24 Horas" tvg-logo="https://lh3.googleusercontent.com/-BbCIUKB7XJE/XbRLHyJVKcI/AAAAAAAArtU/ipNQiS3rttYIRuK2nKzy_oocBx0x4TOLACK8BGAsYHg/s0/2019-10-26.png", TVN 24 Horas | CL
https://mdstrm.com/live-stream-playlist/57d1a22064f5d85712b20dab.m3u8
#EXTINF:-1 tvg-id="1153" tvg-name="CHV Noticias" tvg-logo="https://i2.paste.pics/5bf0db1521a041595f387a893ab6512b.png", CHV Noticias | CL
https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/chvn/chvn.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1054" tvg-name="T13" tvg-logo="https://i2.paste.pics/38adedd4130272be03ef804c5eaf067e.png", T13 | CL
https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/t13/t13.smil/playlist.m3u8
#EXTINF:-1 tvg-id="449" tvg-name="Meganoticias" tvg-logo="https://lh3.googleusercontent.com/-42YG0jZhyGg/XbC0Ua8FlLI/AAAAAAAArlw/S2qhcWOdFuskqCondIatbmxSfLMvgj9owCK8BGAsYHg/s0/2019-10-23.png", Meganoticias | CL
https://mdstrm.com/live-stream-playlist/561430ae330428c223687e1e.m3u8
#EXTINF:-1 tvg-id="1239" tvg-name="Señal Mediabanco" tvg-logo="https://i2.paste.pics/65df3a54b748e91cb8081bb17dee405b.png", Señal Mediabanco | CL
https://unlimited1-cl-isp.dps.live/mediabanco/mediabanco.smil/playlist.m3u8
#EXTINF:-1 tvg-id="434" tvg-name="Teletón TV" tvg-logo="https://lh3.googleusercontent.com/-RsMjPwaqZeE/XlMNZlWurnI/AAAAAAAAwZ4/RmHs1fZ6XLEEoLl-i_-v_bFmCaNF9AYCQCK8BGAsYHg/s0/2020-02-23.png", Teletón TV | CL
https://mdstrm.com/live-stream-playlist/5d6d5f05a2f6f407b0147965.m3u8
#EXTINF:-1 tvg-id="433" tvg-name="Solo Stand Up" tvg-logo="https://i2.paste.pics/70c9436a7a76e5605616ad21d6cefce6.png", Solo Stand Up | CL
https://paneltv.online:1936/8116/8116/playlist.m3u8
#EXTINF:-1 tvg-id="1020" tvg-name="Caracola TV" tvg-logo="https://i.paste.pics/d4c6f55f55efbda0faf59a7835b568b7.png", Caracola TV | CL
https://wifispeed.trapemn.tv:1936/comunales/caracola-tv/playlist.m3u8
#EXTINF:-1 tvg-id="1022" tvg-name="EGM Channel" tvg-logo="https://i2.paste.pics/c4059d4b2eb7b24f7208a93b05312995.png", EGM Channel | CL
https://paneltv.online:1936/8186/8186/playlist.m3u8
#EXTINF:-1 tvg-id="986" tvg-name="Ziza TV" tvg-logo="https://i2.paste.pics/129d176f2117a7985aefe938703c34a5.png", Ziza TV | CL
https://v2.tustreaming.cl/zizatv/index.m3u8
#EXTINF:-1 tvg-id="895" tvg-name="Radio Lado Oscuro TV" tvg-logo="https://i.paste.pics/2187dd0bf17bc4d9120ec79f47ad0145.png", Radio Lado Oscuro TV | CL
https://stmv2.zcasthn.com.br/cattotv/cattotv/playlist.m3u8
#EXTINF:-1 tvg-id="910" tvg-name="Raices Arabes TV" tvg-logo="https://i2.paste.pics/632a740768764ab4dd8208568ae61b01.png", Raices Arabes TV | CL
https://tv.streaming-chile.com:1936/raicesarabestv/raicesarabestv/playlist.m3u8
#EXTINF:-1 tvg-id="467" tvg-name="TV Pop" tvg-logo="https://lh3.googleusercontent.com/-XpZwlTaVD70/X5jAxBIjQnI/AAAAAAAA6ys/IoG_B-D9vCwSs4nNVTr2tK_hz-rI7VXCgCK8BGAsYHg/s0/2020-10-27.jpg", TV Pop | CL
https://v4.tustreaming.cl/poptv/index.m3u8
#EXTINF:-1 tvg-id="438" tvg-name="Tevex" tvg-logo="https://i2.paste.pics/37360245ae2194a41c9eaca39c5e1ec0.png", Tevex | CL
https://v2.tustreaming.cl/tevex/index.m3u8
#EXTINF:-1 tvg-id="436" tvg-name="TV Salud" tvg-logo="https://lh3.googleusercontent.com/-Xv_aL34GjFE/XdksOdTnS9I/AAAAAAAAsTs/_WBt4UNy428CuU5dtVeJQZzh4EpQREnDwCK8BGAsYHg/s0/2019-11-23.png", TV Salud | CL
https://panel.miplay.cl:8081/tvsalud/index.m3u8
#EXTINF:-1 tvg-id="435" tvg-name="Chile Channel" tvg-logo="https://lh3.googleusercontent.com/-DVzBnJJGsHM/Xzh-ooBVTnI/AAAAAAAA4dk/Gl6kLefOEM0C6UdyAwM1__ki_GZ7OGYQACK8BGAsYHg/s0/2020-08-15.png", Chile Channel | CL
https://v2.tustreaming.cl/chilechannel/index.m3u8
#EXTINF:-1 tvg-id="437" tvg-name="Campo Abierto TV" tvg-logo="https://i2.paste.pics/44c5f4becc68ee877580eed639645110.png", Campo Abierto TV | CL
https://v1.tustreaming.cl:19360/campoabierto/campoabierto.m3u8
#EXTINF:-1 tvg-id="1111" tvg-name="Canal Turismo Travel TV" tvg-logo="https://i2.paste.pics/50d8cde45e0c3efff3bc3fb05c5da6d1.png", Canal Turismo Travel TV | CL
https://vdo.panelstreaming.live:3740/live/turismotravellive.m3u8
#EXTINF:-1 tvg-id="1398" tvg-name="La Voz De Los Que Sobran TV" tvg-logo="https://i2.paste.pics/f67aa623e84b5841c4a6f655030491b2.png", La Voz De Los Que Sobran TV | CL
https://unlimited1-cl-isp.dps.live/lvdlqs/lvdlqs.smil/playlist.m3u8
#EXTINF:-1 tvg-id="311" tvg-name="Arica TV" tvg-logo="https://lh3.googleusercontent.com/-RSJgui5q1ag/YLwPYdKEv9I/AAAAAAABCsk/eI3D7-S2c7gaqLgRGewyN-pHzdzCghwIQCJEEGAsYHg/s512/2021-06-05.jpg", Arica TV | CL
https://5eaccbab48461.streamlock.net:1936/8002/8002/playlist.m3u8
#EXTINF:-1 tvg-id="312" tvg-name="Cappissima Multimedial TV" tvg-logo="https://lh3.googleusercontent.com/-uQdRQP7JvuA/XxzEqR_Af-I/AAAAAAAA3XQ/7CuKTSW5TYckPnJr5bxkDTtIYB6zy6lHACK8BGAsYHg/s0/2020-07-25.png", Cappissima Multimedial TV | CL
https://oracle.streaminghd.cl/cappissima/cappissima/playlist.m3u8
#EXTINF:-1 tvg-id="313" tvg-name="Puerta Norte" tvg-logo="https://lh3.googleusercontent.com/-HTLI7n2K50M/XhUge0dM_xI/AAAAAAAAvC4/vbnHWF_eheMVlaLxiXkRCDpAboN8_iiNgCK8BGAsYHg/s0/2020-01-07.png", Puerta Norte | CL
https://panel.tvstream.cl:1936/8030/8030/playlist.m3u8
#EXTINF:-1 tvg-id="314" tvg-name="Iquique TV" tvg-logo="https://lh3.googleusercontent.com/-pK0q2sl6njA/YLvYUotCF_I/AAAAAAABCrw/npXWp5Y_4Q83AVldxCKNFaadcbbxNV5cgCJEEGAsYHg/s512/2021-06-05.png", Iquique TV | CL
https://marine2.miplay.cl/arcatel/iquiquetv720/video.m3u8
#EXTINF:-1 tvg-id="1136" tvg-name="RTC Television" tvg-logo="https://i2.paste.pics/9a911e6ad11b7f64a845624942b2a241.png", RTC Television | CL
https://streams.skarnetchile.com/Regionales/RTC_Iquique/playlist.m3u8
#EXTINF:-1 tvg-id="71" tvg-name="Antofagasta TV" tvg-logo="https://lh3.googleusercontent.com/-37Qp1y0Froc/YLwMLWKi5ZI/AAAAAAABCr8/VATYbRiDFL4hNT7IqD8DL3tC8Y8QeUCjgCJEEGAsYHg/s512/2021-06-05.png", Antofagasta TV | CL
https://unlimited1-cl-isp.dps.live/atv/atv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="316" tvg-name="LRP Television" tvg-logo="https://lh3.googleusercontent.com/-RRqPPQ9jumM/X-sl8HVr3-I/AAAAAAAA8mk/er1v71iGwF06JQABRlSTDFwItzb7OVcMwCK8BGAsYHg/s0/2020-12-29.png", LRP Television | CL
https://v2.tustreaming.cl/lrp/index.m3u8
#EXTINF:-1 tvg-id="1241" tvg-name="TV Norte Digital" tvg-logo="https://i2.paste.pics/e602eadb770a82f88a1f9496dc40850e.png", TV Norte Digital | CL
https://v4.tustreaming.cl/tvnortedigital/index.m3u8
#EXTINF:-1 tvg-id="317" tvg-name="AM Canal" tvg-logo="https://lh3.googleusercontent.com/-Qbzsb10m8FI/YLwP7qvh82I/AAAAAAABCsw/obyVVlYUAa4YC3XO6ChBaMDvEtV3lAcRQCJEEGAsYHg/s512/2021-06-05.png", AM Canal | CL
https://v2.tustreaming.cl/amtv/index.m3u8
#EXTINF:-1 tvg-id="1375" tvg-name="Televisión Minera del Norte" tvg-logo="https://i.paste.pics/51a69eaf27479aea02bf6a49db3ce8ab.png", Televisión Minera del Norte | CL
https://v1.tustreaming.cl/tmntv/index.m3u8
#EXTINF:-1 tvg-id="72" tvg-name="Holvoet TV" tvg-logo="https://i2.paste.pics/2fb632fb69ae1c422609fdbf6c5a3fb4.png", Holvoet TV | CL
https://unlimited1-cl-isp.dps.live/holvoettv/holvoettv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="319" tvg-name="Atacama Noticias TV" tvg-logo="https://lh3.googleusercontent.com/-l7XXNQYmGAM/XvDpTB0gG5I/AAAAAAAA2Kk/GvD1qftKvhgJszIAP4CbyNkTdKk5h61gQCK8BGAsYHg/s0/2020-06-22.png", Atacama Noticias TV | CL
https://v2.tustreaming.cl/atacamanoticias/index.m3u8
#EXTINF:-1 tvg-id="320" tvg-name="Atacama TV" tvg-logo="https://lh3.googleusercontent.com/-dxfCxjRg3kc/YLwNHipWtxI/AAAAAAABCsE/YVukqdClrtcbM8N2pwv8MJSXGS862L1tgCJEEGAsYHg/s512/2021-06-05.png", Atacama TV | CL
https://v2.tustreaming.cl/atacamatv/index.m3u8
#EXTINF:-1 tvg-id="784" tvg-name="Madero TV" tvg-logo="https://lh3.googleusercontent.com/-2DPpYYaK6ZE/Xl_2gXryGII/AAAAAAAAwlA/Z8jpHccjFuApTI5Z7TPbW7pfTKTn8CKYQCK8BGAsYHg/s0/2020-03-04.png", Madero TV | CL
https://www.cloudscriptdog.cl:19360/madero-video-01/madero-video-01.m3u8
#EXTINF:-1 tvg-id="321" tvg-name="Huasco TV" tvg-logo="https://lh3.googleusercontent.com/-HCPaOQyvUaE/X_G7GCDvs_I/AAAAAAAA81U/R8xLktf5TvMmstApqceTVkQWIKFIv2YawCK8BGAsYHg/s0/2021-01-03.jpg", Huasco TV | CL
https://paneltv.online:1936/8024/8024/playlist.m3u8
#EXTINF:-1 tvg-id="462" tvg-name="Alternativa TV" tvg-logo="https://i.paste.pics/e0710548321c665eacd6536b5fe586b3.png", Alternativa TV | CL
https://5eaccbab48461.streamlock.net:1936/8216/8216/playlist.m3u8
#EXTINF:-1 tvg-id="322" tvg-name="Enfoque Digital TV" tvg-logo="https://lh3.googleusercontent.com/-Qjxyu8Kt5PM/YLwQbxwGefI/AAAAAAABCs4/GhZ1MB88oewmzOGNaDLnV-qanRmEvk9JQCJEEGAsYHg/s512/2021-06-05.png", Enfoque Digital TV | CL
https://5eaccbab48461.streamlock.net:1936/8074/8074/playlist.m3u8
#EXTINF:-1 tvg-id="1235" tvg-name="Origen TV" tvg-logo="https://i2.paste.pics/a260c7d6bedb511c0170f0ea04f3807a.png", Origen TV | CL
https://tv.streaming-chile.com:1936/origentv/origentv/playlist.m3u8
#EXTINF:-1 tvg-id="325" tvg-name="La Popular TV" tvg-logo="https://lh3.googleusercontent.com/-ptduoaJowMY/YLwQztvG1qI/AAAAAAABCtA/TLcpfNWqt38w8iRoqdprT8smUncIJ7AQACJEEGAsYHg/s512/2021-06-05.png", La Popular TV | CL
https://tv.streaming-chile.com:1936/lapopulartv/lapopulartv/playlist.m3u8
#EXTINF:-1 tvg-id="965" tvg-name="Canal 1440 Coquimbo" tvg-logo="https://i2.paste.pics/4670a31c2ccbc5689b6a607819de85c4.png", Canal 1440 Coquimbo | CL
https://stmv2.zcasthn.com.br/coquimboturadio/coquimboturadio/playlist.m3u8
#EXTINF:-1 tvg-id="326" tvg-name="ThemaTV" tvg-logo="https://lh3.googleusercontent.com/-Vgy7Z0vneQQ/YLwRzORmQaI/AAAAAAABCtM/eh_BH_39oIsbSgMiirmbkScqt8MuuFiOgCJEEGAsYHg/s512/2021-06-05.png", ThemaTV | CL
https://unlimited1-cl-isp.dps.live/thema/thema.smil/playlist.m3u8
#EXTINF:-1 tvg-id="327" tvg-name="América TV Chile" tvg-logo="https://lh3.googleusercontent.com/-dAThrFAhCtE/Xx-hwDQF4gI/AAAAAAAA3ic/BsAasEXfeos0_0c7QAorRga7pt2ZC1yfwCK8BGAsYHg/s0/2020-07-27.png", América TV Chile | CL
https://v2.tustreaming.cl:/radioamericatv/index.m3u8
#EXTINF:-1 tvg-id="328" tvg-name="Nortevision" tvg-logo="https://lh3.googleusercontent.com/-Vjrgm0Rr1PI/X3UTx5J44-I/AAAAAAAA6Fs/DMjCrXkJa2EfBj6VLrLghrPnSE2Gt-YbwCK8BGAsYHg/s0/2020-09-30.png", Nortevision | CL
https://live.tvcontrolcp.com:1936/nortevision/nortevision/playlist.m3u8
#EXTINF:-1 tvg-id="1339" tvg-name="Señal 21" tvg-logo="https://i.paste.pics/2ebd12f9d6bbf62d0b5628338cbea0e1.png", Señal 21 | CL
https://tv.clientetvstudio.net:3078/live/senal21tvlive.m3u8
#EXTINF:-1 tvg-id="329" tvg-name="TV Elqui" tvg-logo="https://lh3.googleusercontent.com/-uohfVTgGqkU/XrmveWQiUXI/AAAAAAAA0oQ/Bn7Ad9_7KMY6oMCjD2UJi_cp-8ynyLYSQCK8BGAsYHg/s0/2020-05-11.png", TV Elqui | CL
https://paneltv.online:1936/8056/8056/playlist.m3u8
#EXTINF:-1 tvg-id="335" tvg-name="VTV" tvg-logo="https://lh3.googleusercontent.com/-EcdiT1eMFFg/YLwNYKl0GII/AAAAAAABCsM/_WU-X010dJ80kDrgugAdGtSzIpUNsEgygCJEEGAsYHg/s512/2021-06-05.png", VTV | CL
https://unlimited2-cl-isp.dps.live/vtv/vtv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1238" tvg-name="Canal LOF Aconcagua" tvg-logo="https://i2.paste.pics/f2f15add4d4cd59bd2c073b868fd6319.png", Canal LOF Aconcagua | CL
https://stmv2.zcasthn.com.br/loftvchile/loftvchile/playlist.m3u8
#EXTINF:-1 tvg-id="334" tvg-name="Canal 74 TeVe" tvg-logo="https://lh3.googleusercontent.com/-TYq4HDXXrKg/X1gGWf_2AWI/AAAAAAAA5ZQ/apHThKFoYGM5Yyixt53Afu2I10KkbCdjwCK8BGAsYHg/s0/2020-09-08.png", Canal 74 TeVe | CL
https://Stmv1.zcasthn.com.br/canal74hd/canal74hd/playlist.m3u8
#EXTINF:-1 tvg-id="332" tvg-name="TV Costa" tvg-logo="https://lh3.googleusercontent.com/-D5lPoIyFycQ/YIxMYNs6ZKI/AAAAAAABCEU/0AcLO4Az3y0wi6son16EjNv2DewCGFk8QCK8BGAsYHg/s512/2021-04-30.jpg", TV Costa | CL
https://tv.clientetvstudio.net:3486/live/costatv1live.m3u8
#EXTINF:-1 tvg-id="1231" tvg-name="Canal Local" tvg-logo="https://i2.paste.pics/b06a3259d7f1a9883bc755647b2ad1bd.png", Canal Local | CL
http://live.mundogo.cl/mundo/Canallocalquillota/index.m3u8
#EXTINF:-1 tvg-id="854" tvg-name="TV Quinta Region" tvg-logo="https://i2.paste.pics/2c015266869a8e163cc42bd1a0808834.png", TV Quinta Region | CL
https://stmv2.zcasthn.com.br/tvquintaregion/tvquintaregion/playlist.m3u8
#EXTINF:-1 tvg-id="995" tvg-name="Vida Nueva TV" tvg-logo="https://i2.paste.pics/7ea06393d56d6c5dee7664a46ae15c29.png", Vida Nueva TV | CL
https://stmv2.zcasthn.com.br/multimediavalparaiso/multimediavalparaiso/playlist.m3u8
#EXTINF:-1 tvg-id="74" tvg-name="Girovisual TV" tvg-logo="https://i2.paste.pics/11ba44db3bc04558ed204a000c65c266.png", Girovisual TV | CL
https://unlimited1-cl-isp.dps.live/girovisual2/girovisual2.smil/playlist.m3u8
#EXTINF:-1 tvg-id="464" tvg-name="Frecuencia 7 Aconcagua" tvg-logo="https://lh3.googleusercontent.com/-48JoMOIDPB4/YEtdWeH5oII/AAAAAAABAkQ/I1dAHLNoz4UVqNH4CL-wr1-O2hrEHD6VgCK8BGAsYHg/s512/2021-03-12.png", Frecuencia 7 Aconcagua | CL
https://v2.tustreaming.cl/frecuencia7/index.m3u8
#EXTINF:-1 tvg-id="1141" tvg-name="Estudio TV" tvg-logo="https://i2.paste.pics/5b659c86fa4c47f9a6b71677e4698fd5.png", Estudio TV | CL
https://5eaccbab48461.streamlock.net:1936/8176/8176/playlist.m3u8
#EXTINF:-1 tvg-id="76" tvg-name="Canal 2 de San Antonio" tvg-logo="https://lh3.googleusercontent.com/-8rzHJZdq8rY/Xb2AX9UW_tI/AAAAAAAAr58/gqkZ21n2nf4rm5Ah-lzNOz5ch6_JVUS5wCK8BGAsYHg/s0/2019-11-02.png", Canal 2 de San Antonio | CL
https://unlimited1-cl-isp.dps.live/canal2/canal2.smil/playlist.m3u8
#EXTINF:-1 tvg-id="333" tvg-name="Plaza TV" tvg-logo="https://i2.paste.pics/585c8e1e9e65021cae644117c35bd51a.png", Plaza TV | CL
https://unlimited10-cl.dps.live/girovisual2/girovisual2.smil/playlist.m3u8
#EXTINF:-1 tvg-id="77" tvg-name="TVR" tvg-logo="https://i2.paste.pics/138972442c9f6e8c471b5eecec021f08.png", TVR | CL
https://unlimited1-cl-isp.dps.live/tvr/tvr.smil/playlist.m3u8
#EXTINF:-1 tvg-id="336" tvg-name="Tendencias Prime" tvg-logo="https://i2.paste.pics/5d64fe0c6e8c1d3be74a7982fc408dab.png", Tendencias Prime | CL
https://v2.tustreaming.cl/tendenciastv/index.m3u8
#EXTINF:-1 tvg-id="1024" tvg-name="Vision Plus TV" tvg-logo="https://i2.paste.pics/e067ea7d04aa3bcd78e8892df03409af.png", Vision Plus TV | CL
https://v2.tustreaming.cl/visionplustv/index.m3u8
#EXTINF:-1 tvg-id="1120" tvg-name="Autonoma TV" tvg-logo="https://i2.paste.pics/c00eb38ed6d7b15ebc179af065730860.png", Autonoma TV | CL
https://wifispeed.trapemn.tv:1936/comunales/autonoma-tv/playlist.m3u8
#EXTINF:-1 tvg-id="999" tvg-name="38TV" tvg-logo="https://i2.paste.pics/3cc1950b0f0c4ad15752bd5b6646fdf6.png", 38TV | CL
https://v2.tustreaming.cl:19360/38tv/38tv.m3u8
#EXTINF:-1 tvg-id="337" tvg-name="Buin Somos Todos" tvg-logo="https://lh3.googleusercontent.com/-qHSWQUuG5HU/XkIKFkSMFBI/AAAAAAAAv-o/80_hG25Pe6cfe7Dm3Uc6VDpcMp2Nd3ImwCK8BGAsYHg/s0/2020-02-10.png", Buin Somos Todos | CL
https://bst.buin.cl/0.m3u8
#EXTINF:-1 tvg-id="338" tvg-name="Canal 57 Melipilla" tvg-logo="https://i2.paste.pics/142f64e0f0f7392e87b0f08fe9220039.png", Canal 57 Melipilla | CL
https://panel.tvstream.cl:1936/8016/8016/playlist.m3u8
#EXTINF:-1 tvg-id="1376" tvg-name="Tu Canal Colina" tvg-logo="https://i.paste.pics/3018ffa6fe33fc3d0baa222207790a5a.png", Tu Canal Colina | CL
https://live.chileservidores.com:8081/colina/index.m3u8
#EXTINF:-1 tvg-id="1025" tvg-name="Telecanal Santa Cruz" tvg-logo="https://i2.paste.pics/6a1696deb1c9517beb69237df03fb2a9.png", Telecanal Santa Cruz | CL
https://unlimited1-cl-isp.dps.live/tcsc/tcsc.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1253" tvg-name="El Tipografo" tvg-logo="https://i2.paste.pics/4df8ca35af0bfce1985b33b930990505.png", El Tipografo | CL
http://live.mundogo.cl/mundo/Tipografo/index.m3u8
#EXTINF:-1 tvg-id="340" tvg-name="TVO San Vicente" tvg-logo="https://i2.paste.pics/a9f646af1abd085ef75e72c5e05e05b4.png", TVO San Vicente | CL
https://5ff3d9babae13.streamlock.net:443/8014/8014/playlist.m3u8
#EXTINF:-1 tvg-id="341" tvg-name="Sextavision" tvg-logo="https://lh3.googleusercontent.com/-jrWnNYMCARg/XxzHhPjtM8I/AAAAAAAA3X0/8TDxNrCDkK8gLpV7HBJhhFqovrjbr3AmwCK8BGAsYHg/s0/2020-07-25.png", Sextavision | CL
https://5ff3d9babae13.streamlock.net:443/8020/8020/playlist.m3u8
#EXTINF:-1 tvg-id="463" tvg-name="Ekiz TV" tvg-logo="https://lh3.googleusercontent.com/-gDK3j68Mc6o/YFYnQ_VgDyI/AAAAAAABAy0/COi6QK7t40UXPZuYPWHnOwi61yO0QRVUwCK8BGAsYHg/s512/2021-03-20.jpg", Ekiz TV | CL
http://live.mundogo.cl/mundo/EquizTV/index.m3u8
#EXTINF:-1 tvg-id="78" tvg-name="TVR Canal 11" tvg-logo="https://lh3.googleusercontent.com/-D7L3q2KhyFA/XjQLBVPp_xI/AAAAAAAAvhk/YiyvFKiyTV8wmlJ3AKPuWIP-c99ZP3I0QCK8BGAsYHg/s0/2020-01-31.png", TVR Canal 11 | CL
https://unlimited6-cl.dps.live/tvrcurico/tvrcurico.smil/playlist.m3u8
#EXTINF:-1 tvg-id="342" tvg-name="Vivo TV" tvg-logo="https://lh3.googleusercontent.com/-1sqZ7rIlQfU/X30JIKK3h6I/AAAAAAAA6Mg/PXOK4Ogfto8S5Jkbot2bAdHtCctyapzqwCK8BGAsYHg/s0/2020-10-06.jpg", Vivo TV | CL
https://unlimited1-cl-isp.dps.live/vivotv/vivotv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="79" tvg-name="Telecanal Talca" tvg-logo="https://i2.paste.pics/e39f43a339b5500e4c3f4071f8c14163.png", Telecanal Talca | CL
https://unlimited1-cl-isp.dps.live/tctc/tctc.smil/playlist.m3u8
#EXTINF:-1 tvg-id="343" tvg-name="VLTV" tvg-logo="https://lh3.googleusercontent.com/-_PURxYxD4SM/XokrBPhPlHI/AAAAAAAAxfI/6QOeSyIpBbsaCKY_afgxkFKXZ6FcuottwCK8BGAsYHg/s0/2020-04-04.png", VLTV | CL
https://tv.streaming-chile.com:1936/vltv/vltv/playlist.m3u8
#EXTINF:-1 tvg-id="80" tvg-name="TV 5 Linares" tvg-logo="https://lh3.googleusercontent.com/-ocbRhw13yZU/YD59yD7KV1I/AAAAAAABAfA/YTu015L36W07t8HVpzWdjgAYJvY3a42QgCK8BGAsYHg/s512/2021-03-02.jpg", TV 5 Linares | CL
https://unlimited1-cl-isp.dps.live/tv5/tv5.smil/playlist.m3u8
#EXTINF:-1 tvg-id="81" tvg-name="Contivision" tvg-logo="https://i2.paste.pics/984d0dc323bfe7d9b973ad47fc76639d.png", Contivision | CL
https://unlimited2-cl-isp.dps.live/cm/cm.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1249" tvg-name="Molina TV" tvg-logo="https://i2.paste.pics/9d26fdb4d2774d7ecbb38759ed5f3a4b.png", Molina TV | CL
http://live.mundogo.cl/mundo/Molinatv/index.m3u8
#EXTINF:-1 tvg-id="345" tvg-name="UTV San Clemente" tvg-logo="https://i2.paste.pics/4a70b027fa4d7cc5763e54ce980580c4.png", UTV San Clemente | CL
https://v2.tustreaming.cl/utv/index.m3u8
#EXTINF:-1 tvg-id="346" tvg-name="Nativa TV" tvg-logo="https://lh3.googleusercontent.com/-cjGfTc-x5mE/XhNpkqYLfYI/AAAAAAAAvA0/H23FY52RLO8sZlK22ADQwnFt51j_RYcHgCK8BGAsYHg/s0/2020-01-06.png", Nativa TV | CL
https://stmv2.zcasthn.com.br/nativatv/nativatv/playlist.m3u8
#EXTINF:-1 tvg-id="347" tvg-name="Tele2 Web" tvg-logo="https://lh3.googleusercontent.com/-ma0nk15jqs0/Xte5HlWvxqI/AAAAAAAA1aM/FbCYYz6_ExY547-4KshY_FHdgea6Rr8mACK8BGAsYHg/s0/2020-06-03.png", Tele2 Web | CL
https://oracle.streaminghd.cl/tele2web/tele2web/playlist.m3u8
#EXTINF:-1 tvg-id="1164" tvg-name="Maule Vision" tvg-logo="https://i2.paste.pics/45eedb9b481a90dfb7e7f6e6a5085629.png", Maule Vision | CL
https://vmtv.cl:3787/hybrid/play.m3u8
#EXTINF:-1 tvg-id="1250" tvg-name="Nueva Region TV" tvg-logo="https://i2.paste.pics/6eeeac8e90c540f2462704788bb4db1d.png", Nueva Region TV | CL
http://live.mundogo.cl/mundo/Nuevaregion/index.m3u8
#EXTINF:-1 tvg-id="348" tvg-name="Canal 21 Chillán" tvg-logo="https://lh3.googleusercontent.com/-G3a4EWWVHDM/YLwWdi2a_KI/AAAAAAABCt8/9O8xWNi1f_UbcvwqCXhAHEvJhcrgSF2lwCJEEGAsYHg/s512/2021-06-05.jpg", Canal 21 Chillán | CL
https://tls-cl.cdnz.cl/canal21tv/live/playlist.m3u8
#EXTINF:-1 tvg-id="903" tvg-name="Región Televisión Ñuble" tvg-logo="https://i2.paste.pics/d1cf85869f9155b5839539a5dea311ea.png", Región Televisión Ñuble | CL
https://live.tvcontrolcp.com:1936/guzman/guzman/playlist.m3u8
#EXTINF:-1 tvg-id="1037" tvg-name="Canal SCÑ - San Carlos Ñuble" tvg-logo="https://i2.paste.pics/6c77f84d9c77fabb70a62b092e7edb78.png", Canal SCÑ - San Carlos Ñuble | CL
https://live.tvcontrolcp.com:1936/sancarlostv/sancarlostv/playlist.m3u8
#EXTINF:-1 tvg-id="902" tvg-name="Ñublevision" tvg-logo="https://i2.paste.pics/eccc0f198fb9739c2fda39aef85e81ae.png", Ñublevision | CL
https://cdn.oneplaychile.cl:1936/regionales/nublevision.stream/playlist.m3u8
#EXTINF:-1 tvg-id="1163" tvg-name="YungayOnline" tvg-logo="https://i2.paste.pics/2f5a5c317d9813f9d83b71e9b1a1c9a9.png", YungayOnline | CL
https://stmv2.zcasthn.com.br/diegomanuel/diegomanuel/playlist.m3u8
#EXTINF:-1 tvg-id="350" tvg-name="ClickTv" tvg-logo="https://i2.paste.pics/d4950684d99dbc3a25f4ef74a2895871.png", ClickTv | CL
https://v2.tustreaming.cl/clicktv/index.m3u8
#EXTINF:-1 tvg-id="174" tvg-name="VP Televisión" tvg-logo="https://i2.paste.pics/454ab39041c8b5867f7d4707ebd6c54f.png", VP Televisión | CL
https://v1.tustreaming.cl:19360/vozdepoder/vozdepoder.m3u8
#EXTINF:-1 tvg-id="386" tvg-name="Energia TV" tvg-logo="https://lh3.googleusercontent.com/-OixheIRfa_Y/YDwn1t40sVI/AAAAAAABAcE/SV3ZQAJE8l4yRS-KV-hCat4miTZwNOuXwCK8BGAsYHg/s512/2021-02-28.png", Energia TV | CL
https://cdn.oneplaychile.cl:1936/regionales/energia-fm/playlist.m3u8
#EXTINF:-1 tvg-id="352" tvg-name="Concepcion TV" tvg-logo="https://i2.paste.pics/d3cfb9b5755fef336d27e1b80a9d2921.png", Concepcion TV | CL
https://panel.miplay.cl:8081/concepciontv/index.m3u8
#EXTINF:-1 tvg-id="353" tvg-name="Canal 9 Bío Bí­o TV" tvg-logo="https://lh3.googleusercontent.com/-opZ6mP8G3Fo/Wn9lBEeoQ4I/AAAAAAAAgwY/cKvIaCeqHZEwdTQ-pJPh7oCDIU2q-fECwCK8BGAs/s220/2018-02-10.png", Canal 9 Bío Bí­o TV | CL
https://unlimited1-cl-isp.dps.live/c9/c9.smil/playlist.m3u8
#EXTINF:-1 tvg-id="354" tvg-name="TV8" tvg-logo="https://i2.paste.pics/104c1e13bca407b18797880aadc3cddb.png", TV8 | CL
https://panel.tvstream.cl:1936/8032/8032/playlist.m3u8
#EXTINF:-1 tvg-id="957" tvg-name="Pacifico Television" tvg-logo="https://i2.paste.pics/dfa0913e3c68b6d9306770eb3151bfa8.png", Pacifico Television | CL
https://oracle.streaminghd.cl/pacificotelevisionspa/pacificotelevisionspa/playlist.m3u8
#EXTINF:-1 tvg-id="355" tvg-name="Canal TV4" tvg-logo="https://lh3.googleusercontent.com/-y7TDgBUKCMI/XxzII32W3zI/AAAAAAAA3X8/hsnRb9iiH84srb7tOHQrBhKze2dWTBVuQCK8BGAsYHg/s0/2020-07-25.png", Canal TV4 | CL
https://v1.tustreaming.cl/tv4television/index.m3u8
#EXTINF:-1 tvg-id="1340" tvg-name="Canal Alta Frontera" tvg-logo="https://i.paste.pics/4e2f00e80ad5f9249e5d40e678cd46fe.png", Canal Alta Frontera | CL
https://mediacpstreamchile.com:1936/altafronteratv/altafronteratv/playlist.m3u8
#EXTINF:-1 tvg-id="948" tvg-name="San Pedro Conecta" tvg-logo="https://i2.paste.pics/8ef804170fcee24a4ee6221ae846e9ba.png", San Pedro Conecta | CL
https://stmv2.zcasthn.com.br/sanpedroconecta/sanpedroconecta/playlist.m3u8
#EXTINF:-1 tvg-id="810" tvg-name="Club TV" tvg-logo="https://i2.paste.pics/403506605b1b59768a26e7bc1d79f1e8.png", Club TV | CL
https://stmv2.zcasthn.com.br/clubtv/clubtv/playlist.m3u8
#EXTINF:-1 tvg-id="82" tvg-name="Teleangol Radio" tvg-logo="https://lh3.googleusercontent.com/-zDgbgkPTFLA/XbCy7Dg-33I/AAAAAAAArlQ/712PcpxHNmAKjz1k4Arp_iVvpJ-qC_WxQCK8BGAsYHg/s0/2019-10-23.png", Teleangol Radio | CL
https://pantera1-100gb-cl-movistar.dps.live/teleangol/teleangol.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1251" tvg-name="RDO TV" tvg-logo="https://i2.paste.pics/d7af3169a2a13e4c18f3fb72db4b1447.png", RDO TV | CL
https://stmv2.zcasthn.com.br/rdotelevision/rdotelevision/playlist.m3u8
#EXTINF:-1 tvg-id="356" tvg-name="LTV canal" tvg-logo="https://lh3.googleusercontent.com/-Lm1PxwMT-Zc/X0v29tzKwLI/AAAAAAAA5Es/MjQEVIxYNhovyHt3mpzI91Gnb-YJj0FoQCK8BGAsYHg/s0/2020-08-30.png", LTV canal | CL
https://mediacpstreamchile.com:1936/ltvcanal/ltvcanal/playlist.m3u8
#EXTINF:-1 tvg-id="83" tvg-name="Pucon TV" tvg-logo="https://lh3.googleusercontent.com/-r4ejsHWoXtE/XYb7QVbZA4I/AAAAAAAArCw/XjvcDEIjGlAZnTFSCURiZYONDlWPs4GhwCK8BGAsYHg/s0/2019-09-21.png", Pucon TV | CL
https://unlimited1-cl-isp.dps.live/pucontv/pucontv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="357" tvg-name="Temuco TV" tvg-logo="https://lh3.googleusercontent.com/-RfITnpTfEz4/YKmDDqHhEvI/AAAAAAABCd4/QZ7_BVwPR3ou-_In9JbR1JeIk97H4irGACK8BGAsYHg/s512/2021-05-22.jpg", Temuco TV | CL
https://tv.streaming-chile.com:19360/temucotelevision/temucotelevision.m3u8
#EXTINF:-1 tvg-id="84" tvg-name="T-Vinet" tvg-logo="https://lh3.googleusercontent.com/-EtM2JBuVazM/XxzIhLJW5PI/AAAAAAAA3YE/zmlykaL06y4tNI5JbuLPm-I1BSYsWCZYACK8BGAsYHg/s0/2020-07-25.png", T-Vinet | CL
https://unlimited1-cl-isp.dps.live/inet2/inet2.smil/playlist.m3u8
#EXTINF:-1 tvg-id="359" tvg-name="Canal Latino 54" tvg-logo="https://lh3.googleusercontent.com/-gBbkRnIisag/XmPPRUnANTI/AAAAAAAAwpc/01jp-ZrMDeYwbf4ahDeKu7kayyMQ_VuUgCK8BGAsYHg/s0/2020-03-07.png", Canal Latino 54 | CL
https://live.chileservidores.com:8081/latina/index.m3u8
#EXTINF:-1 tvg-id="360" tvg-name="Osorno TV+" tvg-logo="https://lh3.googleusercontent.com/-tFNIzbzaa-w/XxzI1GfAaZI/AAAAAAAA3YM/9QCPBTiAp7E6V8u9cSZAyt0IdlWbexo2wCK8BGAsYHg/s0/2020-07-25.png", Osorno TV+ | CL
https://panel.tvstream.cl:1936/8036/8036/playlist.m3u8
#EXTINF:-1 tvg-id="85" tvg-name="Decima TV" tvg-logo="https://lh3.googleusercontent.com/-3q8oUK7uUUo/XbCzDBxA1OI/AAAAAAAArlU/FPIAOQc92_kSKByiVYmSU0USaROnneutgCK8BGAsYHg/s0/2019-10-23.png", Decima TV | CL
https://unlimited2-cl-isp.dps.live/decimatv/decimatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="86" tvg-name="Canal 2 Quellon" tvg-logo="https://i2.paste.pics/ef4396a3c62252b1678b3fae595b0532.png", Canal 2 Quellon | CL
https://unlimited1-cl-isp.dps.live/tvquellon/tvquellon.smil/playlist.m3u8
#EXTINF:-1 tvg-id="361" tvg-name="Vision TV" tvg-logo="https://lh3.googleusercontent.com/-kA-YUEjBEoc/XygP_iR0ZzI/AAAAAAAA3sI/mMsFytWSPV4dziqhZQtA6X0GmhEIrmrpQCK8BGAsYHg/s0/2020-08-03.png", Vision TV | CL
https://vdo.voxhdnet.com:3141/live/visiontvlive.m3u8
#EXTINF:-1 tvg-id="364" tvg-name="Canal 5 Puerto Montt" tvg-logo="https://i2.paste.pics/bf21f73eb125d689b3362c7af6f25887.png", Canal 5 Puerto Montt | CL
https://stmv2.zcasthn.com.br/canal5/canal5/playlist.m3u8
#EXTINF:-1 tvg-id="365" tvg-name="Canal Chilote" tvg-logo="https://i2.paste.pics/062823e72b3259ec4d8787acd2b5ac54.png", Canal Chilote | CL
https://oracle.streaminghd.cl/8030/8030/playlist.m3u8
#EXTINF:-1 tvg-id="856" tvg-name="Hito Cero TV" tvg-logo="https://i2.paste.pics/2a80b8fde21cf03f7ac3bbff7fb0cc25.png", Hito Cero TV | CL
https://5ff3d9babae13.streamlock.net:443/8018/8018/playlist.m3u8
#EXTINF:-1 tvg-id="366" tvg-name="Chiloe Red 25" tvg-logo="https://lh3.googleusercontent.com/-taF7STTebY8/XxzJzTcNobI/AAAAAAAA3Yk/Z_EEZ_hbkK8G6V93Rp9x_q6qa925hTqbACK8BGAsYHg/s0/2020-07-25.png", Chiloe Red 25 | CL
https://v2.tustreaming.cl/chiloered/index.m3u8
#EXTINF:-1 tvg-id="368" tvg-name="Santa Maria TV" tvg-logo="https://lh3.googleusercontent.com/-u0E4RY62ySI/XbC2IU7YHXI/AAAAAAAArmQ/2mDq3cPseesa8lsFWQB8TPWlwAggTb3HQCK8BGAsYHg/s0/2019-10-23.png", Santa Maria TV | CL
https://unlimited1-cl-isp.dps.live/smtv/smtv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="369" tvg-name="Canal 11 TV Aysen" tvg-logo="https://i2.paste.pics/8023836adcf3a07cfaef99fcccbe8292.png", Canal 11 TV Aysen | CL
https://v1.tustreaming.cl:19360/canal11aysen/canal11aysen.m3u8
#EXTINF:-1 tvg-id="1116" tvg-name="SurTV" tvg-logo="https://i2.paste.pics/78850b6e924f55fcbeef5459a37a54a9.png", SurTV | CL
https://paneltv.online:1936/8034/8034/playlist.m3u8
#EXTINF:-1 tvg-id="1012" tvg-name="Aysen TV" tvg-logo="https://i2.paste.pics/f68f8bb46f486aec998bb476a60d4181.png", Aysen TV | CL
http://v1.tustreaming.cl:80/aysentv/index.m3u8
#EXTINF:-1 tvg-id="370" tvg-name="Soberania Radio" tvg-logo="https://lh3.googleusercontent.com/-9sAv8-Qg_V0/YLwX4GMnM2I/AAAAAAABCuM/zxEzBw1b7V8MDY-xb6mRahyOjBVDlph8gCJEEGAsYHg/s512/2021-06-05.png", Soberania Radio | CL
https://tls-cl.cdnz.cl/radiosoberania/live/playlist.m3u8
#EXTINF:-1 tvg-id="87" tvg-name="ITV Patagonia" tvg-logo="https://lh3.googleusercontent.com/-ZBNktblWn9U/YHTLWC_p1aI/AAAAAAABBXY/v90ntMGcb7kuYUK0yqNBGSTtu1JiQUHfQCK8BGAsYHg/s512/2021-04-12.png", ITV Patagonia | CL
https://unlimited1-cl-isp.dps.live/itv/itv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="371" tvg-name="EvaVisión" tvg-logo="https://i2.paste.pics/1fac7deeb4ca257162cde40abd006d9d.png", EvaVisión | CL
https://Stmv1.zcasthn.com.br/evevision/evevision/playlist.m3u8
#EXTINF:-1 tvg-id="372" tvg-name="Canal Sur Patagonia" tvg-logo="https://lh3.googleusercontent.com/-SMZdtDq6Dw0/XxzKA9R0abI/AAAAAAAA3Ys/R8wSeZoKBNU4LyZnAXKU_DR1mGnzo1L4wCK8BGAsYHg/s0/2020-07-25.png", Canal Sur Patagonia | CL
https://v1.tustreaming.cl:19360/canalsurpatagoniatv/canalsurpatagoniatv.m3u8
#EXTINF:-1 tvg-id="373" tvg-name="PinguinoTV" tvg-logo="https://lh3.googleusercontent.com/-qSwYgRuowGA/YLwYt69YoOI/AAAAAAABCuU/avw_KQcl4cUIiy4s2iebwzLAuy5CZDOXQCJEEGAsYHg/s512/2021-06-05.png", PinguinoTV | CL
https://streaming.elpinguino.com:5391/live/EP.smil/playlist.m3u8
#EXTINF:-1 tvg-id="376" tvg-name="Teletrak" tvg-logo="https://lh3.googleusercontent.com/-H203VH0Qnr0/XxzMCs6SOmI/AAAAAAAA3ZQ/S5ojmvOjSQERDOMBWTNQRoN_tqvAZGMBQCK8BGAsYHg/s0/2020-07-25.png", Teletrak | CL
https://mdstrm.com/live-stream-playlist/62616df888feb366839a3eb5.m3u8
#EXTINF:-1 tvg-id="1199" tvg-name="D13" tvg-logo="https://i2.paste.pics/21803adf68e4ed46e638156868973edd.png", D13 | CL
https://redirector.rudo.video/hls-video/ey6283je82983je9823je8jowowiekldk9838274/13d/13d.smil/playlist.m3u8
#EXTINF:-1 tvg-id="374" tvg-name="TV Turf Movil" tvg-logo="https://lh3.googleusercontent.com/-4gdqGn04Bng/Xb9WF2WzB6I/AAAAAAAAr7A/tbeDeaQTuuMuHOka_gYv4trQHwAyzqKPQCK8BGAsYHg/s0/2019-11-03.png", TV Turf Movil | CL
https://janus.tvturf.cl/playlist/stream.m3u8
#EXTINF:-1 tvg-id="375" tvg-name="Valparaiso Sporting" tvg-logo="https://lh3.googleusercontent.com/-HLkq9KDNolI/XxzLq65I2KI/AAAAAAAA3ZI/Vx5DVILxWmoGc5_PJ01NSoc2wVODn-FqACK8BGAsYHg/s0/2020-07-25.png", Valparaiso Sporting | CL
https://unlimited1-cl-isp.dps.live/sportinghd/sportinghd.smil/playlist.m3u8
#EXTINF:-1 tvg-id="63" tvg-name="Bajo Cero TV" tvg-logo="https://i2.paste.pics/3caab16270214727377ff0994bb64031.png", Bajo Cero TV | CL
https://stmv2.zcasthn.com.br/bajocerotv/bajocerotv/playlist.m3u8
#EXTINF:-1 tvg-id="324" tvg-name="El Galpon 80" tvg-logo="https://i2.paste.pics/f1bc9762fc091f72206cac3d4d4111da.png", El Galpon 80 | CL
https://stmv2.zcasthn.com.br/ferchile/ferchile/playlist.m3u8
#EXTINF:-1 tvg-id="849" tvg-name="Sensacion Costa" tvg-logo="https://i.paste.pics/fae835885948bd76146f00ad2640606d.png", Sensacion Costa | CL
https://tv.clientetvstudio.net:3382/live/costatv2live.m3u8
#EXTINF:-1 tvg-id="769" tvg-name="Radioteca TV" tvg-logo="https://i2.paste.pics/8990ff3b0c53684e7f62a5db3c0cab06.png", Radioteca TV | CL
https://paneltv.net:3908/live/txtkignslive.m3u8
#EXTINF:-1 tvg-id="785" tvg-name="Re7" tvg-logo="https://i2.paste.pics/bcba8ec188e21a5552afd167c46282b7.png", Re7 | CL
https://cp.panelchs.com:1936/etpxbvxrcp/etpxbvxrcp/playlist.m3u8
#EXTINF:-1 tvg-id="521" tvg-name="Recuerdos Retro Radio TV" tvg-logo="https://i2.paste.pics/64f570fc821ff3b32cfdc0b0123be940.png", Recuerdos Retro Radio TV | CL
https://panel.tvstream.cl:1936/8034/8034/playlist.m3u8
#EXTINF:-1 tvg-id="889" tvg-name="La Sabrosura TV" tvg-logo="https://lh3.googleusercontent.com/-8b7QS_hJZdY/YLu9e1SGFLI/AAAAAAABCrk/aO5qeFONSokBmWT8vsROhr1uigX0FizcQCJEEGAsYHg/s512/2021-06-05.png", La Sabrosura TV | CL
https://tv.streaming-chile.com:1936/radiosabrosura/radiosabrosura/playlist.m3u8
#EXTINF:-1 tvg-id="27" tvg-name="Carolina TV" tvg-logo="https://i2.paste.pics/7d24cb88758eceb655098c2fa29a7c9a.png", Carolina TV | CL
https://mdstrm.com/live-stream-playlist/63a06468117f42713374addd.m3u8
#EXTINF:-1 tvg-id="1127" tvg-name="Carolina TV 2" tvg-logo="https://i2.paste.pics/7d24cb88758eceb655098c2fa29a7c9a.png", Carolina TV 2 | CL
https://jireh-1-hls-video-cl-isp.dps.live/hls-video/ey6283je82983je9823je8jowowiekldk9838274/carolinatv2/carolinatv2.smil/playlist.m3u8
#EXTINF:-1 tvg-id="29" tvg-name="DJ Loncho TV" tvg-logo="https://lh3.googleusercontent.com/-VPBp6Vk47T4/XnzDahiuJCI/AAAAAAAAxMI/BkejtQRObwcVvsIvYbdi3Yf5UOizKSRoQCK8BGAsYHg/s0/2020-03-26.png", DJ Loncho TV | CL
https://srv5.zcast.com.br/djlonchtv/djlonchtv/playlist.m3u8
#EXTINF:-1 tvg-id="33" tvg-name="Maxima FM" tvg-logo="https://lh3.googleusercontent.com/-RF13xAQ97o0/XxzMzRqfnBI/AAAAAAAA3Zc/xet9CCbU7H8WEPRQGCXEPpiBxM5RUK6EwCK8BGAsYHg/s0/2020-07-25.png", Maxima FM | CL
https://server1.oklanet.cl:1936/maximavideo1/maximavideo1/playlist.m3u8
#EXTINF:-1 tvg-id="34" tvg-name="TV vconline.cl" tvg-logo="https://lh3.googleusercontent.com/-F0CYLyk3J_M/XxzNduxMoVI/AAAAAAAA3Zk/3S772u4F4jER7F0bULY-hlG7Nn9bbGa7gCK8BGAsYHg/s0/2020-07-25.png", TV vconline.cl | CL
https://panel.tvstream.cl:1936/8024/8024/playlist.m3u8
#EXTINF:-1 tvg-id="2" tvg-name="Zapping Music" tvg-logo="https://i2.paste.pics/869156d90e27d6c6e09dc5a8f0017838.png", Zapping Music | CL
https://zmlive.zappingtv.com/zm-free/zm.smil/playlist.m3u8
#EXTINF:-1 tvg-id="32" tvg-name="Alegria TV" tvg-logo="https://lh3.googleusercontent.com/-IDCwMaJRdnM/Xb11MVTbE-I/AAAAAAAAr4s/PbNF6ie1AIothtCRKeVvdVC6S5hO6a3xACK8BGAsYHg/s0/2019-11-02.png", Alegria TV | CL
https://63da5f7cbffac.streamlock.net:443/8192/8192/playlist.m3u8
#EXTINF:-1 tvg-id="1008" tvg-name="FM Hit" tvg-logo="https://i2.paste.pics/2634a30ce1a741cffa2e23cf6c0ca9ee.png", FM Hit | CL
https://6362ca6f1fc28.streamlock.net/radiofmhit/radiofmhit/playlist.m3u8
#EXTINF:-1 tvg-id="973" tvg-name="Top New Radio" tvg-logo="https://i2.paste.pics/fa96854fb72b2a5e1032d030c83814fa.png", Top New Radio | CL
https://panel.tvstream.cl:1936/8052/8052/playlist.m3u8
#EXTINF:-1 tvg-id="1242" tvg-name="Radio Estacion Arica" tvg-logo="https://i2.paste.pics/e64969d7d359e8932a50b2913cb998eb.png", Radio Estacion Arica | CL
https://5eaccbab48461.streamlock.net:1936/heqhvtgebg/heqhvtgebg/playlist.m3u8
#EXTINF:-1 tvg-id="1248" tvg-name="Subela Radio" tvg-logo="https://i2.paste.pics/f481e57821baed274d68c5b0c954cd96.png", Subela Radio | CL
https://mdstrm.com/live-stream-playlist/5fad9b1d978fe1080e3ac4a8.m3u8
#EXTINF:-1 tvg-id="1196" tvg-name="Radio Ritmo FM" tvg-logo="https://i2.paste.pics/7e2feb3f6e5b19c3b4b26515ee025bac.png", Radio Ritmo FM | CL
https://video.streamingchilenos.cl:1936/8040/8040/playlist.m3u8
#EXTINF:-1 tvg-id="1173" tvg-name="Radio Mia 89.3 Fm" tvg-logo="https://i2.paste.pics/3ffdfac502060629e56167adcd35f872.png", Radio Mia 89.3 Fm | CL
https://stmv2.zcasthn.com.br/radiomia/radiomia/playlist.m3u8
#EXTINF:-1 tvg-id="1229" tvg-name="Macarena FM" tvg-logo="https://i2.paste.pics/c1462d513ed7e5b049d338693366ff29.png", Macarena FM | CL
https://5ff3d9babae13.streamlock.net:443/8042/8042/playlist.m3u8
#EXTINF:-1 tvg-id="1069" tvg-name="Radio Magallanes" tvg-logo="https://i2.paste.pics/cc4b99bf8b5291c279d1f2f02fab8d06.png", Radio Magallanes | CL
https://live.tvcontrolcp.com:1936/magallanes/magallanes/playlist.m3u8
#EXTINF:-1 tvg-id="1134" tvg-name="Radio Maqui" tvg-logo="https://i2.paste.pics/c5e226f1753478bcd1752691c1ce259a.png", Radio Maqui | CL
https://bozztv.com/ssh101/ssh101/MAQUIRADIO/playlist.m3u8
#EXTINF:-1 tvg-id="1004" tvg-name="Ritmo TV" tvg-logo="https://i2.paste.pics/c21ae73475f4ae5a72d93defb2bdc1b7.png", Ritmo TV | CL
https://tv.streaming-chile.com:1936/ritmofm/ritmofm/playlist.m3u8
#EXTINF:-1 tvg-id="987" tvg-name="Emocion TV" tvg-logo="https://i2.paste.pics/2337c738e62db5b6e2b573580e2d9e82.png", Emocion TV | CL
https://v1.tustreaming.cl/emociontv/index.m3u8
#EXTINF:-1 tvg-id="1013" tvg-name="CRadio.cl" tvg-logo="https://i2.paste.pics/f08b155b917bdd7db3bebdd877d8703a.png", CRadio.cl | CL
https://tls-cl.cdnz.cl/cradio/live/playlist.m3u8
#EXTINF:-1 tvg-id="387" tvg-name="Zona Play Radio" tvg-logo="https://i2.paste.pics/443953e7611825ee250208b351899a7c.png", Zona Play Radio | CL
https://5eaccbab48461.streamlock.net:1936/8140/8140/playlist.m3u8
#EXTINF:-1 tvg-id="786" tvg-name="Tributo Valentina" tvg-logo="https://lh3.googleusercontent.com/-prh7BFcqRm8/YG-DVGT_cwI/AAAAAAABBRM/eqw6BkvoZRQ6UQHcT76iv42klsK74q7WgCK8BGAsYHg/s512/2021-04-08.png", Tributo Valentina | CL
https://vdochile.com:3385/hybrid/play.m3u8
#EXTINF:-1 tvg-id="1125" tvg-name="Radio La Serena" tvg-logo="https://i2.paste.pics/850f8ca54830f1011c5289f02a401cd5.png", Radio La Serena | CL
https://stmv2.zcasthn.com.br/radiolaserena/radiolaserena/playlist.m3u8
#EXTINF:-1 tvg-id="974" tvg-name="Patagonia Radio TV" tvg-logo="https://i2.paste.pics/0f20f371ddf95dcc9deed1f97c7c1bb8.png", Patagonia Radio TV | CL
https://video01.logicahost.com.br/grupomedia/grupomedia/playlist.m3u8
#EXTINF:-1 tvg-id="975" tvg-name="FM Mix" tvg-logo="https://i2.paste.pics/ee110fa8ecbc39a633bb78d6aaf6972d.png", FM Mix | CL
https://5ff3d9babae13.streamlock.net:443/8026/8026/playlist.m3u8
#EXTINF:-1 tvg-id="379" tvg-name="CCP Radio" tvg-logo="https://lh3.googleusercontent.com/-t_TztnOyFVE/XmsBBeYivqI/AAAAAAAAwyY/AiGUMO20vMcW9z6ipuNOk_WkgY_za1KrgCK8BGAsYHg/s512/2020-03-12.png", CCP Radio | CL
https://wifiexpert-1.energeek.cl/energeek/canal-3/playlist.m3u8
#EXTINF:-1 tvg-id="400" tvg-name="Red Fueguina Radio" tvg-logo="https://lh3.googleusercontent.com/-AX14DpZylvw/Xqx1dYnBM7I/AAAAAAAAyhM/FKTxf_9d9hEY1okFtMwivpO3IIy9KAAcgCK8BGAsYHg/s0/2020-05-01.png", Red Fueguina Radio | CL
https://inliveserver.com:1936/11012/11012/playlist.m3u8
#EXTINF:-1 tvg-id="838" tvg-name="DBox Radio" tvg-logo="https://i2.paste.pics/1ff617f249eb62e6e2fe828da20a83b7.png", DBox Radio | CL
https://Stmv1.zcasthn.com.br/dbox/dbox/playlist.m3u8
#EXTINF:-1 tvg-id="392" tvg-name="Radio Zeta" tvg-logo="https://i2.paste.pics/6e6018f04b3f9a9271f981117d65ee07.png", Radio Zeta | CL
https://unlimited1-cl-isp.dps.live/radioztv/radioztv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="396" tvg-name="Radio Via Libre" tvg-logo="https://lh3.googleusercontent.com/-BZ4QVXPlxJU/Xk_PdNVd3KI/AAAAAAAAwVc/js3gvjxbBPoXr0EmRyQxl6MWeiYX6x7_gCK8BGAsYHg/s0/2020-02-21.png", Radio Via Libre | CL
https://stmv2.zcasthn.com.br/vialibre/vialibre/playlist.m3u8
#EXTINF:-1 tvg-id="390" tvg-name="Radio Universal" tvg-logo="https://lh3.googleusercontent.com/-0g6kTjRKq_8/XoTI5Gn3jjI/AAAAAAAAxZk/9EsSrTOl0eMlKWP9oRzwZK8lQ9mt8PSBwCK8BGAsYHg/s0/2020-04-01.png", Radio Universal | CL
https://live.chileservidores.com:8081/universal/index.m3u8
#EXTINF:-1 tvg-id="394" tvg-name="Radio Touch" tvg-logo="https://lh3.googleusercontent.com/-qotpEBjN3o0/Xmr5PYL7uPI/AAAAAAAAwx8/FwJJfi_LQjUoISTRZ0JhU4es2qWXDJeCACK8BGAsYHg/s0/2020-03-12.png", Radio Touch | CL
https://tv.streaming-chile.com:1936/radiotouch/radiotouch/playlist.m3u8
#EXTINF:-1 tvg-id="416" tvg-name="Sabor TV" tvg-logo="https://i2.paste.pics/0c69fb7b8aed951e8fbb9dfae98c39a5.png", Sabor TV | CL
https://v1.tustreaming.cl/sabortv/index.m3u8
#EXTINF:-1 tvg-id="787" tvg-name="Radio Riquelme TV" tvg-logo="https://i2.paste.pics/866319e8987f0ca8c80f62eb775ab888.png", Radio Riquelme TV | CL
https://video.radioriquelme.cl/hls/stream.m3u8
#EXTINF:-1 tvg-id="418" tvg-name="Radio Rancagua" tvg-logo="https://lh3.googleusercontent.com/-Z5RpepVd4T0/XkbaXURXxAI/AAAAAAAAwC4/SEU5uIM2uzUQQznq-Pgvi-uCe_fStzypwCK8BGAsYHg/s0/2020-02-14.png", Radio Rancagua | CL
https://tv.streaming-chile.com:19360/rancagua/rancagua.m3u8
#EXTINF:-1 tvg-id="413" tvg-name="Radio Presidente Ibañez" tvg-logo="https://lh3.googleusercontent.com/-t2rtTbIA3oc/XmV-7wrFWHI/AAAAAAAAwr0/VH4k91ijqr4MbkR-DlS4n7o0HvCnjQfZACK8BGAsYHg/s0/2020-03-08.png", Radio Presidente Ibañez | CL
https://ibanez.servercl.com/hls/live.m3u8
#EXTINF:-1 tvg-id="420" tvg-name="Radio Portales" tvg-logo="https://lh3.googleusercontent.com/-eIr2RmGVfeg/XkbYVLkwo3I/AAAAAAAAwCs/F1Q11XV_JvgjR-wvfgNhKrGUmE7OldbqACK8BGAsYHg/s0/2020-02-14.png", Radio Portales | CL
https://cdn.oneplaychile.cl:1936/radios/radioportales/playlist.m3u8
#EXTINF:-1 tvg-id="403" tvg-name="Radio Polar" tvg-logo="https://i2.paste.pics/1a4476b8ddeb3fad055579929c495fca.png", Radio Polar | CL
https://mediacpstreamchile.com:1936/radiopolar2/radiopolar2/playlist.m3u8
#EXTINF:-1 tvg-id="378" tvg-name="Radio Mas" tvg-logo="https://lh3.googleusercontent.com/-1MimLN5b_Os/XmsDzj71aqI/AAAAAAAAwys/1bqv2qCTmUkN9qA1qaIZfWLihfGZ6jdOgCK8BGAsYHg/s512/2020-03-12.png", Radio Mas | CL
http://unlimited1-cl.dps.live/radiomas/radiomas.smil/playlist.m3u8
#EXTINF:-1 tvg-id="408" tvg-name="Radio Las Nieves" tvg-logo="https://lh3.googleusercontent.com/-yAzYXd230b8/XmPQwQY849I/AAAAAAAAwps/fu7GMDaULwEgJYarzmR1Vo5w_BRoPg2eACK8BGAsYHg/s0/2020-03-07.png", Radio Las Nieves | CL
https://v2.tustreaming.cl/rln/index.m3u8
#EXTINF:-1 tvg-id="380" tvg-name="Radio Hoy" tvg-logo="https://lh3.googleusercontent.com/-vFBzx3OHjvA/XmPSjVW5sMI/AAAAAAAAwp8/W0kgWc-NYfUkFdX3SZICQX3njfoFJP72QCK8BGAsYHg/s0/2020-03-07.png", Radio Hoy | CL
https://panel.dattalive.com:443/8146/8146/playlist.m3u8
#EXTINF:-1 tvg-id="412" tvg-name="Radio Genial TV" tvg-logo="https://lh3.googleusercontent.com/-tgkESVUJWRI/XkyfsBVW_mI/AAAAAAAAwHw/xsYoralOutAlHw-iMJC9nl1hdd6vKqznQCK8BGAsYHg/s0/2020-02-18.png", Radio Genial TV | CL
https://v1.tustreaming.cl:19360/genialtv/genialtv.m3u8
#EXTINF:-1 tvg-id="401" tvg-name="Radio Fiessta" tvg-logo="https://lh3.googleusercontent.com/-geXQ8sv9psc/XoPRmsgB8zI/AAAAAAAAxYA/XW6P5dLJn1wAaa3IZFhc5NBjBIr-OAbqgCK8BGAsYHg/s0/2020-03-31.png", Radio Fiessta | CL
https://www.cloudscriptdog.cl:19360/fiesta-video-01/fiesta-video-01.m3u8
#EXTINF:-1 tvg-id="883" tvg-name="Futura TV" tvg-logo="https://lh3.googleusercontent.com/-mnnwudrynnE/XkbaoY35p6I/AAAAAAAAwDA/eHhkuRJcADsgzRX1Zfajo6FQ8wrGHRS0gCK8BGAsYHg/s0/2020-02-14.png", Futura TV | CL
https://unlimited1-cl-isp.dps.live/futuratv/futuratv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="417" tvg-name="Radio Favorita" tvg-logo="https://i2.paste.pics/013f102620fa4558ed5f233f7ea3b33e.png", Radio Favorita | CL
https://streamyes.alsolnet.com/radiofavoritatv/live/playlist.m3u8
#EXTINF:-1 tvg-id="870" tvg-name="Radio Ñuble" tvg-logo="https://lh3.googleusercontent.com/-yPTpIpQNeeY/YKmBg83s56I/AAAAAAABCds/RmIdBd-Qd5wQYuoUEQmU9e8rmTgsSQPRQCK8BGAsYHg/s512/2021-05-22.jpg", Radio Ñuble | CL
https://live.tvcontrolcp.com:1936/rnuble/rnuble/playlist.m3u8
#EXTINF:-1 tvg-id="389" tvg-name="Radio Fantasia TV" tvg-logo="https://lh3.googleusercontent.com/-7Uf_S_1oEU8/XmV_Zz3S5cI/AAAAAAAAwsA/yYku6NdZFTk7c0a9AtwAOJBoh3a2UMnqQCK8BGAsYHg/s0/2020-03-08.png", Radio Fantasia TV | CL
https://v2.tustreaming.cl/fantasiatv/index.m3u8
#EXTINF:-1 tvg-id="405" tvg-name="Cosmos TV" tvg-logo="https://i2.paste.pics/ed2fce1f9fe98a5c7dec95777c201497.png", Cosmos TV | CL
https://v1.tustreaming.cl/cosmostv/index.m3u8
#EXTINF:-1 tvg-id="399" tvg-name="Radio Corporacion" tvg-logo="https://i2.paste.pics/78b7ed4b48b0239fe4e6c57d969bbfde.png", Radio Corporacion | CL
https://v2.tustreaming.cl/corporaciontv/index.m3u8
#EXTINF:-1 tvg-id="409" tvg-name="Radio Chiloe" tvg-logo="https://lh3.googleusercontent.com/-exchdEZ4lAg/XmWArTXQnFI/AAAAAAAAwsI/fo3sD3494lY54nz8wHjEykbwf0tVz0MkQCK8BGAsYHg/s0/2020-03-08.png", Radio Chiloe | CL
https://videostream.chileservidores.com:8081/chiloeone/index.m3u8
#EXTINF:-1 tvg-id="410" tvg-name="Radio Camila TV" tvg-logo="https://lh3.googleusercontent.com/-82UBf4qHY0Q/XjHJ9TJue-I/AAAAAAAAvfc/Y474O6NtMJYl1gpuUJ1sJyFh8i9afnYlACK8BGAsYHg/s0/2020-01-29.png", Radio Camila TV | CL
https://panel.tvstream.cl:1936/8008/8008/playlist.m3u8
#EXTINF:-1 tvg-id="407" tvg-name="Preludio TV" tvg-logo="https://lh3.googleusercontent.com/-dwHIA3qDBnE/XmPQVNGWG8I/AAAAAAAAwpk/lEVnfzQ8b1s7gjkedNxdk8G-foIlYgOAACK8BGAsYHg/s0/2020-03-07.png", Preludio TV | CL
https://tv.streaming-chile.com:19360/preludio/preludio.m3u8
#EXTINF:-1 tvg-id="402" tvg-name="Orocoipo" tvg-logo="https://lh3.googleusercontent.com/-Oj60X_Fdylk/XoPge96i7aI/AAAAAAAAxYQ/zkPc_7Zajj04xQelUuWrShb7K68FDuVBgCK8BGAsYHg/s0/2020-03-31.png", Orocoipo | CL
https://panel.tvstream.cl:1936/8018/8018/playlist.m3u8
#EXTINF:-1 tvg-id="395" tvg-name="Mi Radio TV" tvg-logo="https://lh3.googleusercontent.com/-7XLo-eid_jI/Xm9iFNKwCYI/AAAAAAAAw8Y/TWJlVG10Ofc-nX2cNdUPKn7quq7hKWKBACK8BGAsYHg/s0/2020-03-16.png", Mi Radio TV | CL
https://tls-cl.cdnz.cl/miradio2/live/playlist.m3u8
#EXTINF:-1 tvg-id="411" tvg-name="Interradio TV" tvg-logo="https://i2.paste.pics/29e1c081406ffc375a6af8717839fb30.png", Interradio TV | CL
https://tv.streaming-chile.com:1936/8012/8012/playlist.m3u8
#EXTINF:-1 tvg-id="388" tvg-name="Interactiva FM" tvg-logo="https://lh3.googleusercontent.com/-QI0Y25E7D14/X4YuErUkgLI/AAAAAAAA6Yo/WZwniEwC_RwZWkwXPGKRXxRueEu4ekjUQCK8BGAsYHg/s0/2020-10-13.jpg", Interactiva FM | CL
https://live.tvcontrolcp.com:1936/interactivafm/interactivafm/playlist.m3u8
#EXTINF:-1 tvg-id="397" tvg-name="FM Pulso" tvg-logo="https://lh3.googleusercontent.com/-PnlftgFahF0/XoThpbgVNeI/AAAAAAAAxZw/YFbXaFZUUikkGSKbQjxlOyxVMmJQBQMFACK8BGAsYHg/s0/2020-04-01.png", FM Pulso | CL
https://oracle.streaminghd.cl:443/fmpulso/fmpulso/playlist.m3u8
#EXTINF:-1 tvg-id="1478" tvg-name="El Conquistador Santiago" tvg-logo="https://i2.paste.pics/8dce6d20b26e1ed90098029d8d079fe5.png", El Conquistador Santiago | CL
https://redirector.rudo.video/hls-video/931b584451fa6dd1313ee66efbfd5802e3f3bcea/elconquistadortv/elconquistadortv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="398" tvg-name="El Sembrador" tvg-logo="https://i2.paste.pics/fb25f1d4266b7fd95e8a5f33a23ac492.png", El Sembrador | CL
https://tv.streaming-chile.com:19360/elsembrador/elsembrador.m3u8
#EXTINF:-1 tvg-id="419" tvg-name="El Conquistador Concepcion" tvg-logo="https://lh3.googleusercontent.com/-sbaPyioWXEc/XxzPyjqm-UI/AAAAAAAA3aQ/uxQH1SZBD4k0o1g7MQPhYsBf6Mo4cjkOQCK8BGAsYHg/s0/2020-07-25.png", El Conquistador Concepcion | CL
https://v1.tustreaming.cl:19360/conquistadorconcepcion/conquistadorconcepcion.m3u8
#EXTINF:-1 tvg-id="382" tvg-name="ChocolateFM" tvg-logo="https://lh3.googleusercontent.com/-Cv39r3czF0w/XovwZlRIgyI/AAAAAAAAxhI/u9IUH1nGlX4XEJA-Pqc2wGXfJJrbjejgwCK8BGAsYHg/s0/2020-04-06.png", ChocolateFM | CL
https://5eaccbab48461.streamlock.net:1936/8056/8056/playlist.m3u8
#EXTINF:-1 tvg-id="406" tvg-name="Radio Ancoa TV" tvg-logo="https://i2.paste.pics/b1a689ac7ba1ffd46a21a12f78b2e12a.png", Radio Ancoa TV | CL
https://v2.tustreaming.cl/radioancoatv/index.m3u8
#EXTINF:-1 tvg-id="414" tvg-name="AE Radio" tvg-logo="https://i2.paste.pics/f8b890eebda6062f306024bdc70afafa.png", AE Radio | CL
https://tls-cl.cdnz.cl/aeradio/live/playlist.m3u8
#EXTINF:-1 tvg-id="1301" tvg-name="Radioactiva TV" tvg-logo="https://i.paste.pics/cff8be166e37e6bab62b87f91d6215ca.png", Radioactiva TV | CL
https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/radioactivatv/radioactivatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1270" tvg-name="La Clave" tvg-logo="https://i2.paste.pics/cfee8bde46f156bfd6c7fc6aad021835.png", La Clave | CL
https://unlimited1-cl-isp.dps.live/laclavetv/laclavetv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="882" tvg-name="Pauta TV" tvg-logo="https://lh3.googleusercontent.com/-DB74taQncQw/XbSnai__c5I/AAAAAAAArt0/jqsOckrCWRMdlGZoE1ecSjJrHivTgt_fQCK8BGAsYHg/s0/2019-10-26.png", Pauta TV | CL
https://unlimited1-cl-isp.dps.live/pautatv/pautatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="426" tvg-name="Radio Tiempo" tvg-logo="https://lh3.googleusercontent.com/-pG_O1wKWuUY/XlPedSivgtI/AAAAAAAAwbg/f7tHw2tx4kMuTwzpTSoJQeiprrvTMshuQCK8BGAsYHg/s0/2020-02-24.png", Radio Tiempo | CL
https://mdstrm.com/live-stream-playlist/63a0664e0b2e5754a7bed954.m3u8
#EXTINF:-1 tvg-id="425" tvg-name="Radio Infinita" tvg-logo="https://i2.paste.pics/e6cda89272e3579a1987bc1380bd5866.png", Radio Infinita | CL
https://mdstrm.com/live-stream-playlist/63a066e54ed536087960b550.m3u8
#EXTINF:-1 tvg-id="428" tvg-name="Radio Romantica" tvg-logo="https://i2.paste.pics/fb1c2e049a401e2e34318f28706587d0.png", Radio Romantica | CL
https://mdstrm.com/live-stream-playlist/63a0674c1137d408b45d4821.m3u8
#EXTINF:-1 tvg-id="423" tvg-name="Radio Agricultura" tvg-logo="https://lh3.googleusercontent.com/-nMa_IsPVRQ0/Xdsii8vjPBI/AAAAAAAAsVI/py8vvCsRNGIuvDA62hxD62S6L29wmGOzACK8BGAsYHg/s0/2019-11-24.png", Radio Agricultura | CL
http://unlimited1-cl-isp.dps.live/921tv/921tv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="427" tvg-name="Radio Duna" tvg-logo="https://lh3.googleusercontent.com/-yl6dZt6XKzE/XdshRlQ88eI/AAAAAAAAsU4/KxB9KZBrShQzBIEQyGmDZ9a-vvI41GiQwCK8BGAsYHg/s0/2019-11-24.png", Radio Duna | CL
https://unlimited1-cl-isp.dps.live/dunatv/dunatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="429" tvg-name="Pudahuel FM" tvg-logo="https://lh3.googleusercontent.com/-j_3t6HSVxa8/XkbbBzVir0I/AAAAAAAAwDM/kVHViPIlEDs5ntK8W5yfVgaym95puVsLACK8BGAsYHg/s0/2020-02-14.png", Pudahuel FM | CL
https://unlimited2-cl-isp.dps.live/pudahueltv/pudahueltv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="422" tvg-name="Cooperativa" tvg-logo="https://lh3.googleusercontent.com/-z-9QvjvHZ5A/Xdsg1tqv4jI/AAAAAAAAsUw/f9g3MnniEdAxcMWqEsWK6vuikDlDz25iACK8BGAsYHg/s0/2019-11-24.png", Cooperativa | CL
https://unlimited1-cl-isp.dps.live/coopetv/coopetv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="421" tvg-name="Bio Bio TV" tvg-logo="https://lh3.googleusercontent.com/-QHD8_RoRqOU/XxzQUiC2S5I/AAAAAAAA3aY/YM3LJbqZLxot1bbgqWLRVD-QnoFWYaxCgCK8BGAsYHg/s0/2020-07-25.png", Bio Bio TV | CL
https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/bbtv/bbtv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="424" tvg-name="ADN" tvg-logo="https://lh3.googleusercontent.com/-H20emk-_gGE/Xb2CvlkCsVI/AAAAAAAAr6c/MvhdPSgNp4I1Q9QAGlqEvJp4QRnyorpkgCK8BGAsYHg/s0/2019-11-02.png", ADN | CL
https://redirector.rudo.video/hls-video/931b584451fa6dd1313ee66efbfd5802e3f3bcea/adntv/adntv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1198" tvg-name="T13 Radio" tvg-logo="https://i2.paste.pics/45e025a4deee9ffaeabe6af0b964a6c8.png", T13 Radio | CL
https://unlimited1-cl-isp.dps.live/t13radio/t13radio.smil/playlist.m3u8
#EXTINF:-1 tvg-id="161" tvg-name="Vida TV" tvg-logo="https://lh3.googleusercontent.com/-M6IkTdk74v8/YEDQ8Yaj8sI/AAAAAAABAg0/0AX-YP_ERfco4p51TJDf3a0-cmAFLb6rgCK8BGAsYHg/s512/2021-03-04.png", Vida TV | CL
http://181.224.64.2:89/vidatv/index.m3u8
#EXTINF:-1 tvg-id="170" tvg-name="Unidad Evangelica TV" tvg-logo="https://lh3.googleusercontent.com/-0tqSzwPEvSc/X7PH803XliI/AAAAAAAA7aQ/4JNA77aFp8gLDSf-RMXP1Ej7gSyKjrKrACK8BGAsYHg/s0/2020-11-17.png", Unidad Evangelica TV | CL
https://v2.tustreaming.cl/unidadevangelica/index.m3u8
#EXTINF:-1 tvg-id="168" tvg-name="TNE" tvg-logo="https://i2.paste.pics/12d449b496fcb00dc23612da150e3fd6.png", TNE | CL
https://v2.tustreaming.cl/tnetv/index.m3u8
#EXTINF:-1 tvg-id="169" tvg-name="Televida HD" tvg-logo="https://i2.paste.pics/a33717fb4cfdc7ac0983ec9b03947e7e.png", Televida HD | CL
https://tls-cl.cdnz.cl/televida/live/playlist.m3u8
#EXTINF:-1 tvg-id="351" tvg-name="Restaurando Vidas TV" tvg-logo="https://i2.paste.pics/bda4dda4f3d61d88354e6d64a8fdbc44.png", Restaurando Vidas TV | CL
https://v4.tustreaming.cl/restaurandovida/index.m3u8
#EXTINF:-1 tvg-id="167" tvg-name="Radio Vida Curico" tvg-logo="https://i2.paste.pics/b5b7b96e2769867a92c9a32dee7cfba9.png", Radio Vida Curico | CL
https://v2.tustreaming.cl/radiovidacurico/rewind-999999.m3u8
#EXTINF:-1 tvg-id="164" tvg-name="NCTV" tvg-logo="https://i2.paste.pics/4a59ad761b7b6578b320729cb230f778.png", NCTV | CL
https://pantera1-100gb-cl-movistar.dps.live/nctv/nctv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="163" tvg-name="Gracia TV" tvg-logo="https://lh3.googleusercontent.com/-SWtsCllpbio/Xpz5oNEdmDI/AAAAAAAAyBc/fsfhz_a0y9I-6v8vfM0zUc_9C_xG3DgagCK8BGAsYHg/s0/2020-04-19.png", Gracia TV | CL
https://v4.tustreaming.cl/graciatv/index.m3u8
#EXTINF:-1 tvg-id="159" tvg-name="Canal ISB" tvg-logo="https://lh3.googleusercontent.com/-BAGm0_jccnk/Xpz6lms-rHI/AAAAAAAAyBk/Mbk9tiXSZPMBkW90NGR8LEG7OR1mmb2sQCK8BGAsYHg/s0/2020-04-19.png", Canal ISB | CL
https://unlimited1-cl-isp.dps.live/isb/isb.smil/playlist.m3u8
#EXTINF:-1 tvg-id="157" tvg-name="Canal 33" tvg-logo="https://lh3.googleusercontent.com/-SM266zq0954/XbJE8J3rspI/AAAAAAAArrY/ul2hiTKcHyUNayzFG1NbGTN11yRpb4oEACK8BGAsYHg/s0/2019-10-24.png", Canal 33 | CL
https://oracle.streaminghd.cl/eduardo555/eduardo555/playlist.m3u8
#EXTINF:-1 tvg-id="1186" tvg-name="Casa Sobre La Roca TV" tvg-logo="https://i2.paste.pics/fabed3217697cbd31cbd240376b2dfdb.png", Casa Sobre La Roca TV | CL
https://cp.panelchs.com:1936/8118/8118/playlist.m3u8
#EXTINF:-1 tvg-id="1202" tvg-name="MC Radio" tvg-logo="https://i2.paste.pics/7070d20a86a32c32e668f538bac42bdf.png", MC Radio | CL
https://live.tvcontrolcp.com:1936/manten/manten/playlist.m3u8
#EXTINF:-1 tvg-id="1306" tvg-name="Telezion" tvg-logo="https://i.paste.pics/744c8dc0a1dfd1f42f8a6facae3333c2.png", Telezion | CL
https://paneltv.net:3751/hybrid/play.m3u8
#EXTINF:-1 tvg-id="1308" tvg-name="Sonido Nazaret" tvg-logo="https://i.paste.pics/b1c8b206c4cfc580d74e9d865957ff17.png", Sonido Nazaret | CL
https://live.tvcontrolcp.com:1936/sonidonazaret/sonidonazaret/playlist.m3u8
#EXTINF:-1 tvg-id="1384" tvg-name="Metanoia TV" tvg-logo="https://i.paste.pics/151c6df5f012237e0a664508de84db1e.png", Metanoia TV | CL
https://6362ca6f1fc28.streamlock.net/8140/8140/playlist.m3u8
#EXTINF:-1 tvg-id="1390" tvg-name="TV Emanuel" tvg-logo="https://i.paste.pics/051076385a23f7e0dbcb12c94c20e109.png", TV Emanuel | CL
https://Stmv1.zcasthn.com.br/ministerioemanuel/ministerioemanuel/playlist.m3u8
#EXTINF:-1 tvg-id="1399" tvg-name="IPNA Medio" tvg-logo="https://i2.paste.pics/c6788a74a24fa5859af6167d6fc0f659.png", IPNA Medio | CL
https://paneltv.online:1936/8184/8184/playlist.m3u8
#EXTINF:-1 tvg-id="1412" tvg-name="Enlace BPB" tvg-logo="https://i2.paste.pics/8d175ca5266fe11e2de8318f0724d96c.png", Enlace BPB | CL
https://v1.tustreaming.cl/enlacebpbtv/index.m3u8
#EXTINF:-1 tvg-id="1444" tvg-name="Cristo Poder De Dios TV" tvg-logo="https://i2.paste.pics/2c9b7eabbe31208cdf9493ed9bc78259.png", Cristo Poder De Dios TV | CL
https://vdo.miserver.pro/p/3487/hybrid/play.m3u8
#EXTINF:-1 tvg-id="1450" tvg-name="Radio Israel" tvg-logo="https://i2.paste.pics/cd076383a1e326a4e2a438733669adc1.png", Radio Israel | CL
https://vdochile.com:3168/hybrid/play.m3u8
#EXTINF:-1 tvg-id="1456" tvg-name="Cero Anestesia" tvg-logo="https://i2.paste.pics/939584306bca2e6e0c4d33eda13b7f8c.png", Cero Anestesia | CL
https://webtvca.autoplayout.com/hls/0/stream.m3u8
#EXTINF:-1 tvg-id="173" tvg-name="Escuchame Radio" tvg-logo="https://lh3.googleusercontent.com/-eQd-W5mPTuw/YDwxJZOsNSI/AAAAAAABAcs/0mAPdTthnzsqYh3wSG0soki-xF-As78UQCK8BGAsYHg/s512/2021-02-28.png", Escuchame Radio | CL
https://stmv2.zcasthn.com.br/escuchame/escuchame/playlist.m3u8
#EXTINF:-1 tvg-id="1480" tvg-name="Fortaleza Radio" tvg-logo="https://i2.paste.pics/1f09fb712957263bd30cc502ce6b9670.png", Fortaleza Radio | CL
https://live.tvcontrolcp.com:1936/fortalezatv/fortalezatv/playlist.m3u8
#EXTINF:-1 tvg-id="1479" tvg-name="Fortaleza TV" tvg-logo="https://i2.paste.pics/34c6e0cc1a8eccd67342a70fb2281c7c.png", Fortaleza TV | CL
https://multimedia.fortalezatv.cl/video/video.m3u8
#EXTM3U
#EXTINF:-1 tvg-id="PE | Willax Televisión TVporcableiptv" tvg-name="PE | Willax Televisión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Willax_Televisi%C3%B3n.png/275px-Willax_Televisi%C3%B3n.png" group-title="PERU", Willax Televisión
http://daleplay.club:8080/live/listatbsdaleplay22/listatbsdaleplaypararepetircanales/135819.m3u8
#EXTINF:-1 tvg-id="PE | Latina Televisión" tvg-name="PE | Latina Televisión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Logotipo_de_Latina_Televisi%C3%B3n.svg/1200px-Logotipo_de_Latina_Televisi%C3%B3n.svg.png" group-title="PERU", Latina Televisión
http://daleplay.club:8080/live/listatbsdaleplay22/listatbsdaleplaypararepetircanales/135821.m3u8
#EXTINF:-1 tvg-id="PE | Congreso TV" tvg-name="PE | Congreso TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Congreso_TV.png/250px-Congreso_TV.png" group-title="PERU", Congreso TV
https://cdn2.eco.cdn.moderntv.eu/econocable/stream/CANALCONGRESO/40-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DCANALCONGRESO_stream_x7&_cdn_session=1454394699&_cdn_timestamp=1700156503&_cdn_token=702f1062182a2fd893a3114670edd76c1d9530db
#EXTINF:-1 tvg-id="PE | América Televisión" tvg-name="PE | América Televisión" tvg-logo="https://dnqt2wx2urq99.cloudfront.net/ondirectv/LOGOS/Canales/PE/1194.png" group-title="PERU", América Televisión
http://daleplay.club:8080/live/listatbsdaleplay22/listatbsdaleplaypararepetircanales/135793.m3u8
#EXTINF:-1 tvg-id="PE | Panamericana Televisión" tvg-name="PE | Panamericana Televisión" tvg-logo="https://panamericana.pe/imagenes/logo_2020.png?20210916" group-title="PERU", Panamericana Televisión
http://daleplay.club:8080/live/listatbsdaleplay22/listatbsdaleplaypararepetircanales/135827.m3u8
#EXTINF:-1 tvg-id="PE | Exitosa Televisión" tvg-name="PE | Exitosa Televisión" tvg-logo="https://i0.wp.com/exitosanoticias.pe/v1/wp-content/uploads/2021/01/LOGO-EXITOSA-ROJO.png" group-title="PERU", Exitosa Televisión
http://daleplay.club:8080/live/listatbsdaleplay22/listatbsdaleplaypararepetircanales/312787.m3u8
#EXTINF:-1 tvg-id="PE | TV Perú" tvg-name="PE | TV Perú" tvg-logo="https://www.tvperu.gob.pe/sites/all/themes/stability/images/logo.png" group-title="PERU", TV Perú
http://daleplay.club:8080/live/listatbsdaleplay22/listatbsdaleplaypararepetircanales/135833.m3u8
#EXTINF:-1 tvg-id="PE | Conectad2 TV" tvg-name="PE | Conectad2 TV" tvg-logo="https://conecta2peru.com/wp-content/uploads/2020/04/logo.png" group-title="PERU", Conectad2 Televisión
http://190.187.154.156:8000/play/CONECTA2/index.m3u8
#EXTINF:-1 tvg-id="PE | Andina Televisión" tvg-name="PE | Andina Televisión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/ATV_logo_2020.png/1200px-ATV_logo_2020.png" group-title="PERU", ATV
https://d3krdjs7is1y42.cloudfront.net/ATVpe/df13ed57843877b21ad969184ab6888f.sdp/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Tele Lima" tvg-name="PE | Tele Lima" tvg-logo="https://pbs.twimg.com/media/FwOtdL0XoAAV01H?format=png&name=small" group-title="PERU", Tele Lima
https://ott1.hdlatam.tv/live/Telelima/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Viva TV" tvg-name="PE | Viva TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/PyW6vij-.jpg/175px-PyW6vij-.jpg" group-title="PERU", Viva TV
http://191.97.60.193:10000/play/a00p/index.m3u8
#EXTINF:-1 tvg-id="PE | USMP TV" tvg-name="PE | USMP TV" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/8/8d/USMP_TV_2017.svg/revision/latest/scale-to-width-down/56?cb=20210504214359&path-prefix=es" group-title="PERU", USMP TV
https://cdn3.eco.cdn.moderntv.eu/econocable/stream/USMPTV/40-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DUSMPTV_stream_61&_cdn_session=1454396635&_cdn_timestamp=1700156535&_cdn_token=c78d5578189ca258b63fedb10e7a185e92000f73
#EXTINF:-1 tvg-id="PE | Global Televisión" tvg-name="PE | Global Televisión" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMObN_3dPu0x6ipIMnQiPhMsWdYVDq5ZXCPA68_3m2KC_k9CT4VpttLSvI7f-mzLYi7w8&usqp=CAU" group-title="PERU", Global Televisión
http://daleplay.club:8080/live/listatbsdaleplay22/listatbsdaleplaypararepetircanales/135826.m3u8
#EXTINF:-1 tvg-id="PE | Like TV" tvg-name="PE | Like TV" tvg-logo="https://pbs.twimg.com/media/F6eCd9qWEAANnK5?format=png&name=240x240" group-title="PERU", Like TV
https://ott1.hdlatam.tv/live/fuegotv/playlist.m3u8
#EXTINF:-1 tvg-id="PE | La Tele" tvg-name="PE | La Tele" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LaTele_Per%C3%BA_2018_Logo.png/400px-LaTele_Per%C3%BA_2018_Logo.png" group-title="PERU", La Tele
http://187.102.208.108:50001/play/a043/index.m3u8
#EXTINF:-1 tvg-id="PE | PBO TV" tvg-name="PE | PBO TV" tvg-logo="https://pboradio.minegocio21.com/wp-content/uploads/2020/10/logo278.jpg" group-title="PERU", PBO TV
http://daleplay.club:8080/live/listatbsdaleplay22/listatbsdaleplaypararepetircanales/312821.m3u8
#EXTINF:-1 tvg-id="PE | Andina Televisión Plus" tvg-name="PE | Andina Televisión Plus" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/ATV%2B_logo_2020.png/175px-ATV%2B_logo_2020.png" group-title="PERU", ATV +
https://d3krdjs7is1y42.cloudfront.net/ATVmas/74ee4169b59e6f987ae3d77317309109.sdp/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Andina Televisión Sur" tvg-name="PE | Andina Televisión Sur" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ATV_Sur_-_2018_logo_%28final%29.png/185px-ATV_Sur_-_2018_logo_%28final%29.png" group-title="PERU", ATV Sur
https://d3krdjs7is1y42.cloudfront.net/ATVSur/f05b236d4a4d43b3987d6f5ed5686d6e.sdp/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Nativa TV" tvg-name="PE | Nativa TV" tvg-logo="https://ntv.pe/wp-content/uploads/2022/05/LOGO-NATIVA-RETINA-300x99.png" group-title="PERU", Nativa Televisión
https://ntv.pe/salida/nativa.m3u8
#EXTINF:-1 tvg-id="PE | Vinilos TV" tvg-name="PE | Vinilos TV" tvg-logo="https://playmax.tv/wp-content/uploads/2023/05/vinilostv-bn.png" group-title="LOCALES", Vinilos TV
https://live.obslivestream.com/controversiatv/index.m3u8
#EXTINF:-1 tvg-id="PE | Moyobamba Televisión" tvg-name="PE | Moyobamba Televisión" tvg-logo="https://pbs.twimg.com/media/F-c9_loWcAAiEOL?format=png&name=small" group-title="LOCALES", Moyobamba Televisión
https://live.obslivestream.com/mtv/index.m3u8
#EXTINF:-1 tvg-id="PE | Planeta TV" tvg-name="PE | Planeta TV" tvg-logo="https://moyobamba.com/wp-content/uploads/2021/06/LOGO-PLANETA-HD.png" group-title="LOCALES", Planeta TV
https://live.obslivestream.com/planetatv/index.m3u8
#EXTINF:-1 tvg-id="PE | Radio Selva TV" tvg-name="PE | Radio Selva TV" tvg-logo="https://pbs.twimg.com/media/FjqTml3XEAIyjNN?format=png&name=small" group-title="LOCALES", Radio Selva Televisión
https://live.obslivestream.com/selvatv/index.m3u8
#EXTINF:-1 tvg-id="PE | Atmósfera TV" tvg-name="PE | Atmósfera TV" tvg-logo="https://i0.wp.com/plugmedia.co/play/wp-content/uploads/2023/04/ATMOSFERA-LOGO.png?resize=300%2C79&ssl=1" group-title="LOCALES", Atmósfera Televisión
https://castv10.plugstreaming.com:19360/atmosferatv/atmosferatv.m3u8
#EXTINF:-1 tvg-id="PE | Autentica TV" tvg-name="PE | Autentica TV" tvg-logo="https://autenticatv.pe/wp-content/uploads/elementor/thumbs/logo-web-p0scrodaccuo3azseya6goo9amqk8hdut43cbpqb5s.png" group-title="LOCALES", Auténtica Televisión
https://live.obslivestream.com/autenticatvmux/index.m3u8
#EXTINF:-1 tvg-id="PE | Mas 1 Televisión" tvg-name="PE | Mas 1 Televisión" tvg-logo="https://pbs.twimg.com/media/FcvG9o4XkAA0g8v?format=png&name=240x240" group-title="LOCALES", Mas 1 Televisión
https://live.obslivestream.com/mas1/index.m3u8
#EXTINF:-1 tvg-id="PE | Genios TV" tvg-name="PE | Genios TV" tvg-logo="https://geniostv.pe/wp-content/uploads/elementor/thumbs/logo1-owwv8s2bj3n5pt0mp3hyr19gl2fgmiryif81auhse8.png" group-title="LOCALES", Genios Televisión
https://live.obslivestream.com/geniostvmux/index.m3u8
#EXTINF:-1 tvg-id="PE | CR TV" tvg-name="PE | CR TV" tvg-logo="https://crtv.pe/wp-content/uploads/2020/08/LOGO-CR.png" group-title="LOCALES", CR Televisión
https://live.obslivestream.com/crtvmux/index.m3u8
#EXTINF:-1 tvg-id="PE | W Televisión" tvg-name="PE | W Televisión" tvg-logo="https://playmax.tv/wp-content/uploads/2022/11/OKLO.png" group-title="LOCALES", W Televisión
https://live.obslivestream.com/wtv/index.m3u8
#EXTINF:-1 tvg-id="PE | Mayo Televisión" tvg-name="PE | Mayo Televisión" tvg-logo="https://pbs.twimg.com/media/FmnVo8KX0AY3PZ7?format=png&name=900x900" group-title="LOCALES", Mayo Televisión
https://live.obslivestream.com/mayotv/index.m3u8
#EXTINF:-1 tvg-id="PE | VZ TV" tvg-name="PE | VZ TV" tvg-logo="https://moyobamba.com/wp-content/uploads/2021/02/vz-nuevo.png" group-title="LOCALES", VZ Televisión
https://live.obslivestream.com/vztv/index.m3u8
#EXTINF:-1 tvg-id="PE | Red Digital TV" tvg-name="PE | Red Digital TV" tvg-logo="https://playmax.tv/wp-content/uploads/2023/02/red-digitatvl.png" group-title="LOCALES", Red Digital TV
https://live.obslivestream.com/reddigital/index.m3u8
#EXTINF:-1 tvg-id="PE | Cumo TV" tvg-name="PE | Cumo TV" tvg-logo="https://pbs.twimg.com/media/F68ylFIW0AAVofQ?format=png&name=360x360" group-title="LOCALES", Cumo TV || Moyobamba
https://live.obslivestream.com/cumo/index.m3u8
#EXTINF:-1 tvg-id="PE | Sanjuanera TV" tvg-name="PE | Sanjuanera TV" tvg-logo="http://tv.10dailythings.com/images/channels/PE/sanjuaneratv-1080p-not-247/normal.png" group-title="LOCALES", Sanjuanera Televisión
https://live.obslivestream.com/sanjuanera/index.m3u8
#EXTINF:-1 tvg-id="PE | Ok Teve" tvg-name="PE | Ok Teve" tvg-logo="https://playmax.tv/wp-content/uploads/2022/11/oktv.png" group-title="PROVINCIALES", OK Televisión
https://live.obslivestream.com/oktv/video.m3u8?token=Bk-DXAXulO1OV0
#EXTINF:-1 tvg-id="PE | Vía Alto Mayo TV" tvg-name="PE | Vía Alto Mayo TV" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqOFVbZI_DEQWBcj9Fjt3OpP7xILbtOuEgaw&usqp=CAU" group-title="PROVINCIALES", Vía Alto Mayo Televisión
https://live.obslivestream.com/viaaltomayomux/index.m3u8
#EXTINF:-1 tvg-id="PE | Nor Selva TV" tvg-name="PE | Nor Selva TV" tvg-logo="https://play-lh.googleusercontent.com/w6OBzswjSQyeDBwl6z2J5pGiQjuHH3JcmLgXVxGf68WUMocekssnBW_VAZpOdMVee34=s180-rw" group-title="PROVINCIALES", Nor Selva Televisión
https://live.obslivestream.com/norselvatv/index.m3u8
#EXTINF:-1 tvg-id="PE | California TV" tvg-name="PE | California TV" tvg-logo="https://play-lh.googleusercontent.com/j7Z_mZYKpqbvJ_vvMoJ7qLgsJJmGO_Y8UKif6UOGllo-FpyJUbfqJz11tTKlPp5O2Jc=w1024-h500" group-title="PROVINCIALES", California TV
https://vdo.grupolimalive.com:3576/live/californiatvlive.m3u8
#EXTINF:-1 tvg-id="PE | Antares TV Tarapoto" tvg-name="PE | Antares TV Tarapoto" tvg-logo="https://www.coolstreaming.us/img/ch/image88527916465.jpg" group-title="PROVINCIALES", Antares Televisión
https://5c3fb01839654.streamlock.net:1963/iptvantares/liveantarestv/playlist.m3u8
#EXTINF:-1 tvg-id="PE | TV Tarapoto" tvg-name="PE | TV Tarapoto" tvg-logo="https://www.televisiontarapoto.pe/wp-content/uploads/2019/05/logo_tv_tarapoto.png" group-title="PROVINCIALES", Televisión Tarapoto
https://ott1.hdlatam.tv/live_abr/webtvTarapotoPe/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Master TV" tvg-name="PE | Master TV" tvg-logo="https://mastertvradio.com/img/logo.png" group-title="PROVINCIALES", Master Televisión
https://tv.ondadigital.pe:1936/master/master/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Via Televisión" tvg-name="PE | Via Televisión" tvg-logo="https://viatelevision.pe/wp-content/uploads/2021/11/logo-retina.png" group-title="PROVINCIALES", Vía Televisión
https://ott1.hdlatam.tv/live_abr/VIATV/playlist.m3u8
#EXTINF:-1 tvg-id="PE | TV Tropical" tvg-name="PE | TV Tropical" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILk-jY1zv90_cln_aHQVRYRO2VEvi7tDWxSaym1za11jp-36P7vBbdIQKJbWOEj9Na4Y&usqp=CAU" group-title="PROVINCIALES", TV Tropical
https://videoserver.tmcreativos.com:19360/raditropical/raditropical.m3u8
#EXTINF:-1 tvg-id="PE | Innova TV" tvg-name="PE | Innova TV" tvg-logo="https://play-lh.googleusercontent.com/ZKYIGUiCEX1iPZmVTTjLyAwHPZCXmL60bkaTw1M5tg2ErI7yb21-J20nCTNJTTHRnwY=w2560-h1440-rw" group-title="PROVINCIALES", Innova TV
http://200.48.184.156:1935/innovatv/innovatv/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Millenium TV" tvg-name="PE | Millenium TV" tvg-logo="https://play-lh.googleusercontent.com/uTetNKtedjE1JM0TYr8bL4accz8BdnDHPHqwM7d35DpnOTMV2Oz7ZJtIGb5vUW6d3ZSt=w240-h480-rw" group-title="PROVINCIALES", Millenium TV
https://videoserver.tmcreativos.com:19360/nqvnhujhrx/nqvnhujhrx.m3u8
#EXTINF:-1 tvg-id="PE | Radio TV Juanjui" tvg-name="PE | Radio TV Juanjui" tvg-logo="https://pbs.twimg.com/media/Fa_cDYIWAAAYv1w?format=png&name=small" group-title="PROVINCIALES", Radio TV Juanjui
https://tv1.mediacp.eu:3573/live/qpufhwtflive.m3u8
#EXTINF:-1 tvg-id="PE | Uranio TV" tvg-name="PE | Uranio TV" tvg-logo="https://yt3.ggpht.com/DA2asU0w91KyOcHQWUFEtBECgv-NG1pUtRrWw78Negq5uH6gEeLaaxTJkxe8f9CNTDHZJHLfpJM=s88-c-k-c0x00ffffff-no-rj" group-title="REGIONALES DE LA SELVA", Uranio TV
https://live.obslivestream.com/uraniotv/index.m3u8
#EXTINF:-1 tvg-id="PE | Super Canal" tvg-name="PE | Super Canal" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBbbpAhucUTGIFd_UnDjQGehvwk_loizSk7h_Oia3GXRkBhMj7WYy04cn0S9UV-63PdL4&usqp=CAU" group-title="REGIONALES DE LA SELVA", Super Canal Televisión
https://live.obslivestream.com/supercanal/index.m3u8
#EXTINF:-1 tvg-id="PE | RTV Total" tvg-name="PE | RTV Total" tvg-logo="https://static.mytuner.mobi/media/tvos_radios/jktwc449tdgh.png" group-title="REGIONALES DE LA SELVA", RTV Total
https://7.innovatestream.pe:19360/rtvtotal/rtvtotal.m3u8
#EXTINF:-1 tvg-id="PE | Radio Televisión Oriente" tvg-name="PE | Radio Televisión Oriente" tvg-logo="https://www.planetaradios.com/content/radios_fm/bo49.png" group-title="REGIONALES DE LA SELVA", Radio Televisión Oriente
https://vdo.grupolimalive.com:3073/live/orientetvlive.m3u8
#EXTINF:-1 tvg-id="PE | Telecolor" tvg-name="PE | Telecolor" tvg-logo="https://telecolortv.pe/wp-content/uploads/2022/01/inicio_app.png" group-title="REGIONALES DE LA SELVA", Telecolor
https://live.obslivestream.com/telecolormux/index.m3u8
#EXTINF:-1 tvg-id="PE | RN Noticias" tvg-name="PE | RN Noticias" tvg-logo="https://pbs.twimg.com/media/FVzx2JOWAAE1My1?format=png&name=small" group-title="REGIONALES DE LA SELVA", RN Televisión
https://videoserver.tmcreativos.com:19360/rnyurimaguas/rnyurimaguas.m3u8
#EXTINF:-1 tvg-id="PE | Doble AA TV" tvg-name="PE | Doble AA TV" tvg-logo="https://dobleaamedios.com/recursos/logo.png" group-title="REGIONALES DE LA SELVA", Doble AA TV
https://videoserver.tmcreativos.com:19360/yvmgbdpqmp/yvmgbdpqmp.m3u8
#EXTINF:-1 tvg-id="PE | TV 14" tvg-name="PE | TV 14" tvg-logo="https://play-lh.googleusercontent.com/a4V4qDyYOs_1Ws8nqkWVcrIxvnv1oJcvzV8vgdNxDAncVpZGYWM2UeXAuOZhqDowv4k=w240-h480-rw" group-title="REGIONALES DE LA SELVA", TV 14
https://inliveserver.com:1936/19026/19026/playlist.m3u8
#EXTINF:-1 tvg-id="PE | CNC Digital" tvg-name="PE | CNC Digital" tvg-logo="https://play-lh.googleusercontent.com/a5x8VaDVvMskcJ-FQvcc_JYISud83WBb42g7opg5XuNCVPiIUBFuDuLSBFg2aN7AaQ=w240-h480-rw" group-title="REGIONALES DE LA SELVA", CNC Digital
https://ott1.hdlatam.tv/live/CNCdigitallive/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Telecanal 49" tvg-name="PE | Telecanal 49" tvg-logo="https://telecanalperu.com/wp-content/uploads/2023/04/tele-chiki.png" group-title="REGIONALES DE LA SELVA", Telecanal 49
https://vdo.grupolimalive.com:3927/live/milleniumlive.m3u8
#EXTINF:-1 tvg-id="PE | Oriental TV" tvg-name="PE | Oriental TV" tvg-logo="http://tv.10dailythings.com/images/channels/PE/oriental-tv-21-pucallpa-720p-not-247/normal.png" group-title="REGIONALES DE LA SELVA", Oriental TV
https://vdo.grupolimalive.com:3467/live/orientaltvlive.m3u8
#EXTINF:-1 tvg-id="PE | Pucallpa Televisión" tvg-name="PE | Pucallpa Televisión" tvg-logo="https://play-lh.googleusercontent.com/XKSBWGFeJZmoKEmTVbPjhDUS5GGmehWoBXv6xZYlFwCDCLMgMz8jLvOc_S6Kh82cWg=w240-h480-rw" group-title="REGIONALES DE LA SELVA", Pucallpa Televisión
https://vdo.panelstreaming.live:3596/live/ptvlive.m3u8
#EXTINF:-1 tvg-id="PE | Ucayali TV" tvg-name="PE | Ucayali TV" tvg-logo="https://pbs.twimg.com/media/FbX4GOdXoAAtuar?format=png&name=small" group-title="REGIONALES DE LA SELVA", Ucayali TV
http://stream.fuegoplayer.com/ucayalitv/index.m3u8
#EXTINF:-1 tvg-id="PE | BNB Digital TV" tvg-name="PE | BNB Digital TV" tvg-logo="https://play-lh.googleusercontent.com/gx5e8vjrYke4MNqP5kJANUoxqjZnYe0Bt6b-GfPrDr8cUcfeJRhiJIlQ7OMEhdrrp01W=w240-h480-rw" group-title="REGIONALES DE LA SELVA", BNB Digital TV
https://ott1.hdlatam.tv/live/BNB/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Top TV" tvg-name="PE | Top TV" tvg-logo="https://www.toptvaguaytia.com/wp-content/uploads/2020/12/toplogo.jpg" group-title="REGIONALES DE LA SELVA", Top TV
https://tvdatta.com:3084/live/toptvaguaytialive.m3u8
#EXTINF:-1 tvg-id="CO | RCN Novelas" tvg-name="CO | RCN Novelas" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/RCN_Novelas_logo_2019.png/205px-RCN_Novelas_logo_2019.png" group-title="NOVELAS", RCN Novelas
http://170.82.37.21:8000/play/a025/index.m3u8
#EXTINF:-1 tvg-id="USA | Pasiones" tvg-name="USA | Pasiones" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLQgm8S3Mil5Ktp0FUdBBNl7hfDdzPq3eIrNKWgy=s900-c-k-c0x00ffffff-no-rj" group-title="NOVELAS", Pasiones
http://190.187.154.156:8000/play/a05u/index.m3u8
#EXTINF:-1 tvg-id="TR | Kanal D Drama" tvg-name="TR | Kanal D Drama" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/8/89/Kanal_D_Drama_%28Latin_America%29.png/revision/latest/scale-to-width-down/200?cb=20200317052444&path-prefix=es" group-title="NOVELAS", Kanal D Drama
http://190.187.154.156:8000/play/a06i/index.m3u8
#EXTINF:-1 tvg-id="USA | TNT Novelas" tvg-name="USA | TNT Novelas" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/e/e6/TNT_Novelas_logo_2023.svg/revision/latest/scale-to-width-down/150?cb=20230621193156" group-title="NOVELAS", TNT Novelas
http://170.82.37.21:8000/play/a037/index.m3u8
#EXTINF:-1 tvg-id="MX | Azteca Corazón" tvg-name="MX | Azteca Corazón" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/TV_Azteca_Coraz%C3%B3n_logo.svg/200px-TV_Azteca_Coraz%C3%B3n_logo.svg.png" group-title="NOVELAS", Azteca Corazón
http://livex.pop-app.live/s4n/poplive/ch570/playlist.m3u8
#EXTINF:-1 tvg-id="MX | Tlnovelas Latinoamérica" tvg-name="MX | Tlnovelas Latinoamérica" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/6/62/Tlnovelas_logo_2021.png" group-title="NOVELAS", Tlnovelas Latinoamérica
http://daleplay.club:8080/listatbsdaleplay22/listatbsdaleplaypararepetircanales/63200
#EXTINF:-1 tvg-id="MX | Las Estrellas Latinoamérica" tvg-name="MX | Las Estrellas Latinoamérica" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Las_Estrellas.svg/180px-Las_Estrellas.svg.png" group-title="INTERNACIONALES", Las Estrellas Latinoamérica
http://187.102.208.108:50001/play/a01t/index.m3u8
#EXTINF:-1 tvg-id="USA | Univisión Latinoamérica" tvg-name="USA | Univisión Latinoamérica" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Logo_Univision_2019.svg/153px-Logo_Univision_2019.svg.png" group-title="INTERNACIONALES", Univisión Latinoamérica
http://170.82.37.21:8000/play/a02x/index.m3u8
#EXTINF:-1 tvg-id="USA | Telemundo Internacional" tvg-name="USA | Telemundo Internacional" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Telemundo_logo_2018.svg/150px-Telemundo_logo_2018.svg.png" group-title="INTERNACIONALES", Telemundo Internacional
https://cdn1.eco.cdn.moderntv.eu/econocable/stream/TELEMUNDO/20-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DTELEMUNDO_stream_fp&_cdn_session=1454398083&_cdn_timestamp=1700156563&_cdn_token=b91589050fe08bc725b050159074c0fec45e0f1d
#EXTINF:-1 tvg-id="USA | Telemundo Internacional Señal 2" tvg-name="USA | Telemundo Internacional Señal 2" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Telemundo_logo_2018.svg/150px-Telemundo_logo_2018.svg.png" group-title="INTERNACIONALES", Telemundo Internacional Señal 2
http://170.82.37.21:8000/play/a02r/index.m3u8
#EXTINF:-1 tvg-id="USA | ID" tvg-name="USA | ID" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/InvestigationDiscoveryLogo2020.svg/125px-InvestigationDiscoveryLogo2020.svg.png" group-title="DOCUMENTALES Y SERIES", Investigation Discovery
http://livex.pop-app.live/s4n/poplive/ch525/playlist.m3u8
#EXTINF:-1 tvg-id="USA | A&E" tvg-name="USA | A&E" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/A%26E_Network_logo.svg/125px-A%26E_Network_logo.svg.png" group-title="DOCUMENTALES Y SERIES", A&E
http://190.187.154.156:8000/play/a05n/index.m3u8
#EXTINF:-1 tvg-id="USA | AMC" tvg-name="USA | AMC" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/AMC_logo_2019.svg/150px-AMC_logo_2019.svg.png" group-title="PELICULAS Y SERIES", AMC
http://190.187.154.156:8000/play/a06x/index.m3u8
#EXTINF:-1 tvg-id="USA | Space" tvg-name="USA | Space" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/SpaceLogo.svg/189px-SpaceLogo.svg.png" group-title="PELICULAS Y SERIES", Space
http://170.82.37.21:8000/play/a030/index.m3u8
#EXTINF:-1 tvg-id="USA | AXN" tvg-name="USA | AXN" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/AXN_logo_%282015%29.svg/150px-AXN_logo_%282015%29.svg.png" group-title="PELICULAS Y SERIES", AXN
http://190.187.154.156:8000/play/a069/index.m3u8
#EXTINF:-1 tvg-id="MX | Azteca Cinema" tvg-name="MX | Azteca Cinema" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/TV_Azteca_Cinema_logo.svg/200px-TV_Azteca_Cinema_logo.svg.png" group-title="PELICULAS Y SERIES", Azteca Cinema
http://190.187.154.156:8000/play/a0di/index.m3u8
#EXTINF:-1 tvg-id="USA | Cinelife" tvg-name="USA | Cinelife" tvg-logo="https://cinelife.com/wp-content/uploads/2020/04/cinelife_logo.png" group-title="PELICULAS Y SERIES", Cinelife
https://magnolia-cinelife.amagi.tv/amRdirect/did=&gdpr=&lat=&lon=&us_privacy=&consent=&dnt=/hls/amagi_hls_data_magnoliaA-cinelife-oando/CDN/playlist.m3u8
#EXTINF:-1 tvg-id="USA | Cinecanal" tvg-name="USA | Cinecanal" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/CinecanalLA.png/150px-CinecanalLA.png" group-title="PELICULAS Y SERIES", Cinecanal
http://190.187.154.156:8000/play/a062/index.m3u8
#EXTINF:-1 tvg-id="USA | Paramount Network" tvg-name="USA | Paramount Network" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Paramount_Network.svg/150px-Paramount_Network.svg.png" group-title="PELICULAS Y SERIES", Paramount Network
http://190.187.154.156:8000/play/a06n/index.m3u8
#EXTINF:-1 tvg-id="USA | Sony Channel" tvg-name="USA | Sony Channel" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Sony_Channel_Logo.png/120px-Sony_Channel_Logo.png" group-title="PELICULAS Y SERIES", Sony Channel
http://livex.pop-app.live/s4n/poplive/ch506/playlist.m3u8
#EXTINF:-1 tvg-id="USA | Sony Movies" tvg-name="USA | Sony Movies" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Sony_Movies_Logo.svg/120px-Sony_Movies_Logo.svg.png" group-title="PELICULAS Y SERIES", Sony Movies
http://170.82.37.21:8000/play/a02y/index.m3u8
#EXTINF:-1 tvg-id="CL | MX Family" tvg-name="CL | MX Family" tvg-logo="https://miplay.cl/wp-content/uploads/2022/01/MX-FAMILY-FONDO-2-300x169.jpg" group-title="PELICULAS Y SERIES", MX Family
https://marine2.miplay.cl/mxfamily/playlist.m3u8
#EXTINF:-1 tvg-id="CL | MX Classic" tvg-name="CL | MX Classic" tvg-logo="https://miplay.cl/wp-content/uploads/2022/01/MX-CLASIC-FONDO-2-300x169.jpg" group-title="PELICULAS Y SERIES", MX Classic
https://marine2.miplay.cl/mxclassic/playlist.m3u8
#EXTINF:-1 tvg-id="CL | MX Prime" tvg-name="CL | MX Prime" tvg-logo="https://miplay.cl/wp-content/uploads/2022/01/MX-FONDO-2-300x169.jpg" group-title="PELICULAS Y SERIES", MX Prime
https://marine2.miplay.cl/mxprime/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Old" tvg-name="CL | Old" tvg-logo="https://miplay.cl/wp-content/uploads/2022/01/OLD-FONDO-2-300x169.jpg" group-title="PELICULAS Y SERIES", Old
https://marine2.miplay.cl/old/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Classic +" tvg-name="CL | Classic +" tvg-logo="https://pbs.twimg.com/media/FvYjfCkWIAIvMGW?format=png&name=240x240" group-title="PELICULAS Y SERIES", Classic +
http://45.173.201.50:4000/play/a01t
#EXTINF:-1 tvg-id="MX | De Película" tvg-name="MX | De Película" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/DPel%C3%ADcula_2021.svg/250px-DPel%C3%ADcula_2021.svg.png" group-title="PELICULAS Y SERIES", De Película
http://170.82.37.21:8000/play/a028/index.m3u8
#EXTINF:-1 tvg-id="CL | Origen TV" tvg-name="CL | Origen TV" tvg-logo="https://www.origentv.cl/wp-content/uploads/2023/08/LOGO-ROJO_0002_LOGO-tv2-1024x552.png" group-title="PELICULAS Y SERIES", Origen TV
https://tv.streaming-chile.com:1936/origentv2/origentv2/playlist.m3u8
#EXTINF:-1 tvg-id="MX | Claro Cinema" tvg-name="MX | Claro Cinema" tvg-logo="https://trademarks.justia.com/media/og_image.php?serial=86830508" group-title="PELICULAS Y SERIES", Claro Cinema
http://45.228.232.219:16000/play/a0na/index.m3u8
#EXTINF:-1 tvg-id="USA | TCM" tvg-name="USA | TCM" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/TCM_Latam_logo.svg/120px-TCM_Latam_logo.svg.png" group-title="PELICULAS Y SERIES", TCM
http://170.82.37.21:8000/play/a038/index.m3u8
#EXTINF:-1 tvg-id="MX | Filmex Clásico TV" tvg-name="MX | Filmex Clásico TV" tvg-logo="https://pbs.twimg.com/media/FuZ3-_VWYAU2ddp?format=png&name=240x240" group-title="PELICULAS Y SERIES", Filmex Clásico TV
https://vpngratis.win:8443/live/CineMexicano/gsL71cr7Fk/17.m3u8
#EXTINF:-1 tvg-id="MX | Filmex TV" tvg-name="MX | Filmex TV" tvg-logo="https://1.bp.blogspot.com/-DveaPhvYgGM/YSUgaTgHODI/AAAAAAAAENk/lW8SyPJbqd0dB8qYI422v-Da4hJNP8x-ACLcBGAsYHQ/s540/filmex-logoroku.png" group-title="PELICULAS Y SERIES", Filmex TV
https://vpngratis.win:8443/live/CineMexicano/gsL71cr7Fk/20.m3u8
#EXTINF:-1 tvg-id="USA | Studio Universal" tvg-name="USA | Studio Universal" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/StudioUniversal2016.png/175px-StudioUniversal2016.png" group-title="PELICULAS Y SERIES", Studio Universal
http://190.187.154.156:8000/play/a063/index.m3u8
#EXTINF:-1 tvg-id="USA | USA Network" tvg-name="USA | USA Network" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/USA_Network_logo_%282016%29.svg/150px-USA_Network_logo_%282016%29.svg.png" group-title="PELICULAS Y SERIES", USA Network
https://cdn1.eco.cdn.moderntv.eu/econocable/stream/USA/40-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DUSA_stream_97&_cdn_session=1451306355&_cdn_timestamp=1700109524&_cdn_token=a9c6ef0c009a2b994de00cb9c63f3fb7ceb67094
#EXTINF:-1 tvg-id="ESP | A3series" tvg-name="ESP | A3series" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Atreseries_2020_logo.svg/125px-Atreseries_2020_logo.svg.png" group-title="PELICULAS Y SERIES", Atreseries
http://170.82.37.21:8000/play/a01k/index.m3u8
#EXTINF:-1 tvg-id="USA | Warner Channel" tvg-name="USA | Warner Channel" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Warner2018LA.png/125px-Warner2018LA.png" group-title="PELICULAS Y SERIES", Warner Channel
http://187.102.208.108:50001/play/a004/index.m3u8
#EXTINF:-1 tvg-id="USA | Tu Cine" tvg-name="USA | Tu Cine" tvg-logo="https://assets.cdn.olympusat.com/wp-content/uploads/2020/06/TuCine_295x98.png" group-title="PELICULAS Y SERIES", Tu Cine
https://tucine-plex.amagi.tv/TuCine-xumo/master_6.m3u8
#EXTINF:-1 tvg-id="USA | Cine Real" tvg-name="USA | Cine Real" tvg-logo="https://assets.cdn.olympusat.com/wp-content/uploads/2020/05/cinereal.png" group-title="PELICULAS Y SERIES", Cine Real
https://cinereal-plex.amagi.tv/CineReal/master_6.m3u8
#EXTINF:-1 tvg-id="USA | Europa Europa" tvg-name="USA | Europa Europa" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/EUROPAEUROPALOGO2016.png/120px-EUROPAEUROPALOGO2016.png" group-title="PELICULAS Y SERIES", Europa Europa
http://170.82.37.21:8000/play/a02b/index.m3u8
#EXTINF:-1 tvg-id="USA | Eurochannel" tvg-name="USA | Eurochannel" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Logo_Eurochannel.png/150px-Logo_Eurochannel.png" group-title="PELICULAS Y SERIES", Eurochannel
http://45.5.117.182:8000/play/a0gd/index.m3u8
#EXTINF:-1 tvg-id="USA | I.Sat" tvg-name="USA | I.Sat" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/I.Sat_logo.svg/150px-I.Sat_logo.svg.png" group-title="PELICULAS Y SERIES", I.Sat
http://livex.pop-app.live/s4n/poplive/ch511/playlist.m3u8
#EXTINF:-1 tvg-id="USA | Star Channel" tvg-name="USA | Star Channel" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Star_Channel_2020.svg/135px-Star_Channel_2020.svg.png" group-title="PELICULAS Y SERIES", Star Channel
http://190.187.154.156:8000/play/a066/index.m3u8
#EXTINF:-1 tvg-id="USA | FX" tvg-name="USA | FX" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/FX_International_logo.svg/125px-FX_International_logo.svg.png" group-title="PELICULAS Y SERIES", FX
http://190.187.154.156:8000/play/a06e/index.m3u8
#EXTINF:-1 tvg-id="USA | Clover Channel" tvg-name="USA | Clover Channel" tvg-logo="https://digitaltv.prensariozone.com/wp-content/uploads/2022/01/Captura-de-pantalla-2022-01-13-171716.png" group-title="PELICULAS Y SERIES", Clover Channel
http://190.187.154.156:8000/play/a06t/index.m3u8
#EXTINF:-1 tvg-id="USA | Universal TV" tvg-name="USA | Universal TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Universal_TV_logo.svg/167px-Universal_TV_logo.svg.png" group-title="PELICULAS Y SERIES", Universal TV
http://190.187.154.156:8000/play/a06f/index.m3u8
#EXTINF:-1 tvg-id="USA | Universal Crime" tvg-name="USA | Universal Crime" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/universal_crime-mediano.png" group-title="PELICULAS Y SERIES", Universal Crime
http://187.102.208.108:50001/play/a03b/index.m3u8
#EXTINF:-1 tvg-id="USA | Universal Cinema" tvg-name="USA | Universal Cinema" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/universal_cinema-mediano.png" group-title="PELICULAS Y SERIES", Universal Cinema
http://187.102.208.108:50001/play/a03c/index.m3u8
#EXTINF:-1 tvg-id="USA | Universal Reality" tvg-name="USA | Universal Reality" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/universal_reality-mediano.png" group-title="PELICULAS Y SERIES", Universal Reality
http://187.102.208.108:50001/play/a03f/index.m3u8
#EXTINF:-1 tvg-id="USA | Universal Comedy" tvg-name="USA | Universal Comedy" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/e/eb/Universal_Comedy_2021.png/revision/latest/scale-to-width-down/250?cb=20220102015318&path-prefix=es" group-title="PELICULAS Y SERIES", Universal Comedy
http://187.102.208.108:50001/play/a03g/index.m3u8
#EXTINF:-1 tvg-id="USA | Universal Premiere" tvg-name="USA | Universal Premiere" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/universal_premiere-mediano.png" group-title="PELICULAS Y SERIES", 107 | Universal Premiere
http://187.102.208.108:50001/play/a03d/index.m3u8
#EXTINF:-1 tvg-id="USA | Universal Premiere Oeste" tvg-name="USA | Universal Premiere Oeste" tvg-logo="https://forounivers.com/uploads/monthly_2021_10/large.UNIVERSAL_PREMIERE.png.ec2deb44f4b6020f6b11233389b1c7fd.png" group-title="PELICULAS Y SERIES", 107.2 | Universal Premiere Oeste
http://45.5.117.182:8000/play/a0ih/index.m3u8
#EXTINF:-1 tvg-id="USA | Cinemax" tvg-name="USA | Cinemax" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Cinemax_%28Yellow%29.svg/175px-Cinemax_%28Yellow%29.svg.png" group-title="PELICULAS Y SERIES", Cinemax
http://45.5.117.182:8000/play/a0j6/index.m3u8
#EXTINF:-1 tvg-id="USA | HBO" tvg-name="USA | HBO" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HBO_logo.svg/125px-HBO_logo.svg.png" group-title="PELICULAS Y SERIES", HBO
http://170.82.37.21:8000/play/a02g/index.m3u8
#EXTINF:-1 tvg-id="USA | HBO 2" tvg-name="USA | HBO 2" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/HBO2_logo.svg/149px-HBO2_logo.svg.png" group-title="PELICULAS Y SERIES", HBO 2
http://170.82.37.21:8000/play/a02i/index.m3u8
#EXTINF:-1 tvg-id="USA | HBO+" tvg-name="USA | HBO +" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Logohboplus2019.svg/125px-Logohboplus2019.svg.png" group-title="PELICULAS Y SERIES", HBO +
http://170.82.37.21:8000/play/a02o/index.m3u8
#EXTINF:-1 tvg-id="USA | HBO Family" tvg-name="USA | HBO Family" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/HBO_Family.svg/130px-HBO_Family.svg.png" group-title="PELICULAS Y SERIES", HBO Family
http://livex.pop-app.live/s4n/poplive/ch515/playlist.m3u8
#EXTINF:-1 tvg-id="USA | HBO Xtreme" tvg-name="USA | HBO Xtreme" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/HBO_Xtreme.svg/130px-HBO_Xtreme.svg.png" group-title="PELICULAS Y SERIES", HBO Xtreme
http://170.82.37.21:8000/play/a02k/index.m3u8
#EXTINF:-1 tvg-id="USA | HBO Pop" tvg-name="USA | HBO Pop" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/HBO_Pop.svg/130px-HBO_Pop.svg.png" group-title="PELICULAS Y SERIES", HBO Pop
http://187.102.208.108:50001/play/a007/index.m3u8
#EXTINF:-1 tvg-id="USA | HBO Mundi" tvg-name="USA | HBO Mundi" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/HBO_Mundi.svg/125px-HBO_Mundi.svg.png" group-title="PELICULAS Y SERIES", HBO Mundi
http://200.24.206.132:8000/play/a0de/index.m3u8
#EXTINF:-1 tvg-id="USA | HBO Signature" tvg-name="USA | HBO Signature" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/HBO_Signature.svg/135px-HBO_Signature.svg.png" group-title="PELICULAS Y SERIES", HBO Signature
http://livex.pop-app.live/s4n/poplive/ch517/playlist.m3u8
#EXTINF:-1 tvg-id="USA | TNT" tvg-name="USA | TNT" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/TNT_Logo_2016.svg/115px-TNT_Logo_2016.svg.png" group-title="PELICULAS Y SERIES", TNT
http://170.82.37.21:8000/play/a03a/index.m3u8
#EXTINF:-1 tvg-id="USA | TNT Series" tvg-name="USA | TNT Series" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/TNT_Series_Logo_2016.png/94px-TNT_Series_Logo_2016.png" group-title="PELICULAS Y SERIES", TNT Series
http://livex.pop-app.live/s4n/poplive/ch520/playlist.m3u8
#EXTINF:-1 tvg-id="MX | Cine Latino" tvg-name="MX | Cine Latino" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Cine_Latino_logo.svg/150px-Cine_Latino_logo.svg.png" group-title="PELICULAS Y SERIES", Cine Latino
http://45.5.117.182:8000/play/a0j5/index.m3u8
#EXTINF:-1 tvg-id="MX | Golden" tvg-name="MX | Golden" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Canal_Golden_logo.svg/320px-Canal_Golden_logo.svg.png" group-title="PELICULAS Y SERIES", Golden
http://45.5.117.182:8000/play/a0go/index.m3u8
#EXTINF:-1 tvg-id="MX | Golden Plus" tvg-name="MX | Golden Plus" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/golden_plus-mediano.png" group-title="PELICULAS Y SERIES", Golden Plus
https://linear-410.frequency.stream/dist/vix/410/hls/master/playlist.m3u8
#EXTINF:-1 tvg-id="MX | Golden Premier" tvg-name="MX | Golden Premier" tvg-logo="https://cdn.mitvstatic.com/channels/co_golden-premier-hd_m.png" group-title="PELICULAS Y SERIES", Golden Premier
http://170.82.37.21:8000/play/a02e/index.m3u8
#EXTINF:-1 tvg-id="MX | Golden Premier 2" tvg-name="MX | Golden Premier 2" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/9/90/Golden_Premier_2_2020.png/revision/latest?cb=20201201141739&path-prefix=es" group-title="PELICULAS Y SERIES", Golden Premier 2
http://177.53.153.21:8001/play/a054/index.m3u8
#EXTINF:-1 tvg-id="MX | Multipremier" tvg-name="MX | Multipremier" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Multipremier_logo.svg/150px-Multipremier_logo.svg.png" group-title="PELICULAS Y SERIES", Multipremier
http://187.102.208.108:50001/play/a03l/index.m3u8
#EXTINF:-1 tvg-id="MX | Canal MC" tvg-name="MX | Canal MC" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/MC_logo_2022.png/150px-MC_logo_2022.png" group-title="PELICULAS Y SERIES", Canal MC
http://160.20.165.246:8000/play/a00a/index.m3u8
#EXTINF:-1 tvg-id="MX | Cine Mexicano" tvg-name="MX | Cine Mexicano" tvg-logo="https://www.americatvc.com/administrador/subgrupo/3.png" group-title="PELICULAS Y SERIES", Cine Mexicano
http://177.234.230.226:8010/play/a00e/index.m3u8
#EXTINF:-1 tvg-id="USA | DHE" tvg-name="USA | DHE" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/dhe-mediano.png" group-title="PELICULAS Y SERIES", DHE
http://45.5.117.182:8000/play/a0fs/index.m3u8
#EXTINF:-1 tvg-id="USA | Cine Premium" tvg-name="USA | Cine Premium" tvg-logo="https://www.lyngsat.com/logo/tv/cc/cine-premium.png" group-title="PELICULAS Y SERIES", Cine Premium
http://177.234.230.226:8010/play/a00f/index.m3u8
#EXTINF:-1 tvg-id="USA | Cine Hispano" tvg-name="USA | Cine Hispano" tvg-logo="https://www.lyngsat.com/logo/tv/cc/cine-hispano-us.png" group-title="PELICULAS Y SERIES", Cine Hispano
http://179.189.222.226:8000/play/ch51
#EXTINF:-1 tvg-id="USA | Cine Familiar" tvg-name="USA | Cine Familiar" tvg-logo="https://www.lyngsat.com/logo/tv/cc/cine-familiar.png" group-title="PELICULAS Y SERIES", Cine Familiar
http://179.189.222.226:8000/play/ch52
#EXTINF:-1 tvg-id="USA | FMH Family" tvg-name="USA | FMH Family" tvg-logo="https://www.latincable.pe/images/canales-tv/fmh-family.jpg" group-title="PELICULAS Y SERIES", FMH Family
http://160.20.165.246:8000/play/a01j/index.m3u8
#EXTINF:-1 tvg-id="CO | Cinema +" tvg-name="CO | Cinema +" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Cinema%2B_logo.svg/2560px-Cinema%2B_logo.svg.png" group-title="PELICULAS Y SERIES", Cinema +
http://181.78.8.90:16123/play/ch12a
#EXTINF:-1 tvg-id="CL | Dos Kids" tvg-name="CL | Dos Kids" tvg-logo="https://pbs.twimg.com/media/FnqhNDZWQAg6Q-H?format=png&name=240x240" group-title="INFANTILES", Dos Kids
http://190.110.109.104:52321/play/a00w/index.m3u8
#EXTINF:-1 tvg-id="CL | Animotion" tvg-name="CL | Animotion" tvg-logo="https://pbs.twimg.com/media/FSIH0MSXEAEjBgA?format=jpg&name=240x240" group-title="INFANTILES", Animotion
http://190.110.109.104:52321/play/a016/index.m3u8
#EXTINF:-1 tvg-id="CL | Varied TV" tvg-name="CL | Varied TV" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrQBY8FAi-uiwIRZmNA7yOr1cMK1MRSi8h0Etx0EKfkIR3WEUPxPdNHkNAuNKKLTQ5f0w&usqp=CAU" group-title="INFANTILES", Varied TV
https://6362ca6f1fc28.streamlock.net/8066/8066/playlist.m3u8
#EXTINF:-1 tvg-id="AR | Magic Kids" tvg-name="AR | Magic Kids" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Logomagic96.png/145px-Logomagic96.png" group-title="INFANTILES", Magic Kids
https://magicstream.ddns.net/magicstream/stream.m3u8?WebASTRAL
#EXTINF:-1 tvg-id="AR | Retro Mágico" tvg-name="AR | Retro Mágico" tvg-logo="https://pbs.twimg.com/media/F1IhipWWwAELlB6?format=png&name=900x900" group-title="INFANTILES", Retro Mágico
https://cageu.bozztv.com/ssh101/ssh101/retromagicochnl/playlist.m3u8
#EXTINF:-1 tvg-id="USA | Retro Cartoon" tvg-name="USA | Retro Cartoon" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgVAzhKEkkeyQQOJXImzZwdg9jk55MjA5gQ&usqp=CAU" group-title="INFANTILES", Retro Cartoon
https://stmv1.srvif.com/retrotv/retrotv/playlist-480p.m3u8?PlaylistASTRAL
#EXTINF:-1 tvg-id="USA | Retro Infantil" tvg-name="USA | Retro Infantil" tvg-logo="https://png.pngtree.com/png-clipart/20220119/ourlarge/pngtree-childhood-retro-tv-png-image_4324114.png" group-title="INFANTILES", Retro Infantil
https://stmv1.cnarlatam.com/retroinfantil/retroinfantil/playlist.m3u8
#EXTINF:-1 tvg-id="USA | ZooMoo" tvg-name="USA | ZooMoo" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/ZooMoo_logo.svg/120px-ZooMoo_logo.svg.png" group-title="INFANTILES", ZooMoo
http://170.82.37.21:8000/play/a00o/index.m3u8
#EXTINF:-1 tvg-id="CL | Funbox" tvg-name="CL | Funbox" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/FunBox_TV_logo.svg/120px-FunBox_TV_logo.svg.png" group-title="INFANTILES", Funbox
http://191.97.60.193:10000/play/a02r/index.m3u8
#EXTINF:-1 tvg-id="USA | Dios TV Kids" tvg-name="USA | Dios TV Kids" tvg-logo="https://image.roku.com/developer_channels/prod/02505b330e44a59b5cbbf0b595e757d0dadc776b5c0aec342f53d571c766bc2d.png" group-title="INFANTILES", Dios TV Kids
https://emisoras.hn:8081/diostevekids/index.m3u8
#EXTINF:-1 tvg-id="UY | Latino Kids" tvg-name="UY | Latino Kids" tvg-logo="https://graph.facebook.com/LatinoKidsTvUruguay/picture?width=300&height=300" group-title="INFANTILES", Latino Kids TV
https://6362ca6f1fc28.streamlock.net/8062/8062/playlist.m3u8
#EXTINF:-1 tvg-id="USA | Cartoon Network" tvg-name="USA | Cartoon Network" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/cartoon_network_latinoamerica-mediano.png" group-title="INFANTILES", Cartoon Network
http://190.187.154.156:8000/play/a060/index.m3u8
#EXTINF:-1 tvg-id="USA | Cartoonito" tvg-name="USA | Cartoonito" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Cartoonito_-_Logo_2021.svg/259px-Cartoonito_-_Logo_2021.svg.png" group-title="INFANTILES", Cartoonito
http://livex.pop-app.live/s4n/poplive/ch545/playlist.m3u8
#EXTINF:-1 tvg-id="USA | Tooncast" tvg-name="USA | Tooncast" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tooncast_logo.svg/200px-Tooncast_logo.svg.png" group-title="INFANTILES", Tooncast
http://170.82.37.21:8000/play/a00x/index.m3u8
#EXTINF:-1 tvg-id="PA | Dreiko TV" tvg-name="PA | Dreiko TV" tvg-logo="https://play-lh.googleusercontent.com/MKxancjPSbqrJIaCcndA9s6VkmYrNZC1X4SR7hDaMvJKUMd33qTN6pob2mVkS8Azd2o=w240-h480-rw" group-title="INFANTILES", Dreiko TV
https://cloudvideo.servers10.com:8081/8138/index.m3u8
#EXTINF:-1 tvg-id="USA | BabyFirst" tvg-name="USA | BabyFirst" tvg-logo="https://static.wikia.nocookie.net/babyfirsttv/images/5/56/BabyFirst_Logo_2019.png/revision/latest?cb=20220912114022" group-title="INFANTILES", BabyFirst
http://170.82.37.21:8000/play/a00l/index.m3u8
#EXTINF:-1 tvg-id="USA | BabyTV" tvg-name="USA | BabyTV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Babytvv.png/200px-Babytvv.png" group-title="INFANTILES", BabyTV
http://170.82.37.21:8000/play/a00n/index.m3u8
#EXTINF:-1 tvg-id="USA | Semillitas" tvg-name="USA | Semillitas" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Semillitas2011.png/245px-Semillitas2011.png" group-title="INFANTILES", Semillitas
http://45.5.117.182:8000/play/a0er/index.m3u8
#EXTINF:-1 tvg-id="USA | Toon Goggles" tvg-name="USA | Toon Goggles" tvg-logo="https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Toon_Goggles_logo.png/220px-Toon_Goggles_logo.png" group-title="INFANTILES", Toon Goggles TV
https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=514
#EXTINF:-1 tvg-id="USA | Discovery Kids" tvg-name="USA | Discovery Kids" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Discovery_Kids_Logo_2021-Presente.webp/125px-Discovery_Kids_Logo_2021-Presente.webp.png" group-title="INFANTILES", Discovery Kids
http://190.187.154.156:8000/play/a06h/index.m3u8
#EXTINF:-1 tvg-id="USA | Disney Channel" tvg-name="USA | Disney Channel" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/2019_Disney_Channel_logo.svg/200px-2019_Disney_Channel_logo.svg.png" group-title="INFANTILES", Disney Channel
http://187.102.208.108:50001/play/a00e/index.m3u8
#EXTINF:-1 tvg-id="USA | Disney Junior" tvg-name="USA | Disney Junior" tvg-logo="https://www.directv.com.pe/content/dam/public-sites/channels/315.png" group-title="INFANTILES", Disney Junior
http://190.187.154.156:8000/play/a08t/index.m3u8
#EXTINF:-1 tvg-id="VE | 1·2·3 TV" tvg-name="VE | 1·2·3 TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/123TV_logo_2022.jpg/320px-123TV_logo_2022.jpg" group-title="INFANTILES", 1·2·3 TV
http://38.41.8.1:8000/play/a03o
#EXTINF:-1 tvg-id="AR | Plim Plim TV" tvg-name="AR | Plim Plim TV" tvg-logo="https://cablego.com.pe/cache/logos256/PLIMPLIM.png" group-title="INFANTILES", Plim Plim TV
https://cdn1.eco.cdn.moderntv.eu/econocable/stream/PLIMPLIM/40-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DPLIMPLIM_stream_63&_cdn_session=1449022963&_cdn_timestamp=1700068036&_cdn_token=68444cb984ba9052ec2a770f8babb5d5a02e9db7
#EXTINF:-1 tvg-id="USA | DreamWorks" tvg-name="USA | DreamWorks" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/8/84/DreamWorks_Channel_Logo.svg" group-title="INFANTILES", DreamWorks
http://daleplay.club:8080/live/listatbsdaleplay22/listatbsdaleplaypararepetircanales/312777.m3u8
#EXTINF:-1 tvg-id="USA | Nickelodeon" tvg-name="USA | Nickelodeon" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Nickelodeon_2009_logo.svg/245px-Nickelodeon_2009_logo.svg.png" group-title="INFANTILES", Nickelodeon
http://190.187.154.156:8000/play/a05t/index.m3u8
#EXTINF:-1 tvg-id="USA | Nick Jr." tvg-name="USA | Nick Jr." tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Nick_Jr._logo_2009.svg/250px-Nick_Jr._logo_2009.svg.png" group-title="INFANTILES", Nick Jr.
http://daleplay.club:8080/live/listatbsdaleplay22/listatbsdaleplaypararepetircanales/312814.m3u8
#EXTINF:-1 tvg-id="USA | TeenNick" tvg-name="USA | TeenNick" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/TeenNick_2019_logo.svg/245px-TeenNick_2019_logo.svg.png" group-title="INFANTILES", TeenNick
http://187.102.208.108:50001/play/a047/index.m3u8
#EXTINF:-1 tvg-id="CL | Moni TV" tvg-name="CL | Moni TV" tvg-logo="https://i.paste.pics/5700114855145b35e03c4831c13238d5.png" group-title="INFANTILES", Moni TV
https://tv.streaming-chile.com:1936/ngencrcbyy/ngencrcbyy/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Planeta Family TV Kids" tvg-name="CL | Planeta Family TV Kids" tvg-logo="https://pbs.twimg.com/media/Frs3AxpWwAEG08o?format=png&name=240x240" group-title="INFANTILES", Planeta Family TV Kids
https://scl.edge.grupoz.cl/planetatvkids/live/playlist.m3u8
#EXTINF:-1 tvg-id="AR | Pakapaka" tvg-name="AR | Pakapaka" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Paka-paka.svg/320px-Paka-paka.svg.png" group-title="INFANTILES", Pakapaka
http://200.63.95.6:8000/play/a03x/index.m3u8
#EXTINF:-1 tvg-id="PA | Lego Toons" tvg-name="PA | Lego Toons" tvg-logo="https://i.imgur.com/0ksEr4f.png" group-title="INFANTILES", Lego Toons
https://stitcheraws.unreel.me/wse-node02.powr.com/live/5bf22549d5eeee0f5a4094ba/playlist.m3u8
#EXTINF:-1 tvg-id="ES | TVG Xabarín" tvg-name="ES | TVG Xabarín" tvg-logo="https://tvendirecto.es/wp-content/uploads/tvg-xabarin-en-directo.png" group-title="INFANTILES", TVG Xabarín
http://infantil-crtvg.flumotion.com/chunks.m3u8
#EXTINF:-1 tvg-id="PE | Canal IPe" tvg-name="PE | Canal IPe" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Canal_IPe_Abril_2022.png/190px-Canal_IPe_Abril_2022.png" group-title="INFANTILES", Canal IPe
http://201.218.137.232:4123/play/a016/index.m3u8
#EXTINF:-1 tvg-id="ES | Anime Zone TV" tvg-name="ES | Anime Zone TV" tvg-logo="https://azxtv.com/aztv.png" group-title="INFANTILES", Anime Zone TV
http://azxtv.com/hls/stream.m3u8
#EXTINF:-1 tvg-id="USA | Canal Infantil" tvg-name="USA | Canal Infantil" tvg-logo="https://www.latingroup.us/images/logoci.png" group-title="INFANTILES", Canal Infantil
http://179.189.222.226:8000/play/ch06
#EXTINF:-1 tvg-id="USA | FMH Kids" tvg-name="USA | FMH Kids" tvg-logo="https://www.latincable.pe/images/canales-tv/fmh-kids.jpg" group-title="INFANTILES", FMH Kids
http://160.20.165.246:8000/play/a01f/index.m3u8
#EXTINF:-1 tvg-id="CL | Funbox" tvg-name="CL | Funbox" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/FunBox_TV_logo.svg/120px-FunBox_TV_logo.svg.png" group-title="INFANTILES", Funbox
http://160.20.165.246:8000/play/a005/index.m3u8
#EXTINF:-1 tvg-id="MX | bitMe" tvg-name="MX | bitMe" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/BitMe_logo.svg/175px-BitMe_logo.svg.png" group-title="INFANTILES", bitMe
http://livex.pop-app.live/s4n/poplive/ch555/playlist.m3u8
#EXTINF:-1 tvg-id="USA | Adult Swim" tvg-name="USA | Adult Swim" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Adult_Swim_2003_logo.svg/300px-Adult_Swim_2003_logo.svg.png" group-title="INFANTILES", Adult Swim
http://177.53.153.21:8001/play/a02k/index.m3u8
#EXTINF:-1 tvg-id="USA | El Conflicto Tribunal del Pueblo TV" tvg-name="USA | El Conflicto Tribunal del Pueblo TV" tvg-logo="https://www.distro.tv/espanol-latam/img/elconflicto_600x600.jpg" group-title="Canales 24/7", El Conflicto Tribunal del Pueblo TV
https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=1965
#EXTINF:-1 tvg-id="USA | El Gallo Claudio TV" tvg-name="USA | El Gallo Claudio TV" tvg-logo="https://static.wikia.nocookie.net/looneytunes/images/4/49/Gallo_Claudio.jpg/revision/latest?cb=20111104190434&path-prefix=es" group-title="Canales 24/7", El Gallo Claudio TV
https://6362ca6f1fc28.streamlock.net:443/cinecartoon/cinecartoon/playlist.m3u8
#EXTINF:-1 tvg-id="USA | Los Picapiedra TV" tvg-name="USA | Los Picapiedra TV" tvg-logo="https://www.themoviedb.org/t/p/original/f87jYBMajaJpW8G5zxfqmfZwjJ5.png" group-title="Canales 24/7", Los Picapiedra TV
https://6362ca6f1fc28.streamlock.net:443/picapiedraplus/picapiedraplus/playlist.m3u8
#EXTINF:-1 tvg-id="USA | Tom y Jerry TV" tvg-name="USA | Tom y Jerry TV" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_T3QPiTLA_Cr6xXHsJmZl9YvIYQIElADnBLb7PTa47g-GR81C_zQcqJ6tVIrBmw7lg&usqp=CAU" group-title="Canales 24/7", Tom y Jerry TV
https://6362ca6f1fc28.streamlock.net:443/tomyjerry/tomyjerry/playlist.m3u8
#EXTINF:-1 tvg-id="USA | Ben 10 TV" tvg-name="USA | Ben 10 TV" tvg-logo="https://w7.pngwing.com/pngs/972/930/png-transparent-ben-10-alien-force-logo-cartoon-network-miscellaneous-game-cdr.png" group-title="Canales 24/7", Ben 10 TV
http://51.159.104.29:8080/ben10/index.m3u8
#EXTINF:-1 tvg-id="USA | Bob Esponja TV" tvg-name="USA | Bob Esponja TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bob_esponja_logotipo.svg/2560px-Bob_esponja_logotipo.svg.png" group-title="Canales 24/7", Bob Esponja TV
http://51.159.104.29:8080/bobesponja/index.m3u8
#EXTINF:-1 tvg-id="USA | Scooby-Doo TV" tvg-name="USA | Scooby-Doo TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Scooby_doo_logo.png/200px-Scooby_doo_logo.png" group-title="Canales 24/7", Scooby-Doo TV
https://v3.playerlatino.live/stream/m3u8/422
#EXTINF:-1 tvg-id="JP | Dragon Ball TV" tvg-name="JP | Dragon Ball TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/f/f3/Dragon_Ball_anime_logo.png" group-title="Canales 24/7", Dragon Ball TV
https://v3.playerlatino.live/stream/m3u8/425
#EXTINF:-1 tvg-id="JP | Dragon Ball Z TV" tvg-name="JP | Dragon Ball Z TV" tvg-logo="https://i.pinimg.com/originals/60/a9/61/60a96199afa8469b7c3c46810ed86816.png" group-title="Canales 24/7", Dragon Ball Z TV
https://v3.playerlatino.live/stream/m3u8/424
#EXTINF:-1 tvg-id="JP | Pokemón TV" tvg-name="JP | Pokemón TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" group-title="Canales 24/7", Pokemón TV
https://v3.playerlatino.live/stream/m3u8/420
#EXTINF:-1 tvg-id="JP | Los Caballeros del Zodiaco TV" tvg-name="JP | Los Caballeros del Zodiaco TV" tvg-logo="https://www.pngfind.com/pngs/m/333-3330235_caballeros-del-zodiaco-png-logo-de-caballeros-del.png" group-title="Canales 24/7", Los Caballeros del Zodiaco TV
https://v3.playerlatino.live/stream/m3u8/427
#EXTINF:-1 tvg-id="USA | Los Tres Chiflados TV" tvg-name="USA | Los Tres Chiflados TV" tvg-logo="https://pics.filmaffinity.com/the_three_stooges-358012845-mmed.jpg" group-title="Canales 24/7", Los Tres Chiflados TV
http://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5f85f1dc1418bd0007e11eb9/master.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=bff35bd0-6307-11eb-b3fa-019cb96f121b&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=025be615-509e-4721-8804-92898ace6781&userId=&serverSideAds=true
#EXTINF:-1 tvg-id="MX | El Chavo del 8 TV" tvg-name="MX | El Chavo del 8 TV" tvg-logo="https://pbs.twimg.com/media/Fp3p0zZXoAY_loW?format=png&name=small" group-title="Canales 24/7", El Chavo del 8 TV
https://6362ca6f1fc28.streamlock.net:443/elchavoplus/elchavoplus/playlist.m3u8
#EXTINF:-1 tvg-id="MX | Distrito Comedia" tvg-name="MX | Distrito Comedia" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/DistritoComediaLOGO2018.png/175px-DistritoComediaLOGO2018.png" group-title="ENTRETENIMIENTO", Distrito Comedia
http://daleplay.club:8080/listatbsdaleplay22/listatbsdaleplaypararepetircanales/63195
#EXTINF:-1 tvg-id="USA | Comedy Central" tvg-name="USA | Comedy Central" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Comedy_Central_2018.svg/250px-Comedy_Central_2018.svg.png" group-title="ENTRETENIMIENTO", Comedy Central 
http://177.53.153.21:8001/play/a02i/index.m3u8
#EXTINF:-1 tvg-id="RU | RT" tvg-name="RU | RT" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Russia-today-logo.svg/125px-Russia-today-logo.svg.png" group-title="NOTICIAS E INFORMACION", RT Noticias
https://rt-esp.rttv.com/live/rtesp/playlist_1600Kb.m3u8
#EXTINF:-1 tvg-id="VE | Telesur" tvg-name="VE | Telesur" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/TeleSUR-Logo.svg/150px-TeleSUR-Logo.svg.png" group-title="NOTICIAS E INFORMACION", Telesur
https://cdnesmain.telesur.ultrabase.net/mbliveMain/hd/playlist.m3u8
#EXTINF:-1 tvg-id="VE | Globovisión" tvg-name="VE | Globovisión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Logo-Globovisi%C3%B3n.png/140px-Logo-Globovisi%C3%B3n.png" group-title="NOTICIAS E INFORMACION", Globovisión
http://38.41.8.1:8000/play/a03u
#EXTINF:-1 tvg-id="VE | Vivo Play" tvg-name="VE | Vivo Play" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/7/75/VIVOplay_logo.png" group-title="NOTICIAS E INFORMACION", Vivo Play
https://linear-260.frequency.stream/dist/vix/260/hls/master/playlist.m3u8
#EXTINF:-1 tvg-id="AL | DW" tvg-name="AL | DW" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Deutsche_Welle_symbol_2012.svg/125px-Deutsche_Welle_symbol_2012.svg.png" group-title="NOTICIAS E INFORMACION", DW Televisión
https://dwamdstream104.akamaized.net/hls/live/2015530/dwstream104/index.m3u8
#EXTINF:-1 tvg-id="FR | France 24" tvg-name="FR | France 24" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/France24.png/125px-France24.png" group-title="NOTICIAS E INFORMACION", France 24
https://marine2.miplay.cl/france24/playlist.m3u8
#EXTINF:-1 tvg-id="FR | Euronews" tvg-name="FR | Euronews" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Euronews_2016_logo.svg/245px-Euronews_2016_logo.svg.png" group-title="NOTICIAS E INFORMACION", Euronews
https://rakuten-euronews-4-es.samsung.wurl.com/manifest/playlist.m3u8
#EXTINF:-1 tvg-id="MX | Foro TV" tvg-name="MX | Foro TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Logo-ForoTV-2020.png/125px-Logo-ForoTV-2020.png" group-title="NOTICIAS E INFORMACION", Foro TV
https://channel02-notusa.akamaized.net/hls/live/2023914-b/event01/index_6.m3u8
#EXTINF:-1 tvg-id="MX | Canal 10 Noticias" tvg-name="MX | Canal 10 Noticias" tvg-logo="https://s3-us-west-1.amazonaws.com/canal10/Imagenes/Logotipo/Canal10_Oficial2.png" group-title="NOTICIAS E INFORMACION", Canal 10 Noticias
https://canal10.mediaflix.istream.mx/wza_live/live/movil/playlist.m3u8
#EXTINF:-1 tvg-id="AR | Todo Noticias" tvg-name="AR | Todo Noticias" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/TN_todo_noticias_logo.svg/200px-TN_todo_noticias_logo.svg.png" group-title="NOTICIAS E INFORMACION", Todo Noticias
https://live-01-01-tn.vodgc.net/TN24/index.m3u8
#EXTINF:-1 tvg-id="AR | Canal 26 Noticias" tvg-name="AR | Canal 26 Noticias" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/2/2a/Canal_26_Argentina.png" group-title="NOTICIAS E INFORMACION", Canal 26 Noticias
http://live-edge01.telecentro.net.ar/live/26hd-720/playlist.m3u8
#EXTINF:-1 tvg-id="CO | Noticias Caracol" tvg-name="CO | Noticias Caracol" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Noticias_Caracol_imagotype.svg/150px-Noticias_Caracol_imagotype.svg.png" group-title="NOTICIAS E INFORMACION", Noticias Caracol
https://cdn1.eco.cdn.moderntv.eu/econocable/stream/NOTICIASCARACOL/40-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DNOTICIASCARACOL_stream_93&_cdn_session=1419820411&_cdn_timestamp=1699587358&_cdn_token=ab7df00d32994ace4f854062fe29500d82875701
#EXTINF:-1 tvg-id="IRN | HispanTV" tvg-name="IRN | HispanTV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HispanTv_logo.svg/245px-HispanTv_logo.svg.png" group-title="NOTICIAS E INFORMACION", HispanTV
https://cdnlive.presstv.ir/cdnlive/smil:live.smil/playlist.m3u8
#EXTINF:-1 tvg-id="CH | CGTN Español" tvg-name="CH | CGTN Español" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/CGTN_Espanol.png/180px-CGTN_Espanol.png" group-title="NOTICIAS E INFORMACION", CGTN Español
https://livees.cgtn.com/1000e/prog_index.m3u8
#EXTINF:-1 tvg-id="PE | Canal N" tvg-name="PE | Canal N" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Canal_N_2022.png/100px-Canal_N_2022.png" group-title="NOTICIAS E INFORMACION", Canal N
http://www.onlinetv365.xyz:8080/live/57tyjhg65ljouni7yu711/thjhg3468ihj/11.m3u8
#EXTINF:-1 tvg-id="PE | RPP TV" tvg-name="PE | RPP TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/0/04/RPP_TV_-_2017_logo.png" group-title="NOTICIAS E INFORMACION", RPP TV
http://161.132.243.192:50001/play/a02n/index.m3u8
#EXTINF:-1 tvg-id="ESP | 24 Horas tve" tvg-name="ESP | 24 horas tve" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Logo_TVE-24h.svg/125px-Logo_TVE-24h.svg.png" group-title="NOTICIAS E INFORMACION", 24 horas tve
https://ztnr.rtve.es/ztnr/1694255.m3u8
#EXTINF:-1 tvg-id="USA | CNN en Español" tvg-name="USA | CNN en Español" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/cnn_en_espanol-mediano.png" group-title="NOTICIAS E INFORMACION", CNN en Español
http://45.5.119.155:8000/play/a0gi/index.m3u8
#EXTINF:-1 tvg-id="CL | CNN Chile" tvg-name="CL | CNN Chile" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/CNN_Chile_logo_2017.svg/150px-CNN_Chile_logo_2017.svg.png" group-title="NOTICIAS E INFORMACION", CNN Chile
http://177.53.153.21:8001/play/a01q/index.m3u8
#EXTINF:-1 tvg-id="USA | CNN Internacional" tvg-name="USA | CNN Internacional" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/162px-CNN_International_logo.svg.png" group-title="NOTICIAS E INFORMACION", CNN Internacional
https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_0_3564000.m3u8
#EXTINF:-1 tvg-id="UK | BBC World News" tvg-name="UK | BBC World News" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/BBC_World_News_2022_%28Boxed%29.svg/170px-BBC_World_News_2022_%28Boxed%29.svg.png" group-title="NOTICIAS E INFORMACION", BBC World News
http://45.5.117.182:8000/play/a0f7/index.m3u8
#EXTINF:-1 tvg-id="CL | Canal 24 Horas" tvg-name="CL | Canal 24 Horas" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Logotipo_de_24_Horas_TVN.png/150px-Logotipo_de_24_Horas_TVN.png" group-title="NOTICIAS E INFORMACION", Canal 24 Horas
https://marine2.miplay.cl/24horas/playlist.m3u8
#EXTINF:-1 tvg-id="USA | Lifetime" tvg-name="USA | Lifetime" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_Lifetime_2020.svg/150px-Logo_Lifetime_2020.svg.png" group-title="MISCELANEO", Lifetime
https://cdn2.eco.cdn.moderntv.eu/econocable/stream/LIFETIME/40-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DLIFETIME_stream_sl&_cdn_session=1359442843&_cdn_timestamp=1699113873&_cdn_token=27694b3ac23f57c8a78a8f761345960fad0c9313
#EXTINF:-1 tvg-id="VE | Ve Plus" tvg-name="VE | Ve Plus" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Ve_Plus_Logo_2019.png/130px-Ve_Plus_Logo_2019.png" group-title="MISCELANEO", Ve Plus
http://190.122.96.187:8888/http/006
#EXTINF:-1 tvg-id="MX | Canal Claro" tvg-name="MX | Canal Claro" tvg-logo="https://yt3.ggpht.com/ytc/AMLnZu_wMka8ic6GW1I8vfkcLln4EVGxKvqesLkuFTuI=s900-c-k-c0x00ffffff-no-rj" group-title="MISCELANEO", Canal Claro
http://45.5.118.226:8000/play/a0fv/index.m3u8
#EXTINF:-1 tvg-id="USA | film&arts" tvg-name="USA | film&arts" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Film%26Arts2016.png/200px-Film%26Arts2016.png" group-title="MISCELANEO", Film & Arts
https://cdn2.eco.cdn.moderntv.eu/econocable/stream/FILMSANDARTS/40-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DFILMSANDARTS_stream_cb&_cdn_session=1359444411&_cdn_timestamp=1699113909&_cdn_token=3a10f38204c4c4111e6c41713b60857410d69600
#EXTINF:-1 tvg-id="CL | Canal DOS" tvg-name="CL | Canal DOS" tvg-logo="https://pbs.twimg.com/media/Fm4LCw_WYAESJ5v?format=png&name=small" group-title="MISCELANEO", Canal DOS
https://marine2.miplay.cl/dos/playlist.m3u8
#EXTINF:-1 tvg-id="MX | Clic!" tvg-name="MX | Clic!" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/5/5b/Clic_%28TV_channel%29_logo_2021.png" group-title="ESTILOS DE VIDA", Clic!
https://cdn1.eco.cdn.moderntv.eu/econocable/stream/AZCLIC/40-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DAZCLIC_stream_ln&_cdn_session=1359446259&_cdn_timestamp=1699113948&_cdn_token=c83d5b13baceafaf0e2dd1e2ba87a914dbf776b5
#EXTINF:-1 tvg-id="USA | Más Chic" tvg-name="USA | Más Chic" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_M%C3%A1s_Chic_%28canal_de_televisi%C3%B3n%29.svg/125px-Logo_M%C3%A1s_Chic_%28canal_de_televisi%C3%B3n%29.svg.png" group-title="ESTILOS DE VIDA", Más Chic
http://livex.pop-app.live/s4n/poplive/ch519/playlist.m3u8
#EXTINF:-1 tvg-id="USA | HGTV" tvg-name="USA | HGTV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/HGTV_US_Logo_2015.svg/200px-HGTV_US_Logo_2015.svg.png" group-title="ESTILOS DE VIDA", HGTV
https://cdn2.eco.cdn.moderntv.eu/econocable/stream/HGTV/40-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DHGTV_stream_yy&_cdn_session=1443954803&_cdn_timestamp=1699981629&_cdn_token=2a38fd08257a1369c461fa74515d413dfb316df6
#EXTINF:-1 tvg-id="FR | Fashion TV" tvg-name="FR | Fashion TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Fashion_TV_logo.svg/150px-Fashion_TV_logo.svg.png" group-title="ESTILOS DE VIDA", Fashion TV
http://fash1043.cloudycdn.services/slive/_definst_/ftv_paris_adaptive.smil/chunklist_b2800000_t64NzIwcA==.m3u8
#EXTINF:-1 tvg-id="USA | E!" tvg-name="USA | E!" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/E%21_Logo_2012.svg/35px-E%21_Logo_2012.svg.png" group-title="ESTILOS DE VIDA", E! Entertainment Televisión
http://190.187.154.156:8000/play/a07a/index.m3u8
#EXTINF:-1 tvg-id="ES | ¡Hola! TV" tvg-name="ES | ¡Hola! TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/%C2%A1HOLA%21TVlogo.jpg/220px-%C2%A1HOLA%21TVlogo.jpg" group-title="ESTILOS DE VIDA", ¡Hola! TV
http://daleplay.club:8080/listatbsdaleplay22/listatbsdaleplaypararepetircanales/63204
#EXTINF:-1 tvg-id="CL | Ladies TV" tvg-name="CL | Ladies TV" tvg-logo="https://miplay.cl/wp-content/uploads/2022/01/LADIES-FONDO-2-300x169.jpg" group-title="ESTILOS DE VIDA", Ladies TV
https://panel.miplay.cl:8081/ladies/index.m3u8
#EXTINF:-1 tvg-id="USA | TLC" tvg-name="USA | TLC" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/TLC_Logo.svg/150px-TLC_Logo.svg.png" group-title="ESTILOS DE VIDA", Travel & Living Channel
https://cdn3.eco.cdn.moderntv.eu/econocable/stream/TLC/10-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DTRAVELANDLIVING_stream_z3&_cdn_session=1359449539&_cdn_timestamp=1699114008&_cdn_token=c9b0eb5c8ac7fb87783e618cf9efce2a87b013c3
#EXTINF:-1 tvg-id="USA | Discovery Home & Health" tvg-name="USA | Discovery Home & Health" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Discovery_H%26H.png/160px-Discovery_H%26H.png" group-title="ESTILOS DE VIDA", Discovery Home & Health
http://190.187.154.156:8000/play/a06g/index.m3u8
#EXTINF:-1 tvg-id="CL | On Tour Channel" tvg-name="CL | On Tour Channel" tvg-logo="https://pbs.twimg.com/media/FSiiFtPXIAAjZZ8?format=png&name=120x120" group-title="ESTILOS DE VIDA", On Tour Channel
https://marine2.miplay.cl/ontour/playlist.m3u8
#EXTINF:-1 tvg-id="VE | Sun Channel" tvg-name="VE | Sun Channel" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Sun_Channel_Logo_2022.webp/150px-Sun_Channel_Logo_2022.webp.png" group-title="ESTILOS DE VIDA", Sun Channel
http://177.53.153.21:8001/play/a02n/index.m3u8
#EXTINF:-1 tvg-id="CO | Hogar TV" tvg-name="CO | Hogar TV" tvg-logo="https://yt3.googleusercontent.com/ytc/AGIKgqNl2jABAaUSC58vqjDlAol9fx802jiaoGGBKggA=s900-c-k-c0x00ffffff-no-rj" group-title="ESTILOS DE VIDA", Hogar TV
http://45.191.234.189:15084/play/a02b/index.m3u8
#EXTINF:-1 tvg-id="AR | El Gourmet TV" tvg-name="AR | El Gourmet TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Elgourmetlogo2015.png/160px-Elgourmetlogo2015.png" group-title="GASTRONOMÍA", El Gourmet Televisión
http://190.187.154.156:8000/play/a0b4/index.m3u8
#EXTINF:-1 tvg-id="USA | Food Network" tvg-name="USA | Food Network" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Food_Network_New_Logo.png/150px-Food_Network_New_Logo.png" group-title="GASTRONOMÍA", Food Network
http://190.187.154.156:8000/play/a077/index.m3u8
#EXTINF:-1 tvg-id="CL | Mundo & Sabor" tvg-name="CL | Mundo & Sabor" tvg-logo="https://miplay.cl/wp-content/uploads/2022/01/MUNDO-Y-SABOR-FONDO-2-300x169.jpg" group-title="GASTRONOMÍA", Mundo & Sabor
https://marine2.miplay.cl/mundoysabor/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Liga 1 Max" tvg-name="PE | Liga 1 Max" tvg-logo="https://services.nunchee.com/api/2.0/assets/images/63dd234f3f6b35001fcf78bd/view/backdrop/75" group-title="DEPORTES", Liga 1 Max
http://190.187.154.156:8000/play/a0ca/index.m3u8
#EXTINF:-1 tvg-id="USA | Golf Channel" tvg-name="USA | Golf Channel" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Golf_Channel_Logo_2018.png/200px-Golf_Channel_Logo_2018.png" group-title="DEPORTES", Golf Channel
http://187.102.208.108:50001/play/a03w/index.m3u8
#EXTINF:-1 tvg-id="USA | Fox Sports 2" tvg-name="USA | Fox Sports 2" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/2015_Fox_sports_logo.svg/175px-2015_Fox_sports_logo.svg.png" group-title="DEPORTES", Fox Sports 2
http://190.187.154.156:8000/play/a06b/index.m3u8
#EXTINF:-1 tvg-id="USA | Fox Sports 3" tvg-name="USA | Fox Sports 3" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Fox_sports_3_logo.svg/180px-Fox_sports_3_logo.svg.png" group-title="DEPORTES", Fox Sports 3
http://190.187.154.156:8000/play/a05w/index.m3u8
#EXTINF:-1 tvg-id="USA | ESPN" tvg-name="USA | ESPN" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/150px-ESPN_wordmark.svg.png" group-title="DEPORTES", ESPN
http://190.187.154.156:8000/play/a04w/index.m3u8
#EXTINF:-1 tvg-id="USA | ESPN 2" tvg-name="USA | ESPN 2" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/ESPN2_logo.svg/180px-ESPN2_logo.svg.png" group-title="DEPORTES", ESPN 2
http://190.187.154.156:8000/play/a06a/index.m3u8
#EXTINF:-1 tvg-id="USA | ESPN 3" tvg-name="USA | ESPN 3" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/ESPN3_Logo.png/180px-ESPN3_Logo.png" group-title="DEPORTES", ESPN 3
http://190.187.154.156:8000/play/a05v/index.m3u8
#EXTINF:-1 tvg-id="USA | ESPN 4" tvg-name="USA | ESPN 4" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/ESPN_4_logo.svg/180px-ESPN_4_logo.svg.png" group-title="DEPORTES", ESPN 4
http://190.187.154.156:8000/play/a06c/index.m3u8
#EXTINF:-1 tvg-id="USA | ESPN Extra" tvg-name="USA | ESPN Extra" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/ESPN_Extra_Logo_2022.webp/190px-ESPN_Extra_Logo_2022.webp.png" group-title="DEPORTES", ESPN Extra
http://190.187.154.156:8000/play/a06p/index.m3u8
#EXTINF:-1 tvg-id="MX | Claro Sports" tvg-name="MX | Claro Sports" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Claro_Sports_logo.svg/150px-Claro_Sports_logo.svg.png" group-title="DEPORTES", Claro Sports
http://190.6.202.162:8000/play/a014/index.m3u8
#EXTINF:-1 tvg-id="MX | Claro Sports 2" tvg-name="MX | Claro Sports 2" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/5/56/ClaroSports2.png/revision/latest/scale-to-width-down/250?cb=20210423191014&path-prefix=es" group-title="DEPORTES", Claro Sports 2
http://45.5.117.182:8000/play/a0e5/index.m3u8
#EXTINF:-1 tvg-id="CL | TNT Sports" tvg-name="CL | TNT Sports" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/TNT_Sports_2021_logo.svg/320px-TNT_Sports_2021_logo.svg.png" group-title="DEPORTES", TNT Sports
http://190.83.60.34:1414/play/a01h
#EXTINF:-1 tvg-id="AR | TyC Sports" tvg-name="AR | TyC Sports" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/TyC_Sports_logo.svg/245px-TyC_Sports_logo.svg.png" group-title="DEPORTES", TyC Sports
http://177.53.153.21:8001/play/a03y/index.m3u8
#EXTINF:-1 tvg-id="AR | El Garage TV" tvg-name="AR | El Garage TV" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLS-T1STlbnBP1FvFZIpa4XY9LsYWzX0KuHw72YVeg=s88-c-k-c0x00ffffff-no-rj" group-title="DEPORTES", El Garage TV
https://stream1.sersat.com/hls/garagetv.m3u8
#EXTINF:-1 tvg-id="USA | Latin América Sport" tvg-name="USA | Latin América Sport" tvg-logo="http://181.189.243.254:8000/playlist/tvg-logo/a0rd.png" group-title="DEPORTES", Latin América Sport
http://177.53.153.21:8001/play/a07i/index.m3u8
#EXTINF:-1 tvg-id="GT | Tigo Sports Guatemala" tvg-name="GT | Tigo Sports Guatemala" tvg-logo="https://play-lh.googleusercontent.com/KH-g_YGtjU5GdfVyNZlvi40ld8mN0Nf5KQuRxRvGd_McffdR7wA95zLDn7eV0khH_0o" group-title="DEPORTES", Tigo Sports Guatemala
https://linear-556.frequency.stream/dist/vix/556/hls/master/playlist.m3u8
#EXTINF:-1 tvg-id="CR | Tigo Sports Costa Rica" tvg-name="CR | Tigo Sports Costa Rica" tvg-logo="https://play-lh.googleusercontent.com/6hNBaZu9_Ss-aBT6NOib7gTdU6fokNFqhOVCvGkIBjuLKXK6USX5fBfWsDfQjrD0L-A" group-title="DEPORTES", Tigo Sports Costa Rica
http://190.149.66.90:4000/play/a03j/index.m3u8
#EXTINF:-1 tvg-id="CL | Fitmaxx TV" tvg-name="CL | Fitmaxx TV" tvg-logo="https://pbs.twimg.com/media/FSk6Zq7WQAA7Cp8?format=png&name=240x240" group-title="DEPORTES", Fitmaxx TV
https://marine2.miplay.cl/fitmaxx/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Sport Ext" tvg-name="CL | Sport Ext" tvg-logo="https://miplay.cl/wp-content/uploads/2022/01/SPORT-EXT-FONDO-2-300x169.jpg" group-title="DEPORTES", Sport Ext
https://marine2.miplay.cl/sportext/playlist.m3u8
#EXTINF:-1 tvg-id="CO | Win Sports" tvg-name="CO | Win Sports" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/WinSports2022.png/150px-WinSports2022.png" group-title="DEPORTES", Win Sports
http://livex.pop-app.live/s4n/poplive/ch562/playlist.m3u8
#EXTINF:-1 tvg-id="CO | Win Sports+" tvg-name="CO | Win Sports+" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/WinSportsM%C3%A1s2022.png/200px-WinSportsM%C3%A1s2022.png" group-title="DEPORTES", Win Sports+
http://161.132.194.88:7076/play/a0t0/index.m3u8
#EXTINF:-1 tvg-id="CR | FUTV" tvg-name="CR | FUTV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Logo_de_FUTV.svg/200px-Logo_de_FUTV.svg.png" group-title="DEPORTES", FUTV
http://181.189.243.254:8000/play/a0t3/index.m3u8
#EXTINF:-1 tvg-id="HN | Todo Deportes TV" tvg-name="HN | Todo Deportes TV" tvg-logo="https://dd7tel2830j4w.cloudfront.net/f1560359694028x167785582725733730/Group%2012.svg" group-title="DEPORTES", Todo Deportes TV
https://5fe2654d6127d.streamlock.net/tododeportesplus/smil:tododeportesplus.smil/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9MTEvMS8yMDIzIDM6MzI6NDAgUE0maGFzaF92YWx1ZT03Q1FNNnJBY1YzcnVkd2VjWkt6RmFRPT0mdmFsaWRtaW51dGVzPTM2MDAmaWQ9
#EXTINF:-1 tvg-id="ES | Teledeporte" tvg-name="ES | Teledeporte" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Teledeporte.svg/125px-Teledeporte.svg.png" group-title="DEPORTES", Teledeporte
https://spa-ha-p004.cdn.masmediatv.es/SVoriginOperatorEdge/smil:4_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="EC | El Canal del Fútbol" tvg-name="EC | El Canal del Fútbol" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Isotipo-ECDF.png/150px-Isotipo-ECDF.png" group-title="DEPORTES", El Canal del Fútbol
https://v3.playerlatino.live/stream/m3u8/892
#EXTINF:-1 tvg-id="AR | DSports" tvg-name="AR | DSports" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DSports.png/175px-DSports.png" group-title="DEPORTES", DSports
http://51.222.110.182:8000/play/a00g
#EXTINF:-1 tvg-id="AR | DSports 2" tvg-name="AR | DSports 2" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/DSports2.png/175px-DSports2.png" group-title="DEPORTES", DSports 2
http://xcm.budtv-ultra.com:25461/live/bud-185308/acbd5173b7/1644.m3u8
#EXTINF:-1 tvg-id="AR | DSports +" tvg-name="AR | DSports +" tvg-logo="https://www.directv.com.ar/content/dam/public-sites/channels/613.png" group-title="DEPORTES", DSports +
http://177.53.153.21:8001/play/a00i/index.m3u8
#EXTINF:-1 tvg-id="PE | GolTV" tvg-name="PE | GolTV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/GolTV_logo.svg/320px-GolTV_logo.svg.png" group-title="DEPORTES", GolTV
http://177.53.153.21:8001/play/a03t/index.m3u8
#EXTINF:-1 tvg-id="PE | Gol Perú" tvg-name="PE | Gol Perú" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Gol_Per%C3%BA_2019.svg/245px-Gol_Per%C3%BA_2019.svg.png" group-title="DEPORTES", Gol Perú
http://190.83.60.34:1414/play/a04m
#EXTINF:-1 tvg-id="PE | Movistar Deportes" tvg-name="PE | Movistar Deportes" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Movistar_Deportes.svg/200px-Movistar_Deportes.svg.png" group-title="DEPORTES", Movistar Deportes
http://161.132.194.88:7076/play/a0t1/index.m3u8
#EXTINF:-1 tvg-id="USA | TUDN" tvg-name="USA | TUDN" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/TUDN_Logo.svg/200px-TUDN_Logo.svg.png" group-title="DEPORTES", TUDN
http://181.189.243.217:8000/play/a0ud/index.m3u8
#EXTINF:-1 tvg-id="MX | Afizzionados" tvg-name="MX | Afizzionados" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Afizzionados_Logo.svg/320px-Afizzionados_Logo.svg.png" group-title="DEPORTES", Afizzionados
http://livex.pop-app.live/s4n/poplive/ch548/playlist.m3u8
#EXTINF:-1 tvg-id="USA | beIN Sports Xtra ñ" tvg-name="USA | beIN Sports Xtra ñ" tvg-logo="https://beinxtraespanol.com/images/logo-bein-sport-xtra-espanol-plain.png" group-title="DEPORTES", beIN Sports Xtra ñ
https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/bein-sports-xtra-en-espanol/playlist.m3u8
#EXTINF:-1 tvg-id="ES | Real Madrid TV" tvg-name="ES | Real Madrid TV" tvg-logo="https://vercanalestv.online/wp-content/uploads/2021/10/realmadridtv.jpg" group-title="DEPORTES", Real Madrid TV
https://rmtv.akamaized.net/hls/live/2043153/rmtv-es-web/master.m3u8
#EXTINF:-1 tvg-id="ES | Titan Channel" tvg-name="ES | Titan Channel" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzaaKhC3Cd3dVXmEzziRB7VB9WNkiI_fA8Ok7NtXmbblGCjH_780JG8qfZHkr67t6CwcY&usqp=CAU" group-title="DEPORTES", Titan Channel
http://191.97.60.193:10000/play/a04d/index.m3u8
#EXTINF:-1 tvg-id="ES | Gol Play" tvg-name="ES | Gol Play" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/GOL_PLAY.svg/250px-GOL_PLAY.svg.png" group-title="DEPORTES", Gol Play
https://spa-ha-p004.cdn.masmediatv.es/SVoriginOperatorEdge/smil:5_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="CL | Canal del Deporte Olímpico" tvg-name="CL | Canal del Deporte Olímpico" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/CDO_Premium.png/320px-CDO_Premium.png" group-title="DEPORTES", CDO
http://177.53.153.21:8001/play/a01l/index.m3u8
#EXTINF:-1 tvg-id="CL | Canal del Deporte Olímpico Premium" tvg-name="CL | Canal del Deporte Olímpico Premium" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/CDO_Premium.png/320px-CDO_Premium.png" group-title="DEPORTES", CDO Premium
http://190.95.220.212:8000/play/a014/index.m3u8
#EXTINF:-1 tvg-id="CO | Mi Gente TV" tvg-name="CO | Mi Gente TV" tvg-logo="https://cdn.mitvstatic.com/channels/pe_mi-gente_m.png" group-title="MUSICA Y REALITIES", Mi Gente TV
https://byecableiptvnew3.ddns.net/ENVIVOMIGENTE/index.m3u8
#EXTINF:-1 tvg-id="USA | Nick Music" tvg-name="USA | Nick Music" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/NickMusic.svg/220px-NickMusic.svg.png" group-title="MUSICA Y REALITIES", Nick Music
https://cdn3.eco.cdn.moderntv.eu/econocable/stream/NICKMUSIC/20-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DNICKTOONS_stream_vk&_cdn_session=1419824923&_cdn_timestamp=1699587419&_cdn_token=b8b1c74447802e00c4d27c7cf81d33fffb263737
#EXTINF:-1 tvg-id="ES | Lolly Kids" tvg-name="ES | Lolly Kids" tvg-logo="https://media.licdn.com/dms/image/C560BAQFdAU1qHO5HLw/company-logo_200_200/0/1572863101739?e=2147483647&v=beta&t=rCVG3SLF7zMjcfOfIScjaFkE1mHM4onFuIhlUhxB2Mk" group-title="MUSICA Y REALITIES", Lolly Kids
http://177.53.153.21:8001/play/a042/index.m3u8
#EXTINF:-1 tvg-id="USA | MTV" tvg-name="USA | MTV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/MTV-2021.svg/125px-MTV-2021.svg.png" group-title="MUSICA Y REALITIES", MTV
https://cdn3.eco.cdn.moderntv.eu/econocable/stream/MTV/20-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DMTV_stream_3f&_cdn_session=1419825355&_cdn_timestamp=1699587424&_cdn_token=860cdbf1585bdf1b5713535774d4098452038b05
#EXTINF:-1 tvg-id="USA | MTV 80s" tvg-name="USA | MTV 80s" tvg-logo="https://cdn.sincroguia.tv/uploads/images/5/4/z/xmtv-80.jpg.pagespeed.ic.iXMVwGV__4.jpg" group-title="MUSICA Y REALITIES", MTV 80s
http://177.53.153.21:8001/play/a05v/index.m3u8
#EXTINF:-1 tvg-id="USA | MTV 00s" tvg-name="USA | MTV 00s" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/MTV_00s_remaster.png/150px-MTV_00s_remaster.png" group-title="MUSICA Y REALITIES", MTV 00s
http://177.53.153.21:8001/play/a09c/index.m3u8
#EXTINF:-1 tvg-id="USA | MTV Hits" tvg-name="USA | MTV Hits" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/MTV_Hits_2021.svg/125px-MTV_Hits_2021.svg.png" group-title="MUSICA Y REALITIES", MTV Hits
http://177.53.153.21:8001/play/a05u/index.m3u8
#EXTINF:-1 tvg-id="USA | MTV Live" tvg-name="USA | MTV Live" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/MTV_Live_2021_logo.svg/220px-MTV_Live_2021_logo.svg.png" group-title="MUSICA Y REALITIES", MTV Live
http://177.53.153.21:8001/play/a02t/index.m3u8
#EXTINF:-1 tvg-id="USA | HTV" tvg-name="USA | HTV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Htv_logo.svg/120px-Htv_logo.svg.png" group-title="MUSICA Y REALITIES", HTV
http://45.5.117.182:8000/play/a0gn/index.m3u8
#EXTINF:-1 tvg-id="MX | Teleritmo" tvg-name="MX | Teleritmo" tvg-logo="https://www.lyngsat.com/logo/tv/tt/teleritmo-mx.png" group-title="MUSICA Y REALITIES", Teleritmo
https://mdstrm.com/live-stream-playlist/57b4dc126338448314449d0c.m3u8?uid=s9Ns1pDpzADqzOi8Qc2GY4fYDVDEmGtq&sid=H35JGFJtTorKu8yyo7nztAy4KIUVgJkx&pid=uf6dMZlhGP30u0KO5TmWpO8utXYJqOKN&an=screen&at=web-app&av=v5.2.278&ref=https%3A%2F%2Fwww.multimedios.com%2F&res=774x387&without_cookies=false&listenerid=&dnt=true
#EXTINF:-1 tvg-id="MX | Concert Channel" tvg-name="MX | Concert Channel" tvg-logo="https://static.wikia.nocookie.net/tvcable/images/b/bc/Gallery_1157_7_147957.png/revision/latest/scale-to-width-down/250?cb=20150406181433&path-prefix=es" group-title="MUSICA Y REALITIES", Concert Channel
http://45.228.232.219:16000/play/a0o2/index.m3u8
#EXTINF:-1 tvg-id="MX | Exa TV" tvg-name="MX | Exa TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Exa_TV_logo.svg/320px-Exa_TV_logo.svg.png" group-title="MUSICA Y REALITIES", Exa TV
http://45.228.232.219:16000/play/a0n9/index.m3u8
#EXTINF:-1 tvg-id="CO | Telemúsica" tvg-name="CO | Telemúsica" tvg-logo="https://image.roku.com/developer_channels/prod/826c2efdf3c093d6fef8e61063aa76e0454b018cc3d34da897e53487082d52c6.png" group-title="MUSICA Y REALITIES", Telemúsica
https://canal.mediaserver.com.co:8088/live/telemusica.m3u8
#EXTINF:-1 tvg-id="CL | Old Music TV" tvg-name="CL | Old Music TV" tvg-logo="https://pbs.twimg.com/media/FSimCx8X0AI_8QI?format=png&name=small" group-title="MUSICA Y REALITIES", Old Music Televisión
https://marine2.miplay.cl/oldmusic/playlist.m3u8
#EXTINF:-1 tvg-id="USA | Memorias TV" tvg-name="USA | Memorias TV" tvg-logo="https://memorias.tv/wp-content/uploads/2022/03/cropped-logo-MEMORIAS-TV-png-1-224x96.png" group-title="MUSICA Y REALITIES", Memorias TV
https://mediacp.us:8081/8002/index.m3u8
#EXTINF:-1 tvg-id="PE | Retro Plus TV" tvg-name="PE | Retro Plus TV" tvg-logo="https://retroplustv.com/gallery_gen/391184735541fc73f216b27309966e07_180x62_fit.jpg" group-title="MUSICA Y REALITIES", Retro Plus TV
https://video06.logicahost.com.br/retroplustv/retroplustv/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Retro Plus 2 TV" tvg-name="CL | Retro Plus 2 TV" tvg-logo="https://platcon.tv/img/p/1/1/8/118-large_default.jpg" group-title="MUSICA Y REALITIES", Retro Plus 2 TV
https://video06.logicahost.com.br/retroplussenal2/retroplussenal2/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Retro Play TV" tvg-name="CL | Retro Play TV" tvg-logo="https://play-lh.googleusercontent.com/T4_7BFebh_PJCxdz0SJgUna1OvsqzW1ZDfw4TEYKqQNJVy9CcDNj5Oha9Uq5XOs7OZY=w600-h300-pc0xffffff-pd" group-title="MUSICA Y PELICULAS", Retro Play TV
https://v4.tustreaming.cl/retroplaytv/index.m3u8
#EXTINF:-1 tvg-id="CO | Amordiscos TV" tvg-name="CO | Amordiscos TV" tvg-logo="https://amordiscostv.com/wp-content/uploads/2022/08/thumbnail_Logo-Amordiscos-600x600-alpha.png" group-title="MUSICA Y PELICULAS", Amordiscos TV
https://canal.mediaserver.com.co/live/canalamordiscos.m3u8
#EXTINF:-1 tvg-id="USA | Rockola Televisión" tvg-name="USA | Rockola Televisión" tvg-logo="https://pbs.twimg.com/profile_images/962425009745616896/rZ63oyzp_400x400.jpg" group-title="MUSICA Y REALITIES", Rockola Televisión
https://e46fa4a445464f8a9150fa7d510eb85c.mediatailor.us-west-2.amazonaws.com/v1/manifest/2d2d0d97b0e548f025b2598a69b55bf30337aa0e/npp/f988887e-33d8-4e8d-beac-ba8419900f76/0.m3u8
#EXTINF:-1 tvg-id="CL | Radio Recuerdos Retro TV" tvg-name="CL | Radio Recuerdos Retro TV" tvg-logo="https://recuerdosretro.com/wp-content/uploads/2022/03/cropped-logo_new_web10.png" group-title="MUSICA Y REALITIES", Radio Recuerdos Retro TV
https://panel.tvstream.cl:1936/8034/8034/playlist.m3u8
#EXTINF:-1 tvg-id="MX | Video Rola" tvg-name="MX | Video Rola" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lg_videorola-300x199.png/200px-Lg_videorola-300x199.png" group-title="MUSICA Y REALITIES", Video Rola
http://190.0.246.174:30000/play/tr050
#EXTINF:-1 tvg-id="PE | Top Latino" tvg-name="PE | Top Latino" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/LOGO_TOP_LATINO_PNG_2017_-_500px.png/150px-LOGO_TOP_LATINO_PNG_2017_-_500px.png" group-title="MUSICA Y REALITIES", Top Latino TV
https://5cefcbf58ba2e.streamlock.net:543/tltvweb/latin-tv.stream/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Fuego 40 El canal del pueblo" tvg-name="DO | Fuego 40 El canal del pueblo" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsURmYDu5MKZt_f59t-k2RIegQiWUbRp4X4PTLhm9BXR2qWUfuuYrCMWbaxVb3lhRhLk&usqp=CAU" group-title="MUSICA Y REALITIES", Fuego 40 TV
https://video.misistemareseller.com/Fuegotv/Fuegotv/playlist.m3u8
#EXTINF:-1 tvg-id="USA | Rewind TV" tvg-name="USA | Rewind TV" tvg-logo="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Rewind_TV_logo.png/200px-Rewind_TV_logo.png" group-title="MUSICA Y REALITIES", Rewind TV
https://tls-cl.cdnz.cl/rewindtv/live/chunklist_w1717563077.m3u8
#EXTINF:-1 tvg-id="PE | Karibeña TV" tvg-name="PE | Karibeña TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Logokaribe%C3%B1atv.png/150px-Logokaribe%C3%B1atv.png" group-title="MUSICA Y REALITIES", Karibeña TV
https://cdn2.eco.cdn.moderntv.eu/econocable/stream/KARIBENA/40-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3Dkaribena_stream_4z&_cdn_session=1419827843&_cdn_timestamp=1699587452&_cdn_token=984275540e18a1a9b92f72a33aecfe6a0507503a
#EXTINF:-1 tvg-id="PE | Visión TV Música" tvg-name="PE | Visión TV Música" tvg-logo="https://graph.facebook.com/visiontvmusica/picture?width=320&height=320" group-title="MUSICA Y REALITIES", Visión TV Música
https://multimedia.tmcreativos.com:1936/visionmusica/visionmusica/playlist.m3u8
#EXTINF:-1 tvg-id="NI | 88 Stereo" tvg-name="NI | 88 Stereo" tvg-logo="http://www.88stereo.com/wp-content/uploads/2017/05/88Stereo-logoweb.png" group-title="MUSICA Y REALITIES", 88 Stereo
http://k3.usastreams.com:1935/CableLatino/88stereo/chunklist_w1412956051.m3u8
#EXTINF:-1 tvg-id="AR | Music Top" tvg-name="AR | Music Top" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/9512bacf6f14cf9e6a45dc35587fa12e.webp" group-title="MUSICA Y REALITIES", Music Top
http://live-edge01.telecentro.net.ar/live/msctphd-720/chunklist_w2124958063.m3u8
#EXTINF:-1 tvg-id="AR | Tierra Mia TV" tvg-name="AR | Tierra Mia TV" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/298052f7d0c144e82b2750ad55289082.webp" group-title="MUSICA Y REALITIES", Tierra Mía TV
http://live-edge01.telecentro.net.ar/live/smil:trm.smil/chunklist_w1801551224_b1864000_sleng.m3u8
#EXTINF:-1 tvg-id="CL | TV Pop" tvg-name="CL | TV Pop" tvg-logo="https://vivotvhd.com/img/cha/4308.gif" group-title="MUSICA Y REALITIES", TV Pop
https://v4.tustreaming.cl/poptv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="USA | Vallenato Internacional Radio & TV" tvg-name="USA | Vallenato Internacional Radio & TV" tvg-logo="https://cdn.colombia.com/canales/vallenato-internacional-radio-tv-3172.jpg" group-title="MUSICA Y REALITIES", Vallenato Internacional Radio & TV
https://59a564764e2b6.streamlock.net/vallenato/Vallenato2/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Hits 360" tvg-name="DO | Hits 360" tvg-logo="https://www.vivalivetv.com/public/files/shows/0/1/1853-294x165-FFFFFF.jpg" group-title="MUSICA Y REALITIES", Hits 360
http://cm.hostlagarto.com:8081/hits360tv/hits360HD.myStream/playlist.m3u8
#EXTINF:-1 tvg-id="MX | Visión Televisión" tvg-name="MX | Visión Televisión" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9lPhyOcDjaoJ4wXoeZrt4AyE_xsEsSUm3SWH-m6fuPfWdxPqdSDtHUUp5J5KNY_3lP2A&usqp=CAU" group-title="MUSICA Y REALITIES", Visión Televisión
https://cloudvideo.servers10.com:8081/8016/index.m3u8
#EXTINF:-1 tvg-id="CL | Karavana TV" tvg-name="CL | Karavana TV" tvg-logo="https://miplay.cl/wp-content/uploads/2022/01/karavanatv-1920-1080-300x169.jpg" group-title="MUSICA Y REALITIES", Karavana TV
https://marine2.miplay.cl/karavanatv/playlist.m3u8
#EXTINF:-1 tvg-id="KR | K Pop" tvg-name="KR | K Pop" tvg-logo="https://pbs.twimg.com/media/FSiqLLSWQAIxK78?format=png&name=240x240" group-title="MUSICA Y REALITIES", K Pop
https://marine2.miplay.cl/kpop/playlist.m3u8
#EXTINF:-1 tvg-id="NI | Megabox" tvg-name="NI | Megabox" tvg-logo="https://pbs.twimg.com/profile_images/1108879740893622273/naY8KsoE_400x400.jpg" group-title="MUSICA Y REALITIES", Megabox
https://stmv1.voxhdnet.com/megabox5/megabox5/playlist.m3u8
#EXTINF:-1 tvg-id="MX | Bandamax" tvg-name="MX | Bandamax" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bandamax_logo.svg/245px-Bandamax_logo.svg.png" group-title="MUSICA Y REALITIES", Bandamax
https://cdn1.eco.cdn.moderntv.eu/econocable/stream/BANDAMAX/20-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DBANDAMAX_stream_jb&_cdn_session=1419832587&_cdn_timestamp=1699587514&_cdn_token=2780d23eaf48a199b4a34850ff1c2626079f341a
#EXTINF:-1 tvg-id="MX | Telehit" tvg-name="MX | Telehit" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Telehit_logo_2020.png/120px-Telehit_logo_2020.png" group-title="MUSICA Y REALITIES", Telehit
https://cdn3.eco.cdn.moderntv.eu/econocable/stream/TELEHITLATINO/20-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DTELEHITLATINO_stream_jm&_cdn_session=1419833795&_cdn_timestamp=1699587532&_cdn_token=64fb645e1847758866397849bc8afba7b8ee5f83
#EXTINF:-1 tvg-id="MX | Telehit Música" tvg-name="MX | Telehit Música" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Telehit_M%C3%BAsica_logo.png/145px-Telehit_M%C3%BAsica_logo.png" group-title="MUSICA Y REALITIES", Telehit Música
https://cdn3.eco.cdn.moderntv.eu/econocable/stream/TELEHITMUSICA/20-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DTELEHITMUSICA_stream_21&_cdn_session=1419834179&_cdn_timestamp=1699587538&_cdn_token=5cfa2a33a1f873d25597cdd34171fc1a7e1dabad
#EXTINF:-1 tvg-id="MX | Sin limites TV" tvg-name="MX | Sin limites TV" tvg-logo="https://www.claro.com.co/portal/recursos/co/cpp/promociones/imagenes/1543589165298-Imagen.png" group-title="MUSICA Y REALITIES", Sin limites TV
http://45.228.232.219:16000/play/a0l5/index.m3u8
#EXTINF:-1 tvg-id="CL | Zapping Music" tvg-name="CL | Zapping Music" tvg-logo="http://tv-online.cl/zapping-music-en-vivo.jpg?210921113151" group-title="MUSICA Y REALITIES", Zapping Music
https://zmlive.zappingtv.com/zm-free/zm.smil/playlist.m3u8
#EXTINF:-1 tvg-id="ES | Cadena Elite" tvg-name="ES | Cadena Elite" tvg-logo="https://www.cadenaelite.es/img/logoMenu.png" group-title="MUSICA Y REALITIES", Cadena Elite
https://cloudvideo.servers10.com:8081/8004/index.m3u8
#EXTINF:-1 tvg-id="CL | Zoom Back TV" tvg-name="CL | Zoom Back TV" tvg-logo="https://miplay.cl/wp-content/uploads/2022/01/ZOOM-BACK-FONDO-2-300x169.jpg" group-title="MUSICA Y REALITIES", Zoom Back TV
https://panel.miplay.cl:8081/zoomback/index.m3u8
#EXTINF:-1 tvg-id="USA | Mimusica Reggaeton" tvg-name="USA | Mimusica Reggaeton" tvg-logo="https://s3.vcdn.biz/static/f/5670663411/image.jpg" group-title="MUSICA Y REALITIES", Mimusica Reggaeton
http://179.189.222.226:8000/play/ch53
#EXTINF:-1 tvg-id="USA | Mimusica Popular" tvg-name="USA | Mimusica Popular" tvg-logo="https://pbs.twimg.com/media/FfuliqvXoAEuTtS?format=png&name=240x240" group-title="MUSICA Y REALITIES", Mimusica Popular
http://179.189.222.226:8000/play/ch56
#EXTINF:-1 tvg-id="USA | Mimusica Salsa" tvg-name="USA | Mimusica Salsa" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYN00MSM-jF9_kKysfWxoAy1FugIKukUrsVCAkyIX-1HNAiu1mACouInmwYlPGsacFvQ&usqp=CAU" group-title="MUSICA Y REALITIES", Mimusica Salsa
http://179.189.222.226:8000/play/ch55
#EXTINF:-1 tvg-id="USA | Mimusica Romántica" tvg-name="USA | Mimusica Romántica" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF3hIWJfpPueuL-xdOFKeX_QX75cWzWNDUmRaxjcNp4OmkT17HgpGwvuIIqyTRKHuA-w&usqp=CAU" group-title="MUSICA Y REALITIES", Mimusica Romántica
http://179.189.222.226:8000/play/ch54
#EXTINF:-1 tvg-id="USA | Mimusica Perú" tvg-name="USA | Mimusica Perú" tvg-logo="https://bittchannel.com/wp-content/uploads/2023/05/Logo-Mimusica-Peru-Alpha-AOriginal-e1687136439515-1024x362.png" group-title="MUSICA Y REALITIES", Mimusica Perú
http://45.189.117.202:48000/play/a02s/index.m3u8
#EXTINF:-1 tvg-id="CO | La Kalle TV" tvg-name="CO | La Kalle TV" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTRRtr619tHKwzAwhRCFmk-mSywt3iTukJdhg7h3jx4saUPB3o5ZPAkYLRxjqZr9oFW18&usqp=CAU" group-title="MUSICA Y REALITIES", La Kalle TV
http://162.212.152.104:25461/La_Kalle/La_Kalle/12
#EXTINF:-1 tvg-id="USA | Tu Canal Musical" tvg-name="USA | Tu Canal Musical" tvg-logo="https://yt3.googleusercontent.com/AHw0GtBW1ZM9P6dsjjsU8m6oLo9d3TqIrlwk6BxyaM80ROAcpzHT8t1b9jmDb8cztk-CCp_TNP8=s88-c-k-c0x00ffffff-no-rj" group-title="MUSICA Y REALITIES", Tu Canal Musical
https://video1.getstreamhosting.com:1936/8130/8130/playlist.m3u8
#EXTINF:-1 tvg-id="VE | Panavisión" tvg-name="VE | Panavisión" tvg-logo="http://www.panavision.tv/panavisiontv.png" group-title="MUSICA Y REALITIES", Panavisión
https://vcp.myplaytv.com/panavision/panavision/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Ritmo X" tvg-name="PE | Ritmo X" tvg-logo="https://pbs.twimg.com/media/FSNXFbLXEAAfwbH?format=jpg&name=small" group-title="MUSICA Y REALITIES", Ritmo X
http://170.81.240.10:8000/play/a00o/index.m3u8
#EXTINF:-1 tvg-id="AR | Rural TV" tvg-name="AR | Rural TV" tvg-logo="https://www.elrural.com/wp-content/themes/el-rural2016/images/canal-rural.png" group-title="CULTURA Y EDUCACION", Canal Rural
https://cda2.alsolnet.com/elrural/live/chunklist_w1152779177.m3u8
#EXTINF:-1 tvg-id="CO | TV Agro" tvg-name="CO | TV Agro" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/TV_Agro_logo.svg/245px-TV_Agro_logo.svg.png" group-title="CULTURA Y EDUCACION", TV Agro
http://45.191.234.189:15084/play/a02a/index.m3u8
#EXTINF:-1 tvg-id="CO | Agrotendencia TV" tvg-name="CO | Agrotendencia TV" tvg-logo="https://agrotendencia.tv/agropedia/wp-content/uploads/2020/11/logoat_mosca-150x150.png" group-title="CULTURA Y EDUCACION", Agrotendencia TV
https://5fc584f3f19c9.streamlock.net/agrotendencia/videoagrotendencia_hls1/chunklist_w653625610.m3u8
#EXTINF:-1 tvg-id="CL | TV Salud" tvg-name="CL | TV Salud" tvg-logo="https://miplay.cl/wp-content/uploads/2022/01/tvsalud-1920-1080-300x169.jpg" group-title="CULTURA Y EDUCACION", TV Salud
https://marine2.miplay.cl/tvsalud/playlist.m3u8
#EXTINF:-1 tvg-id="USA | Discovery Channel" tvg-name="USA | Discovery Channel" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2019_Discovery_logo.svg/180px-2019_Discovery_logo.svg.png" group-title="CULTURA Y EDUCACION", Discovery Channel
http://190.187.154.156:8000/play/a054/index.m3u8
#EXTINF:-1 tvg-id="USA | Discovery Science" tvg-name="USA | Discovery Science" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Science_Channel_logo.svg/150px-Science_Channel_logo.svg.png" group-title="CULTURA Y EDUCACION", Discovery Science
https://cdn1.eco.cdn.moderntv.eu/econocable/stream/DISCOVERYSCIENCE/40-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DDISCOVERYSCIENCE_stream_49&_cdn_session=1451308747&_cdn_timestamp=1700109570&_cdn_token=ca28a2d6331dfbe14bc69213ef9f01999fda6613
#EXTINF:-1 tvg-id="USA | Discovery Turbo" tvg-name="USA | Discovery Turbo" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Discovery_Turbo_logo.svg/180px-Discovery_Turbo_logo.svg.png" group-title="CULTURA Y EDUCACION", Discovery Turbo
http://livex.pop-app.live/s4n/poplive/ch556/playlist.m3u8
#EXTINF:-1 tvg-id="USA | Discovery World" tvg-name="USA | Discovery World" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/World_Discovery_HD_logo.svg/245px-World_Discovery_HD_logo.svg.png" group-title="CULTURA Y EDUCACION", Discovery World
http://190.102.139.244:8900/play/a0nx/index.m3u8
#EXTINF:-1 tvg-id="USA | Discovery Theater" tvg-name="USA | Discovery Theater" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/2015_Discovery_theater_HD_logo.svg/245px-2015_Discovery_theater_HD_logo.svg.png" group-title="CULTURA Y EDUCACION", Discovery Theater
http://190.187.154.156:8000/play/a0dk/index.m3u8
#EXTINF:-1 tvg-id="USA | Animal Planet" tvg-name="USA | Animal Planet" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/2018_Animal_Planet_logo.svg/200px-2018_Animal_Planet_logo.svg.png" group-title="CULTURA Y EDUCACION", Animal Planet
http://190.187.154.156:8000/play/a061/index.m3u8
#EXTINF:-1 tvg-id="USA | National Geographic" tvg-name="USA | National Geographic" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Natgeologo.svg/200px-Natgeologo.svg.png" group-title="CULTURA Y EDUCACION", National Geographic
http://livex.pop-app.live/s4n/poplive/ch509/playlist.m3u8
#EXTINF:-1 tvg-id="USA | History" tvg-name="USA | History" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/History_Logo.svg/100px-History_Logo.svg.png" group-title="CULTURA Y EDUCACION", History
http://190.187.154.156:8000/play/a04u/index.m3u8
#EXTINF:-1 tvg-id="USA | History 2" tvg-name="USA | History 2" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/History2Logo2019.png/110px-History2Logo2019.png" group-title="CULTURA Y EDUCACION", History 2
http://190.187.154.156:8000/play/a0a6/index.m3u8
#EXTINF:-1 tvg-id="CA | Love Nature" tvg-name="CA | Love Nature" tvg-logo="https://tv.lovenature.com/wp-content/uploads/2019/11/love_nature_logo_rgb_colour.png" group-title="CULTURA Y EDUCACION", Love Nature
http://190.187.154.156:8000/play/a06r/index.m3u8
#EXTINF:-1 tvg-id="CL | Atlas" tvg-name="CL | Atlas" tvg-logo="https://pbs.twimg.com/media/FvKvGG_WIAIXoG5?format=png&name=240x240" group-title="CULTURA Y EDUCACION", Atlas
http://190.110.109.104:52321/play/a017/index.m3u8
#EXTINF:-1 tvg-id="USA | EWTN (Red de Televisión de la Palabra Eterna)" tvg-name="USA | EWTN (Red de Televisión de la Palabra Eterna)" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/New_EWTN_logo.jpg/200px-New_EWTN_logo.jpg" group-title="RELIGIOSOS", EWTN
https://1654596987.rsc.cdn77.org/1654596987/tracks-v2a1/mono.m3u8
#EXTINF:-1 tvg-id="MX | María Visión" tvg-name="MX | María Visión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/9/91/Maria-vision.jpg" group-title="RELIGIOSOS", María Visión
https://1601580044.rsc.cdn77.org/live/_jcn_/amlst:Mariavision/playlist.m3u8
#EXTINF:-1 tvg-id="AR | Orbe 21" tvg-name="AR | Orbe 21" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Canal_Orbe_21_logo.svg/245px-Canal_Orbe_21_logo.svg.png" group-title="RELIGIOSOS", Orbe 21
https://cdn2.zencast.tv:30443/orbe/orbe21smil/playlist.m3u8
#EXTINF:-1 tvg-id="USA | El Sembrador TV" tvg-name="USA | El Sembrador TV" tvg-logo="https://elsembradorministries.com/esne_deployment/images/logo_azul.png" group-title="RELIGIOSOS", ESNE TV
http://190.149.66.90:4000/play/a02o/index.m3u8
#EXTINF:-1 tvg-id="DE | Sophia TV" tvg-name="DE | Sophia TV" tvg-logo="https://static.filmon.com/assets/channels/6191/extra_big_logo.png" group-title="RELIGIOSOS", Sophia TV
https://ott2.hdlatam.tv/live_abr/Stream53/playlist.m3u8
#EXTINF:-1 tvg-id="PE | JN19" tvg-name="PE | JN19" tvg-logo="http://www.jn19television.com/templates/televid_23/images/object979167786.png" group-title="RELIGIOSOS", JN19 Televisión
https://servilive.com:3149/live/jn19tvlive.m3u8
#EXTINF:-1 tvg-id="PE | JN19.2" tvg-name="PE | JN19.2" tvg-logo="https://play-lh.googleusercontent.com/D_ECmZFH6u6l4Tday-ZLPFizqNgPpVQKe3eCn057VwzXQMBVmv4jb9GYmC8vMTo-yYA=w240-h480-rw" group-title="RELIGIOSOS", JN19.2 Televisión
https://ott1.hdlatam.tv/live_abr/Stream9/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Pax TV" tvg-name="PE | Pax TV" tvg-logo="https://1.bp.blogspot.com/-HlPEKE-AIis/XxkeJ9xDD-I/AAAAAAAAKb8/2jlLvr345lM87XHXSdF5mFI8snqFIuzvQCLcBGAsYHQ/s1600/pax-tv.png" group-title="RELIGIOSOS", Pax TV
https://d1oxkaep074koq.cloudfront.net/out/v1/6657a374459f4821b404e16161c98588/playlist.m3u8
#EXTINF:-1 tvg-id="DO | La Voz de María" tvg-name="DO | La Voz de María" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLTRyXwicJcx52VUr5lYKMVMnrvlwvhS4HFMFr-W=s900-c-k-c0x00ffffff-no-rj" group-title="RELIGIOSOS", La Voz de María TV
http://51.81.93.239:8084/hls/lavozdemaria.m3u8
#EXTINF:-1 tvg-id="DO | Tele Vida" tvg-name="DO | Tele Vida" tvg-logo="https://televida.org.do/wp-content/uploads/2018/02/LOGOS_TELEVIDA_Movil-01.png" group-title="RELIGIOSOS", Tele Vida
http://181.189.243.254:8000/play/a0of/index.m3u8
#EXTINF:-1 tvg-id="NI | JBN Canal 39" tvg-name="NI | JBN Canal 39" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLSFAwOxRl_Q_NdWj-oIOGI7e7VC7UoNrdt3Kqm3=s88-c-k-c0x00ffffff-no-rj" group-title="RELIGIOSOS", JBN Canal 39
https://inliveserver.com:1936/17504/17504/playlist.m3u8
#EXTINF:-1 tvg-id="CR | San José TV" tvg-name="CR | San José TV" tvg-logo="https://crtn.org/wp-content/uploads/ultimatemember/532/profile_photo-190x190.jpg?1662519451" group-title="RELIGIOSOS", San José TV
https://rtmp.info/sanjosetv/envivo/playlist.m3u8
#EXTINF:-1 tvg-id="GT | Jesús TV" tvg-name="GT | Jesús TV" tvg-logo="https://image.jimcdn.com/app/cms/image/transf/dimension=451x10000:format=png/path/s198f7be6c90b5aac/image/i8fae4ee760f1a4c4/version/1512317356/image.png" group-title="RELIGIOSOS", Jesús TV
https://cdn.streamhispanatv.net:3189/live/jesustvlive.m3u8
#EXTINF:-1 tvg-id="SV | Televisión Católica Arquidiocesana" tvg-name="SV | Televisión Católica Arquidiocesana" tvg-logo="https://e37379c613.cbaul-cdnwnd.com/8191f8fb2663827d6832f15f6cac7288/200000008-c59cec6961/450/Logo%20TVCa%202017.png?ph=e37379c613" group-title="RELIGIOSOS", Televisión Católica Arquidiocesana
https://ssh101.bozztv.com/ssh101/tvcaelsalvador/playlist.m3u8?fm=hls
#EXTINF:-1 tvg-id="CL | Nuevo Tiempo" tvg-name="CL | Nuevo Tiempo" tvg-logo="https://www.nuevotiempo.org/wp-content/uploads/sites/6/2020/03/logo-teste-novo-tempo-02-ES.png" group-title="RELIGIOSOS", Nuevo Tiempo
https://stream.live.novotempo.com/tv/smil:tvnuevotiempo.smil/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Nuevo Tiempo" tvg-name="BR | Nuevo Tiempo" tvg-logo="https://www.nuevotiempo.org/wp-content/uploads/sites/6/2020/03/logo-teste-novo-tempo-02-ES.png" group-title="RELIGIOSOS", Nuevo Tiempo || Brasil
https://stream.live.novotempo.com/tv/smil:tvnovotempo.smil/playlist.m3u8
#EXTINF:-1 tvg-id="USA | Hope Channel" tvg-name="USA | Hope Channel" tvg-logo="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/HopeChannelFVweb.png/250px-HopeChannelFVweb.png" group-title="RELIGIOSOS", Hope Channel
https://videodelivery.net/75bc18929102141938b334b01793ca3e/manifest/video.m3u8
#EXTINF:-1 tvg-id="USA | Esperanza TV" tvg-name="USA | Esperanza TV" tvg-logo="https://images.squarespace-cdn.com/content/v1/556da91de4b010ed6e0bddff/1442361594280-58B1XRFMF2CIL5843DQY/image-asset.png" group-title="RELIGIOSOS", Esperanza TV
https://videodelivery.net/a23831aa01c4a0fd802360b889ea96ed/manifest/video.m3u8
#EXTINF:-1 tvg-id="USA | 3ABN Latino" tvg-name="USA | 3ABN Latino" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/3ABN_logo.svg/250px-3ABN_logo.svg.png" group-title="RELIGIOSOS", 3ABN Latino
https://3abn-live.akamaized.net/hls/live/2010547/Latino/master.m3u8
#EXTINF:-1 tvg-id="NI | TV 45 - 3ABN" tvg-name="NI | TV 45 - 3ABN" tvg-logo="https://www.3abnnicaragua.tv/Imagenes/Inicio/Logos/LogoAdventista2.svg" group-title="RELIGIOSOS", TV 45-3ABN
https://inliveserver.com:1936/17514/17514/playlist.m3u8
#EXTINF:-1 tvg-id="BO | Red Advenir" tvg-name="BO | Red Advenir" tvg-logo="https://play-lh.googleusercontent.com/4Yc7linfAhC8W4T_era7neuHS4hTC8w_noI_kY7_5ffgOvZnOHsjJ1rB9UsUsd3omibw" group-title="RELIGIOSOS", Red Advenir
http://streamer1.streamhost.org:1935/salive/GMIredadvenirm/chunklist_w484510804.m3u8
#EXTINF:-1 tvg-id="CO | Avivamiento TV" tvg-name="CO | Avivamiento TV" tvg-logo="https://avivamiento.com/images/all-images/tv/tv.png" group-title="RELIGIOSOS", Avivamiento Televisión
https://s2.abntelevision.com/avivamientoabr/stream/playlist.m3u8
#EXTINF:-1 tvg-id="CO | Vida Nueva TV" tvg-name="CO | Vida Nueva TV" tvg-logo="https://mividanueva.org/wp-content/uploads/2021/02/Logo-Horizontal.png" group-title="RELIGIOSOS", Vida Nueva Televisión
https://eu1.servers10.com:8081/vidanuevatv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="GT | Aviva TV" tvg-name="GT | Aviva TV" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLSM3HEMfwrQ_Lje8hIq7ausj9Dhm4UR0Es3UVUs=s88-c-k-c0x00ffffff-no-rj" group-title="RELIGIOSOS", Aviva Televisión
https://5bff1bf18a887.streamlock.net/avivamientotv/avivamientotv/playlist.m3u8
#EXTINF:-1 tvg-id="DO | El Viviente TV" tvg-name="DO | El Viviente TV" tvg-logo="https://image.roku.com/developer_channels/prod/f74787def518f73a0059e57f99e108d137bdaa0483fefacfca1b700b22a8833b.png" group-title="RELIGIOSOS", El Viviente TV
https://elvivientetv.streamgato.us:3302/live/elvivientetvlive.m3u8
#EXTINF:-1 tvg-id="AR | Solidaria TV" tvg-name="AR | Solidaria TV" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLRvGzClf1TW0zlf861XH256v1NGLQ0FdkvMJ8Sc7g=s88-c-k-c0x00ffffff-no-rj" group-title="RELIGIOSOS", Solidaria Televisión
https://canadaremar2.todostreaming.es/live/argentina-web.m3u8
#EXTINF:-1 tvg-id="USA | Sumtv Latino" tvg-name="USA | Sumtv Latino" tvg-logo="https://i.shgcdn.com/162414fb-323b-4e86-80ea-52b8abfec334/-/format/auto/-/preview/3000x3000/-/quality/lighter/" group-title="RELIGIOSOS", Sumtv Latino
https://bozztv.com:443/uni10rtmp/ssstv2-cdn/smil:ssstv2-iphone.smil/chunklist_b1152000.m3u8
#EXTINF:-1 tvg-id="USA | Cristiana TV" tvg-name="USA | Cristiana TV" tvg-logo="https://www.cristianatv.com/sitepad-data/uploads/2023/01/logo-1.png" group-title="RELIGIOSOS", Cristiana TV
https://stmv2.voxtvhd.com.br/cristianatv/cristianatv/playlist.m3u8
#EXTINF:-1 tvg-id="USA | CBN" tvg-name="USA | CBN" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/CBN_Network_logo.svg/245px-CBN_Network_logo.svg.png" group-title="RELIGIOSOS", CBN
https://bcovlive-a.akamaihd.net/r21fb8503a4a74d098b798f16922b2a36/us-east-1/734546207001/playlist.m3u8
#EXTINF:-1 tvg-id="USA | Aliento Visión" tvg-name="USA | Aliento Visión" tvg-logo="https://images.squarespace-cdn.com/content/v1/5553563ae4b08689b8eeaf65/1431525670594-U13DGVS6OE3CYZJ5F1Y4/logo+AV.png?format=1500w" group-title="RELIGIOSOS", Aliento Visión
https://627bb251f23c7.streamlock.net:444/Alientoenvivo/smil:Alientoenvivo.smil/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Cielo TV" tvg-name="DO | Cielo TV" tvg-logo="https://photos.live-tv-channels.org/tv-logo/do-cielo-tv-cristiana-3072.jpg" group-title="RELIGIOSOS", Cielo TV
https://streaming.servervideo.net:1936/cielotv/cielotv/playlist.m3u8
#EXTINF:-1 tvg-id="ES | Radio Televisión Vida" tvg-name="ES | Radio Televisión Vida" tvg-logo="https://vidartv.com/images/logo.png" group-title="RELIGIOSOS", Radio Televisión Vida
https://vidartv2.todostreaming.es/live/radiovida-emisiontvsd.m3u8
#EXTINF:-1 tvg-id="CR | Enlace" tvg-name="CR | Enlace" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Enlace_Televisi%C3%B3n_logo.svg/320px-Enlace_Televisi%C3%B3n_logo.svg.png" group-title="RELIGIOSOS", Enlace
http://daleplay.club:8080/listatbsdaleplay22/listatbsdaleplaypararepetircanales/141247
#EXTINF:-1 tvg-id="EC | Asomavisión" tvg-name="EC | Asomavisión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/AsomaVisi%C3%B3n.jpg/245px-AsomaVisi%C3%B3n.jpg" group-title="RELIGIOSOS", Asomavisión
https://asomatv.duckdns.org/livestream/stream.m3u8
#EXTINF:-1 tvg-id="EC | TV Universal" tvg-name="EC | TV Universal" tvg-logo="https://image.roku.com/developer_channels/prod/0d2b580827d5f53a219ff1ead6f13ab436060e612082a452ddce011237e7cf69.png" group-title="RELIGIOSOS", TV Universal
https://streamingwowza.com:19360/universal/universal.m3u8
#EXTINF:-1 tvg-id="PE | La Luz Televisión" tvg-name="PE | La Luz Televisión" tvg-logo="http://radiolaluz.com/wp-content/themes/laluz/images/logo_tv.png" group-title="RELIGIOSOS", La Luz Televisión
http://ott.streann.com:8080/loadbalancer/services/public/channels/59ce7f292cdc7ba015a93b82/playlist.m3u8
#EXTINF:-1 tvg-id="CR | Extrema TV" tvg-name="CR | Extrema TV" tvg-logo="http://radioextremacr.com/img/logo.png" group-title="RELIGIOSOS", Extrema TV
http://livestreamcdn.net:1935/ExtremaTV/ExtremaTV/playlist.m3u8
#EXTINF:-1 tvg-id="VE | Nubeh TV" tvg-name="VE | Nubeh TV" tvg-logo="https://play-lh.googleusercontent.com/CxJIcLj5Wkxn-iGk6F68U2aHDovJ_r9HFfBFxSDqE1bFN9rMbYEAjfMyeCUPmxis7Q=w240-h480-rw" group-title="RELIGIOSOS", Nubeh TV
https://vcp.myplaytv.com/nubehtv/nubehtv/playlist.m3u8
#EXTINF:-1 tvg-id="USA | Aleluya TV" tvg-name="USA | Aleluya TV" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/9080db964ad0215d2ddeea5137b35e0f.webp" group-title="RELIGIOSOS", Aleluya TV
https://vsrv2.az-streamingserver.com:3408/live/aleluyatvlive.m3u8
#EXTINF:-1 tvg-id="HN | TV Estrella" tvg-name="HN | TV Estrella" tvg-logo="https://www.tvestrella.com/wp-content/uploads/2022/05/cropped-logo-22-transparente-4-150x150.png" group-title="RELIGIOSOS", TV Estrella
https://emisoras.hn:8081/tvestrella/index.m3u8
#EXTINF:-1 tvg-id="USA | Unción TV" tvg-name="USA | Unción TV" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/80e5bef97f4728cbb7b06b4edaded014.webp" group-title="RELIGIOSOS", Unción TV
https://livemediacp.com:1936/8042/8042/playlist.m3u8
#EXTINF:-1 tvg-id="PA | Hosanna Visión" tvg-name="PA | Hosanna Visión" tvg-logo="https://hosannavision.com/site/templates/theme/img/logo/logo.png" group-title="RELIGIOSOS", Hosanna Visión
https://1206618505.rsc.cdn77.org/LS-ATL-59020-1/index.m3u8
#EXTINF:-1 tvg-id="GT | El Olam TV" tvg-name="GT | El Olam TV" tvg-logo="https://tvguatemala.net/wp-content/uploads/2022/11/En-Vivo-El-Olam-TV-Guatemala-e1669830021817.webp" group-title="RELIGIOSOS", El Olam TV
https://video1.getstreamhosting.com:1936/8476/8476/playlist.m3u8
#EXTINF:-1 tvg-id="USA | Maranatha TV" tvg-name="USA | Maranatha TV" tvg-logo="https://play-lh.googleusercontent.com/4oN0zvsolZ9XWuafAKWB9q1-KZlsTjDPzulcKQf1Ssl8SL8VPi1iQDH7JEzy8dCgs2yi" group-title="RELIGIOSOS", Maranatha TV
https://amigofx.com:1936/maranathatv/maranathatv/playlist.m3u8
#EXTINF:-1 tvg-id="VE | Reforma TV" tvg-name="VE | Reforma TV" tvg-logo="https://i0.wp.com/directostv.teleame.com/wp-content/uploads/2018/05/reforma-tv-1.png?resize=696%2C435&ssl=1" group-title="RELIGIOSOS", Reforma TV
https://5bf8041cb3fed.streamlock.net/ReformaTV/ReformaTV/playlist.m3u8
#EXTINF:-1 tvg-id="GT | MCN Televisión" tvg-name="GT | MCN Televisión" tvg-logo="https://mcntelevision.org/wp-content/uploads/2020/10/MCN-Blanco-Degradado-con-television.png" group-title="RELIGIOSOS", MCN Televisión
https://stmv.panel.grupolimalive.com/mcntv/mcntv/playlist.m3u8
#EXTINF:-1 tvg-id="GT | Rhema TV" tvg-name="GT | Rhema TV" tvg-logo="https://yt3.ggpht.com/WyU6mJUfDaUH4nHhFsyZLqk-Flw_TwC4z-10k2_YXRW5HjEx9TjCXdyqk-JqLFLAHoVrfAgU=s900-c-k-c0x00ffffff-no-rj" group-title="RELIGIOSOS", Rhema TV
https://5e85d90130e77.streamlock.net/6006/6006/playlist.m3u8
#EXTINF:-1 tvg-id="GT | Peniel TV" tvg-name="GT | Peniel TV" tvg-logo="https://static.wixstatic.com/media/7acae1_42bd234fc16342f4bf4451ab07d12946~mv2.png" group-title="RELIGIOSOS", Peniel TV
https://cdn.streamhispanatv.net:3840/live/penielfamlive.m3u8
#EXTINF:-1 tvg-id="GT | Peniel Kids & Young TV" tvg-name="GT | Peniel Kids & Young TV" tvg-logo="https://static.wixstatic.com/media/7acae1_7effe8592a36420db487e00f22a04fa0~mv2.png" group-title="RELIGIOSOS", Peniel Kids & Young TV
https://cdn.streamhispanatv.net:3155/live/penielkidslive.m3u8
#EXTINF:-1 tvg-id="GT | Peniel Musical TV" tvg-name="GT | Peniel Musical TV" tvg-logo="https://static.wixstatic.com/media/7acae1_4de9f35196f946b396cb18a58fb9c041~mv2.png" group-title="RELIGIOSOS", Peniel Musical TV
https://cdn.streamhispanatv.net:3533/live/penielmusicagtlive.m3u8
#EXTINF:-1 tvg-id="PE | Bethel TV" tvg-name="PE | Bethel TV" tvg-logo="https://directostv.teleame.com/wp-content/uploads/2017/10/Bethel-Televisi%C3%B3n-en-vivo-Online-100x70.png" group-title="RELIGIOSOS", Bethel TV
https://cdn1.eco.cdn.moderntv.eu/econocable/stream/BETHEL/40-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DBETHEL_stream_wm&_cdn_session=1359487043&_cdn_timestamp=1699114845&_cdn_token=8116b211787c4e3861bc9a9f25f00eaf547d210b
#EXTINF:-1 tvg-id="PE | Perú Mágico" tvg-name="PE | Perú Mágico" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Peru_magico.png/200px-Peru_magico.png" group-title="INTERNACIONALES", Perú Mágico
http://190.102.139.241:8900/play/a0to/index.m3u8
#EXTINF:-1 tvg-id="USA | TV Peruanísima" tvg-name="USA | TV Peruanísima" tvg-logo="http://tvperuanisima.com/wp-content/uploads/2021/07/cropped-Logo-150x113-1.png" group-title="INTERNACIONALES", TV Peruanísima
http://k4.usastreams.com/TVperuanisima/TVperuanisima/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Perú Channel" tvg-name="BR | Perú Channel" tvg-logo="https://pbs.twimg.com/profile_images/1385792142329647107/iBTUTc12_400x400.jpg" group-title="INTERNACIONALES", Perú Channel
https://ott1.hdlatam.tv/live/Peruchannel/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Onda Digital" tvg-name="PE | Onda Digital" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLQRrS2R_HFcGI0RVqhw9IN02y3s05eq4oq10yZ5UQ=s88-c-k-c0x00ffffff-no-rj" group-title="REGIONALES", Onda Digital Noticias
https://v4.tustreaming.cl/ondadigitaltv/index.m3u8
#EXTINF:-1 tvg-id="PE | Onda Digital 2" tvg-name="PE | Onda Digital 2" tvg-logo="https://i0.wp.com/ondadigitaltv.com/wp-content/uploads/2020/07/LOGO-ODTV-2.png?resize=300%2C269&ssl=1" group-title="REGIONALES", Onda Digital 2
https://v4.tustreaming.cl/odtv2/index.m3u8
#EXTINF:-1 tvg-id="PE | Bh TV" tvg-name="PE | Bh TV" tvg-logo="https://pbs.twimg.com/media/FSXrlXTWQAEGTSu?format=jpg&name=medium" group-title="REGIONALES", BH Televisión || Lima
https://5c3fb01839654.streamlock.net:1963/iptvbhtv/livebhtvtv/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Visión Noticias Perú" tvg-name="PE | Visión Noticias Perú" tvg-logo="https://www.vnp.pe/wp-content/uploads/2020/11/logo-vnp-color.png" group-title="REGIONALES", VNP || Lima
https://multimedia.tmcreativos.com:1936/visionnoticias/visionnoticias/playlist.m3u8
#EXTINF:-1 tvg-id="PE | QUVO Teve Empresa" tvg-name="PE | QUVO Teve Empresa" tvg-logo="https://media-exp1.licdn.com/dms/image/C4D0BAQHBJhDs6-ZbNQ/company-logo_200_200/0/1589815974379?e=2147483647&v=beta&t=EHFypU7gpyeZEF2o92AzGgeJ8HDQwbIaURH-yVEY15w" group-title="REGIONALES", QUVO Teve Empresa || Lima
https://cdn2.eco.cdn.moderntv.eu/econocable/stream/TVEMPRESA/40-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DTVEMPRESA_stream_yi&_cdn_session=1454405971&_cdn_timestamp=1700156694&_cdn_token=e596c0fa5737c68acce8d5188cc2f49bacc5c7b6
#EXTINF:-1 tvg-id="PE | Asiri TV" tvg-name="PE | Asiri TV" tvg-logo="https://graph.facebook.com/904990302901417/picture?type=large" group-title="REGIONALES", Asiri Televisión || Lima
https://video2.lhdserver.es/asiritv/live.m3u8
#EXTINF:-1 tvg-id="PE | Intuitiva TV" tvg-name="PE | Intuitiva TV" tvg-logo="https://pbs.twimg.com/media/FVyWpMHXsAUe7UU?format=png&name=small" group-title="REGIONALES", Intuitiva TV || Lima
https://video2.lhdserver.es/cableperu/live.m3u8
#EXTINF:-1 tvg-id="PE | Cultura 24" tvg-name="PE | Cultura 24" tvg-logo="https://cultura24.tv/sites/default/files/inline-images/logo.png" group-title="REGIONALES", Cultura 24 TV || Lima
http://vs8.live.opencaster.com/cultura24/smil:cultura24/chunklist_w366215588_b564000_sles.m3u8
#EXTINF:-1 tvg-id="PE | Vamisa TV" tvg-name="PE | Vamisa TV" tvg-logo="https://radiovamisa.tv/wp-content/uploads/2020/03/logo-1.png" group-title="REGIONALES", Vamisa TV || Lima
https://inliveserver.com:1936/9502/9502/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Canal B" tvg-name="PE | Canal B" tvg-logo="http://core1.hdlatam.tv/media/images/channel/WhatsApp_Image_2022-11-10_at_6.03.46_PM.jpeg" group-title="REGIONALES", Canal B || Lima
https://ott1.hdlatam.tv/live/CanalB/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Monterrico TV" tvg-name="PE | Monterrico TV" tvg-logo="https://hipodromodemonterrico.com.pe/generales_logos_hipodromos/logo_mont.gif" group-title="REGIONALES", Monterrico TV || Lima
http://vs8.live.opencaster.com/20100152275/jcpstream/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Sumac TV" tvg-name="PE | Sumac TV" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLRkCtud5pzoChHufH1ByO4QaQ1R1nmavjaNH3YY=s88-c-k-c0x00ffffff-no-rj" group-title="REGIONALES", Sumac TV || Lima
https://vps1.lnx.pe/sumactv-web/envivo/index.m3u8
#EXTINF:-1 tvg-id="PE | Red de Comunicación Regional" tvg-name="PE | Red de Comunicación Regional" tvg-logo="https://www.rcrperu.com/wp-content/uploads/2019/10/logo-rcr.png" group-title="REGIONALES", RCR TV || Lima
https://5c3fb01839654.streamlock.net:1963/iptvrcrperu/livercrperutv/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Señal Perú TV" tvg-name="PE | Señal Perú TV" tvg-logo="https://señalperutv.pe/wp-content/uploads/2022/08/mg_2.gif" group-title="REGIONALES", Señal Perú TV || Surquillo; Lima
https://livestream.perucast.com/hls/stream_low/index.m3u8
#EXTINF:-1 tvg-id="PE | Trivu TV" tvg-name="PE | Trivu TV" tvg-logo="https://trivutv.com/assets/images/header/LOGO_01.svg" group-title="REGIONALES", Trivu TV || San Isidro; Lima
https://servilive.com:3244/live/trivutvlive.m3u8
#EXTINF:-1 tvg-id="PE | Central TV" tvg-name="PE | Central TV" tvg-logo="https://graph.facebook.com/CentralTVperuLima/picture?width=320&height=320" group-title="REGIONALES", Central TV || Lima
https://5c3fb01839654.streamlock.net:1963/iptvcentraltv/livecentraltvtv/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Identidad TV" tvg-name="PE | Identidad TV" tvg-logo="https://www.identidad.tv/media-identidadtv/2021/07/nuevo-logo-identidad.png" group-title="REGIONALES", Identidad TV || Lima
https://5c3fb01839654.streamlock.net:1963/iptvrci/livercitv/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Sin TV" tvg-name="PE | Sin TV" tvg-logo="https://sintvperu.com/wp-content/uploads/2022/08/cropped-2.png" group-title="REGIONALES", Sin TV || Lima
https://inliveserver.com:1936/19004/19004/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Latin Cable TV" tvg-name="PE | Latin Cable TV" tvg-logo="https://www.latincable.pe/images/logo.png" group-title="REGIONALES", Latin Cable TV || Lima
https://mserver.latincable.net/LatinHuari/index.m3u8
#EXTINF:-1 tvg-id="PE | Onda Digital TV" tvg-name="PE | Onda Digital TV" tvg-logo="http://core1.hdlatam.tv/media/images/channel/LOGO_ONDA_DIGITAL_TV_Lima.png" group-title="REGIONALES", Onda Digital TV || Lima
https://ott1.hdlatam.tv/live/ondaTV/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Pro TV Kachorro" tvg-name="PE | Pro TV Kachorro" tvg-logo="https://www.kachorroprotv.com/wp-content/uploads/2021/04/logo-kachorro.jpg" group-title="REGIONALES", Pro TV Kachorro || Lima
https://tvdatta.com:3517/live/kachorrotvlive.m3u8
#EXTINF:-1 tvg-id="PE | Región TV" tvg-name="PE | Región TV" tvg-logo="https://regionteve.com/wp-content/uploads/2020/12/REGIONTV7.png" group-title="REGIONALES", Región TV || Callao
https://servilive.com:3757/live/regiontvlive.m3u8
#EXTINF:-1 tvg-id="PE | Hechicera TV" tvg-name="PE | Hechicera TV" tvg-logo="https://diariohechicera.com/wp-content/uploads/2021/08/NEWlogo_hechicera@2x.png" group-title="REGIONALES", Hechicera TV || Tumbes
https://panel.streamingtv-mediacp.online:1936/8108/8108/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Tumpis TV" tvg-name="PE | Tumpis TV" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLTZD3NA2RjS1ingWVBdTcATdEzv-tn3NgdLTjZr=s88-c-k-c0x00ffffff-no-rj" group-title="REGIONALES", Tumpis TV || Tumbes
https://servilive.com:3531/stream/play.m3u8
#EXTINF:-1 tvg-id="PE | Piura TV" tvg-name="PE | Piura TV" tvg-logo="http://core1.hdlatam.tv/media/images/channel/PiuraTVCanal.png" group-title="REGIONALES", Piura TV || Piura
https://ott1.hdlatam.tv/live/SRT_PiuraTV/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Piura Plus TV" tvg-name="PE | Piura Plus TV" tvg-logo="http://core1.hdlatam.tv/media/images/channel/LogoOficialPiuraPlusTv.png" group-title="REGIONALES", Piura Plus TV || Piura
https://ott1.hdlatam.tv/live/piura/PiuraPlusTV/playlist.m3u8
#EXTINF:-1 tvg-id="PE | TVO Canal 31" tvg-name="PE | TVO Canal 31" tvg-logo="http://core1.hdlatam.tv/media/images/channel/tvo.jpg" group-title="REGIONALES", TVO Canal 31 || Piura
https://ott1.hdlatam.tv/live/piura/TVO/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Radio TV Catacaos" tvg-name="PE | Radio TV Catacaos" tvg-logo="https://play-lh.googleusercontent.com/VLpL-p1oz2SxYaweCoRufLeV6DjCt4zqE5PHZeDGpGGcwgkYg0imxolbEFLd75ZqDFs=w240-h480-rw" group-title="REGIONALES", Radio TV Catacaos || Catacaos; Piura
https://hls.servidor.stream/storage/radiocatacaos.m3u8
#EXTINF:-1 tvg-id="PE | Canal 8 Catacaos" tvg-name="PE | Canal 8 Catacaos" tvg-logo="https://www.canal8catacaos.com/wp-content/uploads/2021/01/canal8logo.png" group-title="REGIONALES", Canal 8 Catacaos || Catacaos; Piura
https://tvdatta.com:3838/live/canalcatacaoslive.m3u8
#EXTINF:-1 tvg-id="PE | Palmeras TV" tvg-name="PE | Palmeras TV" tvg-logo="https://grupopalmerastv.com/portal/wp-content/uploads/2021/04/logo-vertical.png" group-title="REGIONALES", Palmeras TV || Distrito de La Unión; Bajo Piura
https://video.ingenioperu.com:3982/live/palmerastvlive.m3u8
#EXTINF:-1 tvg-id="PE | Clips TV" tvg-name="PE | Clips TV" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLSf-gnmJJq2Q_TJ4yCg_ZpuMp--UUb_MrHN5D7Z=s900-c-k-c0x00ffffff-no-rj" group-title="REGIONALES", Clips TV || Sechura; Piura
https://7.innovatestream.pe:19360/clipstv/clipstv.m3u8
#EXTINF:-1 tvg-id="PE | Lot Plus TV" tvg-name="PE | Lot Plus TV" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLR6iGa3A35AnYAm29YkkDJahn0mzAQZYDU9q5LJ=s88-c-k-c0x00ffffff-no-rj" group-title="REGIONALES", Lot Plus TV || Chiclayo
https://stmv.panel.grupolimalive.com/lotplustv/lotplustv/playlist.m3u8
#EXTINF:-1 tvg-id="PE | TV Cosmos" tvg-name="PE | TV Cosmos" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Tv_cosmos.jpg/245px-Tv_cosmos.jpg" group-title="REGIONALES", TV Cosmos || Trujillo
https://ott1.hdlatam.tv/live/tvcosmos/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Sol TV" tvg-name="PE | Sol TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Sol_tv_pe.png/150px-Sol_tv_pe.png" group-title="REGIONALES", Sol TV || Trujillo
https://video03.logicahost.com.br/soltv/soltv/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Caribe TV" tvg-name="PE | Caribe TV" tvg-logo="https://play-lh.googleusercontent.com/RWwrMM2sqjOulasmAQhS86CiDLLJa66Kan9ru_cypXFu97qaPIECyEI5ilrzKF9sHg=s180-rw" group-title="REGIONALES", Caribe TV || Otuzco
http://200.48.184.156:1935/caribetv/caribetv/playlist.m3u8
#EXTINF:-1 tvg-id="PE | RTV Oasis" tvg-name="PE | RTV Oasis" tvg-logo="http://oasisrtv.com/wp-content/uploads/2021/07/cropped-00000001-5-1.png" group-title="REGIONALES", RTV Oasis || Pacasmayo
https://7.innovatestream.pe:19360/oasisrtv/oasisrtv.m3u8
#EXTINF:-1 tvg-id="PE | Cajamarca TV" tvg-name="PE | Cajamarca TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cajamarca_TV.png" group-title="REGIONALES", Cajamarca TV || Cajamarca
https://ca2.inka.net.pe/cajamarcatv/index.m3u8?token=f7aa4bac9c1e6867fc9e3eae6c96c200a343811a-7bc952aafcf4b3e07b06e76074aee597-1698763945-1698756745&remote=181.176.137.24
#EXTINF:-1 tvg-id="PE | Creo TV" tvg-name="PE | Creo TV" tvg-logo="https://graph.facebook.com/CanalCreoTv/picture?width=320&height=320" group-title="REGIONALES", Creo TV || Cajamarca
https://ott1.hdlatam.tv/live/CreoTV/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Creo Movie TV" tvg-name="PE | Creo Movie TV" tvg-logo="http://core1.hdlatam.tv/media/images/channel/IMG-20220119-WA0018.jpg" group-title="REGIONALES", Creo Movie TV || Cajamarca
https://ott1.hdlatam.tv/live/Creomovie/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Urbano TV" tvg-name="PE | Urbano TV" tvg-logo="http://core1.hdlatam.tv/media/images/channel/logo-urbanotv.png" group-title="REGIONALES", Urbano TV || Cajamarca
https://ott1.hdlatam.tv/live/Creo_Urbano/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Te quiero TV" tvg-name="PE | Te quiero TV" tvg-logo="http://core1.hdlatam.tv/media/images/channel/logo-tequierotv.png" group-title="REGIONALES", Te quiero TV || Cajamarca
https://ott1.hdlatam.tv/live/tequierotv/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Impacto Televisión" tvg-name="PE | Impacto Televisión" tvg-logo="https://graph.facebook.com/WWW.RADIOIMPACTODECAJAMARCA.COM.PE/picture?width=320&height=320" group-title="REGIONALES", Impacto Televisión || Cajamarca
https://cloudvideo.servers10.com:8081/impactotv/index.m3u8
#EXTINF:-1 tvg-id="PE | Turbo Mix Televisión" tvg-name="PE | Turbo Mix Televisión" tvg-logo="https://directostv.teleame.com/wp-content/uploads/2017/10/Radio-Turbo-Mix-TV-en-vivo-Online-100x70.png" group-title="REGIONALES", Turbo Mix Televisión || Cajamarca
https://7.innovatestream.pe:19360/turbomixoficial/turbomixoficial.m3u8
#EXTINF:-1 tvg-id="PE | Radio Televisión Charles" tvg-name="PE | Radio Televisión Charles" tvg-logo="http://core1.hdlatam.tv/media/images/channel/RTVC.jpeg" group-title="REGIONALES", Radio Televisión Charles || Cajamarca
https://ott1.hdlatam.tv/live/cajamarca/RTVC/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Cutervo TV" tvg-name="PE | Cutervo TV" tvg-logo="https://cutervotv.com/wp-content/uploads/2023/02/cropped-cropped-LOGO_1-1.png" group-title="REGIONALES", Cutervo TV || Cutervo
https://vdo.grupolimalive.com:3601/live/cutervotvlive.m3u8
#EXTINF:-1 tvg-id="PE | Aura TV" tvg-name="PE | Aura TV" tvg-logo="https://pbs.twimg.com/media/F2LIXbSXAAEYDm-?format=png&name=small" group-title="REGIONALES", Aura TV || Chota
http://177.53.153.21:8001/play/a0b8/index.m3u8
#EXTINF:-1 tvg-id="PE | XTV" tvg-name="PE | XTV" tvg-logo="https://yt3.ggpht.com/x3C0xu-ay9CuUpMSJXpuCJpMbkEKpyxhLDuJxACa3eUqozbJ2Od8VlGMWgbDt4WZnTB_EwTy=s88-c-k-c0x00ffffff-no-rj" group-title="REGIONALES", XTV || Jaen
https://vdo.grupolimalive.com:3087/live/xtvlive.m3u8
#EXTINF:-1 tvg-id="PE | Mega TV" tvg-name="PE | Mega TV" tvg-logo="https://pbs.twimg.com/profile_images/1313561244222267395/Y1TVAghs_400x400.jpg" group-title="REGIONALES", Mega TV || Jaen
https://7.innovatestream.pe:19360/megatvjaen/megatvjaen.m3u8
#EXTINF:-1 tvg-id="PE | Innova FM TV" tvg-name="PE | Innova FM TV" tvg-logo="https://www.innovafm.com/wp-content/uploads/2020/12/logo-innovafm.png" group-title="REGIONALES", Innova FM TV || Bagua Grande
https://s1.tvdatta.com:3367/live/innovatvlive.m3u8
#EXTINF:-1 tvg-id="PE | Amazonas TV" tvg-name="PE | Amazonas TV" tvg-logo="https://pbs.twimg.com/media/FsuVaF4X0AE8lGL?format=png&name=360x360" group-title="REGIONALES", Amazonas TV || Bagua Grande
https://vdo.grupolimalive.com:3327/multi_live/play.m3u8
#EXTINF:-1 tvg-id="PE | Max TV" tvg-name="PE | Max TV" tvg-logo="https://play-lh.googleusercontent.com/s0YnVe0zjCW9hfptbmrDhdAciKEDL5sJiodKgrfreCo3SsEHzcb9mhL1HVy9wzVa9iU=h300-rw" group-title="REGIONALES", Max TV || Bagua
http://200.48.184.156:1935/maxtv/maxtv/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Súper TV" tvg-name="PE | Súper TV" tvg-logo="https://play-lh.googleusercontent.com/ZgYZMcDBsNHBbi3x3bTRskvvDhq80S5S9qpu2a38MbeuYm9V1wSQmmns8S3LIRUU43yt" group-title="REGIONALES", Súper TV || Bagua
https://tvdatta.com:3517/live/kachorrotvlive.m3u8
#EXTINF:-1 tvg-id="PE | Planea TV" tvg-name="PE | Planea TV" tvg-logo="https://pbs.twimg.com/media/FSNY9m6XEAUryQ8?format=jpg&name=small" group-title="REGIONALES", Planea TV || Bagua
https://stmv.panel.grupolimalive.com/planeatv/planeatv/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Tele Amazonas" tvg-name="PE | Tele Amazonas" tvg-logo="https://teleamazonas.pe/wp-content/uploads/2020/12/LOGO-TELE-AMAZONAS.png" group-title="REGIONALES", Tele Amazonas || Chachapoyas
https://live.tvcontrolcp.com:1936/8054/8054/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Sistema 1 TV" tvg-name="PE | Sistema 1 TV" tvg-logo="https://sistema1tv.com/aplication/webroot/imgs/movil.png" group-title="REGIONALES", Sistema 1 TV || Huaraz
https://inliveserver.com:1936/9514/9514/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Sol Stereo TV" tvg-name="PE | Sol Stereo TV" tvg-logo="https://solstereo.pe/wp-content/uploads/2022/07/2022-logoooo.png" group-title="REGIONALES", Sol Stereo TV || Casma
https://stmv.panel.grupolimalive.com/solstereotv/solstereotv/chunklist_w1664357594.m3u8
#EXTINF:-1 tvg-id="PE | Unitel" tvg-name="PE | Unitel" tvg-logo="https://pbs.twimg.com/profile_images/1329164413438468102/nLHM4UM7_400x400.png" group-title="REGIONALES", Unitel || Huancayo
https://vdo.grupolimalive.com:3365/live/unitellive.m3u8
#EXTINF:-1 tvg-id="PE | Cadena TV" tvg-name="PE | Cadena TV" tvg-logo="https://image.winudf.com/v2/image/cGUuaG9zdHJlYW1wZXJ1LmNhZGVuYXR2aF9zY3JlZW5fMF8xNTAzMzI5MzIyXzAwMg/screen-0.jpg?fakeurl=1&type=.webp" group-title="REGIONALES", Cadena TV || Huancayo
https://ott1.hdlatam.tv/live_abr/cadenaTV/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Canal 21 Huancayo" tvg-name="PE | Canal 21 Huancayo" tvg-logo="http://core1.hdlatam.tv/media/images/channel/LOGO_CANAL_21_HUANCAYO.jpg" group-title="REGIONALES", Canal 21 Huancayo || Huancayo
https://ott1.hdlatam.tv/live/huancayo/canal21/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Unicentro TV" tvg-name="PE | Unicentro TV" tvg-logo="http://core1.hdlatam.tv/media/images/channel/unicentrotv.jpeg" group-title="REGIONALES", Unicentro TV || Distrito de El Tambo; Huancayo
https://ott1.hdlatam.tv/live/UnicentroTV/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Miel TV" tvg-name="PE | Miel TV" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqbmp2nNyGG4qX7CQod5FO0HjNNm7mn37mZbH0Ja7R56lp1u3ciY6os58LvmZmJIbI8GQ&usqp=CAU" group-title="REGIONALES", Miel TV || Chanchamayo
https://7.innovatestream.pe:19360/mieltv/mieltv.m3u8
#EXTINF:-1 tvg-id="PE | Atlantis TV" tvg-name="PE | Atlantis TV" tvg-logo="http://core1.hdlatam.tv/media/images/channel/LOGO_ATLANTIS_AYACUCHO.jpeg" group-title="REGIONALES", Atlantis TV || Ayacucho
https://ott1.hdlatam.tv/live_abr/Atlantis/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Tele 2000" tvg-name="PE | Tele 2000" tvg-logo="https://pbs.twimg.com/profile_images/961951866903986177/JHvXzvxd_400x400.jpg" group-title="REGIONALES", Tele 2000 || Huanta
https://servilive.com:3126/live/tele2000live.m3u8
#EXTINF:-1 tvg-id="PE | Radio Inka TV" tvg-name="PE | Radio Inka TV" tvg-logo="https://inkatropical.pe/wp-content/uploads/2016/02/foto-perfil-inkafacebook-scaled.jpg" group-title="REGIONALES", Radio Inka TV || Abancay
https://tv.portalexpress.es:3175/hybrid/play.m3u8
#EXTINF:-1 tvg-id="PE | Inkavisión" tvg-name="PE | Inkavisión" tvg-logo="http://core1.hdlatam.tv/media/images/channel/inkavision.jpg" group-title="REGIONALES", Inkavisión || Cuzco
https://ott1.hdlatam.tv/live_abr/INKAVISION/playlist.m3u8
#EXTINF:-1 tvg-id="PE | DMJ Televisión" tvg-name="PE | DMJ Televisión" tvg-logo="https://www.dmjsur.com/wp-content/uploads/2016/08/dmj.png" group-title="REGIONALES", DMJ Televisión || Cuzco
https://v4.tustreaming.cl/s1tv/playlist.m3u8
#EXTINF:-1 tvg-id="PE | QT Televisión" tvg-name="PE | QT Televisión" tvg-logo="http://tv.10dailythings.com/images/channels/PE/qt-television-cuzco-720p-not-247/normal.png" group-title="REGIONALES", QT Televisión || Cuzco
https://servilive.com:3753/live/qosqotimeslive.m3u8
#EXTINF:-1 tvg-id="PE | TV Sistemas" tvg-name="PE | TV Sistemas" tvg-logo="https://pbs.twimg.com/media/FSNf6rdXIAIono-?format=jpg&name=medium" group-title="REGIONALES", TV Sistemas || Cuzco
https://stmv1.voxhdnet.com/sistemascusco/sistemascusco/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Perú GO TV" tvg-name="PE | Perú GO TV" tvg-logo="https://pbs.twimg.com/media/FmpcPGXWYAMaRxq?format=png&name=small" group-title="REGIONALES", Perú GO TV || Cuzco
https://tna5.bozztv.com/Cusco/index.m3u8
#EXTINF:-1 tvg-id="PE | TV en Línea" tvg-name="PE | TV en Línea" tvg-logo="https://www.tvenlineaoficial.com/wp-content/uploads/2021/10/logo-tv-en-linea-cusco.jpg" group-title="REGIONALES", TV en Línea || Cuzco
https://s1.tvdatta.com:3883/live/tvenlinealive.m3u8
#EXTINF:-1 tvg-id="PE | Agro TV" tvg-name="PE | Agro TV" tvg-logo="https://pbs.twimg.com/media/FXmbIh6WIAAdhcO?format=png&name=240x240" group-title="REGIONALES", Agro TV || Cuzco
https://ed21ov.live.opencaster.com/pAtGzcAnwziC/index.m3u8
#EXTINF:-1 tvg-id="PE | Quillavisión TV" tvg-name="PE | Quillavisión TV" tvg-logo="https://pbs.twimg.com/media/FSNazXyXMAA1NCu?format=png&name=900x900" group-title="REGIONALES", Quillavisión TV || Quillabamba
http://v4.tustreaming.cl/quillavision/index.m3u8
#EXTINF:-1 tvg-id="PE | Andes TV" tvg-name="PE | Andes TV" tvg-logo="https://radiosicuani.com/wp-content/uploads/2020/11/logo-tv.png" group-title="REGIONALES", Andes Televisión || Sicuani
https://stmv1.voxhdnet.com/tvsicuani/tvsicuani/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Tropical TV" tvg-name="PE | Tropical TV" tvg-logo="https://pbs.twimg.com/media/FSNe1ybXIAAz2_e?format=jpg&name=small" group-title="REGIONALES", Tropical TV || Puerto Maldonado
https://tv.oyotunstream.com:1936/tropicaltv/tropicaltv/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Uriol TV" tvg-name="PE | Uriol TV" tvg-logo="http://core1.hdlatam.tv/media/images/channel/URIOL.jpeg" group-title="REGIONALES", Uriol TV || Puerto Maldonado
https://ott1.hdlatam.tv/live_abr/UriolTV/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Mega TV" tvg-name="PE | Mega TV" tvg-logo="https://directostv.teleame.com/wp-content/uploads/2017/10/Mega-TV-Arequipa-en-vivo-Online-100x70.png" group-title="REGIONALES", Mega TV || Arequipa
https://hls.servidor.stream/storage/megatv.m3u8
#EXTINF:-1 tvg-id="PE | Visión Sur" tvg-name="PE | Visión Sur" tvg-logo="https://yt3.ggpht.com/7gYYwN5Vcc60oExLwR3qVffR8Hln2KwuwkGB4v95cfk4TsvazLINUrXt9MWagrzjbuWee8Vc=s900-c-k-c0x00ffffff-no-rj" group-title="REGIONALES", Visión Sur || Arequipa
https://ott1.hdlatam.tv/live_abr/webtvVisionSur/playlist.m3u8
#EXTINF:-1 tvg-id="PE | TV Mundo" tvg-name="PE | TV Mundo" tvg-logo="http://core1.hdlatam.tv/media/images/channel/tvmundoarequipa.png" group-title="REGIONALES", TV Mundo || Arequipa
https://ott1.hdlatam.tv/live_abr/TVmundoArequipa/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Primavera 15 TV" tvg-name="PE | Primavera 15 TV" tvg-logo="https://pbs.twimg.com/media/FWsfeoIXwAEHs4b?format=png&name=small" group-title="REGIONALES", Primavera 15 TV || Moquegua
https://stmv.streamingvip.click/primaveratv/primaveratv/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Canal Sur" tvg-name="PE | Canal Sur" tvg-logo="https://graph.facebook.com/surtvilo/picture?width=320&height=320" group-title="REGIONALES", Canal Sur || Ilo
https://stmv.panel.grupolimalive.com/surtv/surtv/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Telesur de Ilo" tvg-name="PE | Telesur de Ilo" tvg-logo="https://www.telesur.com.pe/recursos/page/telesur/images/logo.png" group-title="REGIONALES", Telesur || Ilo
https://1667517699.rsc.cdn77.org/hls/ilo.m3u8
#EXTINF:-1 tvg-id="PE | Telesur de Moquegua" tvg-name="PE | Telesur de Moquegua" tvg-logo="https://www.telesur.com.pe/recursos/page/telesur/images/logo.png" group-title="REGIONALES", Telesur || Moquegua
https://1667517699.rsc.cdn77.org/hls/moquegua.m3u8
#EXTINF:-1 tvg-id="PE | Telesur de Mollendo" tvg-name="PE | Telesur de Mollendo" tvg-logo="https://pbs.twimg.com/media/FSNdknBWUAAeYsF?format=jpg&name=small" group-title="REGIONALES", Telesur || Mollendo
https://1667517699.rsc.cdn77.org/hls/mollendo.m3u8
#EXTINF:-1 tvg-id="PE | Telesur de Camaná" tvg-name="PE | Telesur de Camaná" tvg-logo="https://www.telesur.com.pe/recursos/page/telesur/images/logo.png" group-title="REGIONALES", Telesur || Camana
https://1667517699.rsc.cdn77.org/hls/camana.m3u8
#EXTINF:-1 tvg-id="EC | Gamavisión" tvg-name="EC | Gamavisión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/9/94/Gamavisi%C3%B3n2018new.png" group-title="ECUADOR", Gamavisión || ECUADOR
http://160.20.165.246:8000/play/a00r/index.m3u8
#EXTINF:-1 tvg-id="EC | Teleamazonas" tvg-name="EC | Teleamazonas" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Teleamazonas_Logo.png/150px-Teleamazonas_Logo.png" group-title="ECUADOR", Teleamazonas || ECUADOR
https://youvideostreaming.club/hls/ecutv4.m3u8
#EXTINF:-1 tvg-id="EC | TVC" tvg-name="EC | TVC" tvg-logo="https://www.tvc.com.ec/wp-content/themes/albavision-theme/parts-web/9212d2e4/logo.png?ver=1.0.28" group-title="ECUADOR", TVC || ECUADOR
https://d2vb5iv6i34lh5.cloudfront.net/TVCEC/d58f5eb5cbb9ad9c56649a0083de7c8b.sdp/playlist.m3u8
#EXTINF:-1 tvg-id="EC | Ecuador TV" tvg-name="EC | Ecuador TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/EcuadorTV_logo.png/150px-EcuadorTV_logo.png" group-title="ECUADOR", Ecuador TV || ECUADOR
https://samson.streamerr.co:8081/akira/index.m3u8
#EXTINF:-1 tvg-id="EC | Ecuavisa" tvg-name="EC | Ecuavisa" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ecuavisa_Logo_2019.png/200px-Ecuavisa_Logo_2019.png" group-title="ECUADOR", Ecuavisa || ECUADOR
https://youvideostreaming.club/hls/ecutv1.m3u8
#EXTINF:-1 tvg-id="EC | Red Telesistema" tvg-name="EC | Red Telesistema" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Rts_logo.png/150px-Rts_logo.png" group-title="ECUADOR", RTS || ECUADOR
https://d2vb5iv6i34lh5.cloudfront.net/RTSEC/93fc3c04cedad73f1f80aebf11451d53.sdp/playlist.m3u8
#EXTINF:-1 tvg-id="EC | Televisora Central Ecuatoriana" tvg-name="EC | Telecentro" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/TC_logo2020.webp/208px-TC_logo2020.webp.png" group-title="ECUADOR", TC Televisión || ECUADOR
http://177.234.242.112:50032/play/a0ei/index.m3u8
#EXTINF:-1 tvg-id="EC | Oromar TV" tvg-name="EC | Oromar TV" tvg-logo="http://oromartv.com/wp-content/uploads/2016/05/oromartv-logo.png" group-title="ECUADOR", Oromar Televisión || ECUADOR
http://177.234.230.226:8010/play/a02e/index.m3u8
#EXTINF:-1 tvg-id="EC | Telerama" tvg-name="EC | Telerama" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Logo_Telerama.png/250px-Logo_Telerama.png" group-title="ECUADOR", Telerama || ECUADOR
https://envivo.telerama.ec/stream.m3u8
#EXTINF:-1 tvg-id="EC | Hechos Ecuador TV" tvg-name="EC | Hechos Ecuador TV" tvg-logo="https://www.hechosecuador.com/rw_common/images/HECHOS%20LOGO%20REAL%202018.png" group-title="ECUADOR", Hechos Ecuador TV || ECUADOR
https://stmv.streamingvip.click/hechosecuador/hechosecuador/playlist.m3u8
#EXTINF:-1 tvg-id="EC | Ecotel TV" tvg-name="EC | Ecotel TV" tvg-logo="https://image.roku.com/developer_channels/prod/2c0c3a77e41135193f0d7790ba36711e44b7bf7574ab651ac3e61c2589de014a.png" group-title="ECUADOR", Ecotel TV || ECUADOR
https://ecotel.streamseguro.com/hls/ecoteltv.m3u8
#EXTINF:-1 tvg-id="EC | Puruwa TV" tvg-name="EC | Puruwa TV" tvg-logo="https://image.roku.com/developer_channels/prod/386a41b84216c7010cf0b4ed536fc04f74e2f936aec3509bd1e1b6fd52628f11.png" group-title="ECUADOR", Puruwa TV || ECUADOR
https://live.tvcontrolcp.com:1936/puruwatv/puruwatv/playlist.m3u8
#EXTINF:-1 tvg-id="EC | RTU El canal de noticias" tvg-name="EC | RTU El canal de noticias" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Logo_rtu.jpg/556px-Logo_rtu.jpg" group-title="ECUADOR", RTU || ECUADOR
http://177.234.230.226:8010/play/a029/index.m3u8
#EXTINF:-1 tvg-id="EC | Capricho TV" tvg-name="EC | Capricho TV" tvg-logo="http://www.caprichotvradio.com/wp-content/uploads/2021/12/cropped-cropped-cropped-logo-capricho-1.png" group-title="ECUADOR", Capricho TV || ECUADOR
https://video.compuwebecuador.com:3783/live/caprichotvlive.m3u8
#EXTINF:-1 tvg-id="EC | Multicanal" tvg-name="EC | Multicanal" tvg-logo="https://www.multicanalcatamayo.com/wp-content/uploads/2018/10/logo-final-multicanal-web-listo.png" group-title="ECUADOR", Multicanal || ECUADOR
https://multicanal.streamseguro.com/hls/streaming.m3u8
#EXTINF:-1 tvg-id="EC | Wuan+" tvg-name="EC | Wuan+" tvg-logo="https://www.lyngsat.com/logo/tv/ww/wuanplus-ec.png" group-title="ECUADOR", Wuan+ || ECUADOR
https://video2.makrodigital.com/wuanplus/wuanplus/playlist.m3u8
#EXTINF:-1 tvg-id="EC | Sono Onda TV" tvg-name="EC | Sono Onda TV" tvg-logo="https://sonoonda.com/wp-content/uploads/2022/01/cropped-LOGOSONOONDA.png" group-title="ECUADOR", Sono Onda TV || ECUADOR
https://live.obslivestream.com/sonoondatv/index.m3u8
#EXTINF:-1 tvg-id="EC | UCSG Televisión" tvg-name="EC | UCSG Televisión" tvg-logo="https://i.playboard.app/p/5af96278098bd088d6c84ba42b289004/default.jpg" group-title="ECUADOR", UCSG Televisión || ECUADOR
https://5e2f36bc1c433.streamlock.net/lacato/lacato.stream/playlist.m3u8
#EXTINF:-1 tvg-id="EC | Zaracay Televisión" tvg-name="EC | Zaracay Televisión" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLRrbURdrB5H3lMCizVyGzkuHp7zH9M_KXJssOsO=s88-c-k-c0x00ffffff-no-rj" group-title="ECUADOR", Zaracay Televisión || ECUADOR
https://video2.makrodigital.com/zaracay/zaracay/playlist.m3u8
#EXTINF:-1 tvg-id="EC | Educa Televisión" tvg-name="EC | Educa Televisión" tvg-logo="http://www.educa.ec/wp-content/uploads/2018/08/Logo_Educa_Ecuador.png" group-title="ECUADOR", Educa Televisión || ECUADOR
https://vid2.ecuamedia.net/educatv/live/playlist.m3u8
#EXTINF:-1 tvg-id="EC | TV Color Canal 36 Cotopaxi" tvg-name="EC | TV Color Canal 36 Cotopaxi" tvg-logo="https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/f6/10/4e/f6104ea0-e26c-c90f-8e4f-2267aabddbc2/AppIcon-0-1x_U007emarketing-0-7-0-sRGB-85-220.png/230x0w.webp" group-title="ECUADOR", TV Color Canal 36 Cotopaxi || ECUADOR
https://video.compuwebecuador.com:3067/live/tvcolorlive.m3u8
#EXTINF:-1 tvg-id="EC | Radio y TV Alegría" tvg-name="EC | Radio y TV Alegría" tvg-logo="https://play-lh.googleusercontent.com/uRTcgaXlQIMXrtATh3tMnz39UmJ10lg8kHgJZZxMimHvIUhF6pzEckYoD8apAgZZhA=w240-h480-rw" group-title="ECUADOR", Radio y TV Alegría || ECUADOR
https://video.compuwebecuador.com:3880/stream/play.m3u8
#EXTINF:-1 tvg-id="EC | Loreto TV" tvg-name="EC | Loreto TV" tvg-logo="https://play-lh.googleusercontent.com/ZPjHp0gP6cPHsJeMbiFU_NNvOTQqNONaDnEeDusXjW_dsO677CfvdbQJ6QFxBzzJGrg=w240-h480-rw" group-title="ECUADOR", Loreto TV || ECUADOR
https://stmv1.voxplayer.com.br/vidieg12/vidieg12/playlist.m3u8
#EXTINF:-1 tvg-id="EC | Nortivisión" tvg-name="EC | Nortivisión" tvg-logo="https://play-lh.googleusercontent.com/AJSl7zf1KY9UP2cM4drSQxny_drzI1YcE63YTElVAXqzW9PvCorg7iDELybfmdpQL2o" group-title="ECUADOR", Nortivisión || ECUADOR
https://plataformavideo.com/live/nortvision.m3u8
#EXTINF:-1 tvg-id="EC | Pasaje TV" tvg-name="EC | Pasaje TV" tvg-logo="https://yt3.ggpht.com/ggjEts4xBCx3jw0Mgy2aJTlpQjIzNBZgdg43gmqAor5mSP2dc9PKpyTCMr9C9pnIcCXqHtwsrA=s900-c-k-c0x00ffffff-no-rj" group-title="ECUADOR", Pasaje TV || ECUADOR
http://177.234.230.226:8010/play/a00t/index.m3u8
#EXTINF:-1 tvg-id="EC | Austral Televisión" tvg-name="EC | Austral Televisión" tvg-logo="https://pbs.twimg.com/profile_images/1550346414546456577/iF_qEJDk_400x400.jpg" group-title="ECUADOR", Austral Televisión || ECUADOR
https://stmv3.voxtvhd.com.br/australtv/australtv/playlist.m3u8
#EXTINF:-1 tvg-id="EC | RTV" tvg-name="EC | RTV" tvg-logo="https://www.rtvcanaloficial.com/wp-content/uploads/2022/08/SELLO-RTV-2022-1536x1536.png" group-title="ECUADOR", RTV || ECUADOR
https://sv72.ecuaradiotv.net/rtvhd/live/playlist.m3u8
#EXTINF:-1 tvg-id="EC | Naranjal TV" tvg-name="EC | Naranjal TV" tvg-logo="https://pbs.twimg.com/media/F3P_fRMWMAARF7v?format=png&name=small" group-title="ECUADOR", Naranjal TV || ECUADOR
http://177.234.230.226:8010/play/a005/index.m3u8
#EXTINF:-1 tvg-id="CO | Canal Capital" tvg-name="CO | Canal Capital" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/2020_Canal_Capital_logo.svg/135px-2020_Canal_Capital_logo.svg.png" group-title="COLOMBIA", Canal Capital || COLOMBIA
https://live-edge-bhs-1.cdn.enetres.net/C99D9A0676F3401589C768D47D31605C021/live-2500/index.m3u8
#EXTINF:-1 tvg-id="CO | Eureka tu canal" tvg-name="CO | Eureka tu canal" tvg-logo="https://s3.amazonaws.com/imagenes.conexioncapital.co/wp-content/uploads/2021/06/29232153/logo-eureka-new-1.png" group-title="COLOMBIA", Eureka tu canal || COLOMBIA
https://live-edge-bhs-1.cdn.enetres.net/C99D9A0676F3401589C768D47D31605C022/live-2500/index.m3u8
#EXTINF:-1 tvg-id="CO | RCN" tvg-name="CO | RCN" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Canal_RCN_logo_%282%29.svg/140px-Canal_RCN_logo_%282%29.svg.png" group-title="COLOMBIA", RCN || COLOMBIA
http://190.217.20.100:10800/play/a082/index.m3u8
#EXTINF:-1 tvg-id="CO | RCN+" tvg-name="CO | RCN+" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/RCN_HD2_2019.png/200px-RCN_HD2_2019.png" group-title="COLOMBIA", RCN+ || COLOMBIA
https://rcntv-rcnmas-1-us.roku.wurl.tv/playlist.m3u8
#EXTINF:-1 tvg-id="CO | RCN Xtra" tvg-name="CO | RCN Xtra" tvg-logo="https://pbs.twimg.com/media/Fj6XrAoXwAAOLKg?format=png&name=120x120" group-title="COLOMBIA", RCN Xtra || COLOMBIA
https://latv-rcn-xtra-1-mx.tcl.wurl.tv/playlist.m3u8
#EXTINF:-1 tvg-id="CO | Canal Caracol" tvg-name="CO | Canal Caracol" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Caracol_Televisi%C3%B3n_logo.svg/125px-Caracol_Televisi%C3%B3n_logo.svg.png" group-title="COLOMBIA", Canal Caracol || COLOMBIA
http://190.217.20.100:10800/play/a083/index.m3u8
#EXTINF:-1 tvg-id="CO | Canal 1" tvg-name="CO | Canal 1" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Channel_1_%28Colombia%29_-_2017_logo.svg/125px-Channel_1_%28Colombia%29_-_2017_logo.svg.png" group-title="COLOMBIA", Canal 1 || COLOMBIA
http://190.242.104.58:9092/play/e0131
#EXTINF:-1 tvg-id="CO | Canal Institucional" tvg-name="CO | Canal Institucional" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Se%C3%B1al_Institucional_logo.svg/140px-Se%C3%B1al_Institucional_logo.svg.png" group-title="COLOMBIA", Canal Institucional || COLOMBIA
https://streaming.rtvc.gov.co/TV_CanalInstitucional_live/smil:live.smil/playlist.m3u8
#EXTINF:-1 tvg-id="CO | Señal Colombia" tvg-name="CO | Señal Colombia" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Se%C3%B1al_Colombia_logo.svg/200px-Se%C3%B1al_Colombia_logo.svg.png" group-title="COLOMBIA", Señal Colombia || COLOMBIA
https://streaming.rtvc.gov.co/TV_Senal_Colombia_live/smil:live.smil/playlist.m3u8
#EXTINF:-1 tvg-id="CO | Canal Trece" tvg-name="CO | Canal Trece" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Canal_Trece_logo.svg/245px-Canal_Trece_logo.svg.png" group-title="COLOMBIA", Canal Trece || COLOMBIA
http://190.242.104.58:9092/play/e0127
#EXTINF:-1 tvg-id="CO | Canal Trece +" tvg-name="CO | Canal Trece +" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/TRECE%2B.png/150px-TRECE%2B.png" group-title="COLOMBIA", Canal Trece + || COLOMBIA
http://190.242.104.58:9092/play/e0128
#EXTINF:-1 tvg-id="CO | City TV" tvg-name="CO | City TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/City_tv_Bogot%C3%A1_logo.svg/170px-City_tv_Bogot%C3%A1_logo.svg.png" group-title="COLOMBIA", City TV || COLOMBIA
http://190.242.104.58:9092/play/e0120
#EXTINF:-1 tvg-id="CO | El Tiempo Televisión" tvg-name="CO | El Tiempo Televisión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/ET_canal_El_Tiempo_logo.png/200px-ET_canal_El_Tiempo_logo.png" group-title="COLOMBIA", El Tiempo Televisión || COLOMBIA
http://190.242.104.58:9092/play/e0121
#EXTINF:-1 tvg-id="CO | Canal Congreso" tvg-name="CO | Canal Congreso" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/d/df/Canal_Congreso_de_Colombia_logo.png" group-title="COLOMBIA", Canal Congreso || COLOMBIA
http://190.242.104.58:9092/play/e070
#EXTINF:-1 tvg-id="CO | Canal TRO" tvg-name="CO | Canal TRO" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Canal_tro_logo.PNG/150px-Canal_tro_logo.PNG" group-title="COLOMBIA", Canal TRO || COLOMBIA
http://190.242.104.58:9092/play/e077
#EXTINF:-1 tvg-id="CO | Telecafé" tvg-name="CO | Telecafé" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Telecaf%C3%A9_logo.svg/200px-Telecaf%C3%A9_logo.svg.png" group-title="COLOMBIA", Telecafé || COLOMBIA
http://190.242.104.58:9092/play/e076
#EXTINF:-1 tvg-id="CO | Teleantioquia" tvg-name="CO | Teleantioquia" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Teleantioquia_logo.svg/250px-Teleantioquia_logo.svg.png" group-title="COLOMBIA", Teleantioquia || COLOMBIA
http://190.242.104.58:9092/play/e073
#EXTINF:-1 tvg-id="CO | Zoom TV"  tvg-name="CO | Zoom TV" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/6/6c/CanalZoom2018.png/revision/latest/scale-to-width-down/78?cb=20210501194343&path-prefix=es" group-title="COLOMBIA", Zoom TV || COLOMBIA
https://canalzoom.itex.com.co:3027/live/canalzoombr1live.m3u8
#EXTINF:-1 tvg-id="CO | Canal C de Cali" tvg-name="CO | Canal C de Cali" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLRhl94w4Xil6sWKn-TpwbBo4oDXDJ6IZdILATFNKw=s900-c-k-c0x00ffffff-no-rj" group-title="COLOMBIA", Canal C de Cali || COLOMBIA
https://edge.teveo.com.co/live/AeAAAgAhAANnA1IAyADIUDAAAAGAAAAAAmVCd-e1sIh4AAAA/playlist.m3u8
#EXTINF:-1 tvg-id="CO | Telecaribe" tvg-name="CO | Telecaribe" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Telecaribe2017.png/150px-Telecaribe2017.png" group-title="COLOMBIA", Telecaribe || COLOMBIA
https://tkx.mp.lura.live/rest/v2/mcp/video/adstB64MXYxqLZwy?anvack=4gXmVVoVIp3YeECJWm6af3j0mlHwl6vO&eud=SKjoH1L/9Enwo5zQBiBTRfTSNGfENMNO6udm4CQNVvix/L9XX8kucBOvzWalIghNrL5GllGH8ou17ICYGv29Rg==
#EXTINF:-1 tvg-id="CO | Mundo +" tvg-name="CO | Mundo +" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLTDVbXdzqg5wRA2IZDnWEJyezQIhnUGxI8fEuLOgA=s88-c-k-c0x00ffffff-no-rj" group-title="COLOMBIA", Mundo + || COLOMBIA
https://video-weaver.mia05.hls.ttvnw.net/v1/playlist/CtAFDsLs3eLRjvv23GzS3Rp67fOPbAvTWeH698JcAzySWEU4Eu_lcmBvy4p8MJZgyyMBajpwOh83IICzomqtppkM_DRN6nDO4mwL3fAxMmeY-qkdxYXxtqd8iJDEPgmxXPBq7xfoh6qR86EZd48cCNRyz9gjQcOCeIdunhHf5iDqTU-_SM6vNqtMK0lqLcJ0cM7nD-7R_Q2aaB2HG2ttJJVYh-Mh0CJbInD_Wk2uMAW0RPkyIjk3mizkmaHeDuzPEs4YabIqb9eDCLy03plZ9V08l4nkMJQ4-EWJ_uLmuDk9rcTuEj_Epdvyq7GtgXWeNGr70cDT7ctpYQRMxBI7slpWtSgpvU1V6KyPa_noMReCywHs9eS8VUwZQWL33InQKFbqW_686RzJ3w1I42BU8t02ndf60CEj7jhaZZ7dHH1dFS3sBOv4l8VvIzyOaE01mVVg4EJ2KoeJHFYRHeWKSlVUCpJk4UeCpWm_pa7utrk9Yf-xmD_epCdayENa0h5o1A5iCRnlOQq3mAj2mIjlQ9bZS1XGIeWgO4ptDveozqpHhAD7sLLoHKtVqcVEf4eR1Wb1ZQijh52H_dAKNpMFNszSRI_qYL0vEnfuVvL3avICozctDIq5qUmYVsNFdUeMMf6erdYLtUkw0Rsz2MqMLcJ3YN3gbszFKGeZ5krkhIat7ygpNeNHu_L9nfryDbqK4Bh1ooEijtWy5sbhtOrck-ub4CDSypvq25aBVC89BGoDfMAmEPTEtH08NQSnxz7YfJ7bQmPdiaptXRHDCRAm1BdNKSr2B6nHP1xb72ZBu6Tj4tgyhPXbxhqOYKDO1jpZVQ6seFjNBlwZroCAniuXako8mJD6DfZSfUjPXlSnqczkCfyb-opzpy-mG0DhjlqBTqeSGAPQs5si8CdRwONYBLR0utbRLZhJryyH5gUalWrVGq7mo_h9oGnv9qQKDJonZ_brGgztF9D8BianMsAmbSYgASoJdXMtZWFzdC0yMPEH.m3u8
#EXTINF:-1 tvg-id="CO | Canal 2 de Cali" tvg-name="CO | Canal 2 de Cali" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCRXfpCXtQ2_9hizPm-qPLuDj_UZk7xKi2_FrCZnFCQ&s" group-title="COLOMBIA", Canal 2 de Cali || COLOMBIA
https://video13.virtualtronics.com/streamer/canal2.m3u8
#EXTINF:-1 tvg-id="CO | Veo Televisión" tvg-name="CO | Veo Televisión" tvg-logo="https://65d1d783ef.cbaul-cdnwnd.com/06f4edf4e9e95af4fc21b37e09fc303b/200000026-203cf203d1/450/VEO%20TELEVISION%202%20OK.png?ph=65d1d783ef" group-title="COLOMBIA", Veo Televisión || COLOMBIA
https://movil.ejeserver.com/live/veotv.m3u8
#EXTINF:-1 tvg-id="CO | CTV" tvg-name="CO | CTV" tvg-logo="https://ctvbarranquilla.com/wp-content/uploads/2021/02/LOGO-NUEVO-CTV-3.png" group-title="COLOMBIA", CTV || COLOMBIA
https://59a564764e2b6.streamlock.net/ctvbarranquilla/ctv/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="CO | Teleislas" tvg-name="CO | Teleislas" tvg-logo="https://teleislas.com.co/wp-content/uploads/2019/07/cropped-Teleislas_Logo.png" group-title="COLOMBIA", Teleislas || COLOMBIA
https://5ab772334c39c.streamlock.net/live-teleislas/_definst_/teleislas/chunklist_w526251702.m3u8
#EXTINF:-1 tvg-id="CO | Canal CNC" tvg-name="CO | Canal CNC" tvg-logo="http://canalcncmedellin.com/recursos/images/logo_cnc.png" group-title="COLOMBIA", Canal CNC || COLOMBIA
http://38.75.136.76:1935/cncmedellin720/canalcncmedellin.stream_720p/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="CO | Telepacífico" tvg-name="CO | Telepacífico" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Telepac%C3%ADfico.png/125px-Telepac%C3%ADfico.png" group-title="COLOMBIA", Telepacífico || COLOMBIA
http://190.242.104.58:9092/play/e075
#EXTINF:-1 tvg-id="CO | TDI" tvg-name="CO | TDI" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLQEQlXDbG5mfpBPebg95GpgaHErjMj4kr9ajTHv=s88-c-k-c0x00ffffff-no-rj" group-title="COLOMBIA", TDI || COLOMBIA
https://play.amelbasoluciones.co:3971/live/tdicolombiatvlive.m3u8
#EXTINF:-1 tvg-id="CO | TV Peñol" tvg-name="CO | TV Peñol" tvg-logo="https://lh3.googleusercontent.com/apvCTeyvSvG_dSKi0-ujGoz-3cnm80K4jm0TRj6oI86GJqqfMwIuVUlVCiMBzhW-iDM" group-title="COLOMBIA", TV Peñol || COLOMBIA
https://stmv1.voxtvhd.com.br/tvpenol/tvpenol/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="CO | Canal Visión Dorada" tvg-name="CO | Canal Visión Dorada" tvg-logo="https://play-lh.googleusercontent.com/YQi6JN3KWozh0yLl5S83_pMdeoD0nsvBMT-MPpbvGf0Aq_wJgiS0DA7UgEnMtfQjSRID" group-title="COLOMBIA", Canal Visión Dorada || COLOMBIA
https://movil.ejeserver.com/live/visiondorada.m3u8
#EXTINF:-1 tvg-id="CO | Canal 14 de Agustín Codazzi" tvg-name="CO | Canal 14 de Agustín Codazzi" tvg-logo="https://play-lh.googleusercontent.com/fJ6TKmzdPANhI24NH8ULV8pbEsBhWPT3e6O6xchiQmsnlWLhViE904dJd5rvfZUwwQ" group-title="COLOMBIA", Canal 14 de Agustín Codazzi || COLOMBIA
https://eu1.servers10.com:19360/8056/8056.m3u8
#EXTINF:-1 tvg-id="CO | ATN Televisión" tvg-name="CO | ATN Televisión" tvg-logo="https://atntelevision.co/wp-content/uploads/2020/07/logo-2.png" group-title="COLOMBIA", ATN Televisión || COLOMBIA
https://59ef525c24caa.streamlock.net/atntelevision/atntelevision/playlist.m3u8
#EXTINF:-1 tvg-id="CO | TV San Jorge" tvg-name="CO | TV San Jorge" tvg-logo="https://tvsanjorge.tv/wp-content/uploads/2022/02/login-logo.png" group-title="COLOMBIA", TV San Jorge || COLOMBIA
https://asucap.com/livestream/asucap_envivo.m3u8
#EXTINF:-1 tvg-id="CO | TV5 Montería" tvg-name="CO | TV5 Montería" tvg-logo="https://www.televisiongratis.tv/components/com_televisiongratis/images/tv5-montera-1456.png" group-title="COLOMBIA", TV5 Montería || COLOMBIA
http://162.212.152.104:25461/TvMonteria/Live/23
#EXTINF:-1 tvg-id="CO | Telepetróleo" tvg-name="CO | Telepetróleo" tvg-logo="https://telepetroleo.com/wp-content/uploads/2015/10/logo1.png" group-title="COLOMBIA", Telepetróleo || COLOMBIA
https://edge.teveo.com.co/live/AeAAAgAIAAE7A1IAyADIUCAAAAAAAAAAAmVCeG61sIh4AAAA/playlist.m3u8
#EXTINF:-1 tvg-id="CO | 90 Minutos TV" tvg-name="CO | 90 Minutos TV" tvg-logo="https://90minutos.co/wp-content/themes/90min-theme/img/logo-90-minutos.png" group-title="COLOMBIA", 90 Minutos TV || COLOMBIA
https://live-edge-bhs-1.cdn.enetres.net/184784E1D210401F8041E3E1266822CC021/live-2500/index.m3u8
#EXTINF:-1 tvg-id="CO | Huila TV" tvg-name="CO | Huila TV" tvg-logo="https://www.huilatv.com/wp-content/uploads/2020/01/LOGO-HUILA-TV-ICONO.png" group-title="COLOMBIA", Huila TV || COLOMBIA
https://plataformavideo.com/live/8020.m3u8
#EXTINF:-1 tvg-id="CO | STV Nariño" tvg-name="CO | STV Nariño" tvg-logo="https://narino.stvcanal.com.co/wp-content/uploads/2020/04/nari%C3%B1o-azul-logo-1.png" group-title="COLOMBIA", STV Nariño
https://jc.stvcanal.com:9000/webnarino/webnarino/1.m3u8
#EXTINF:-1 tvg-id="VE | TVES" tvg-name="VE | TVES" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Large.TVES-logo-2021.png.f9c95c6999d5d4b82b3cd30122501e75.png/290px-Large.TVES-logo-2021.png.f9c95c6999d5d4b82b3cd30122501e75.png" group-title="VENEZUELA", TVES || VENEZUELA
http://38.41.8.1:8000/play/a03k
#EXTINF:-1 tvg-id="VE | Venevisión" tvg-name="VE | Venevisión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Logotipo_de_Venevisi%C3%B3n.svg/90px-Logotipo_de_Venevisi%C3%B3n.svg.png" group-title="VENEZUELA", Venevisión || VENEZUELA
http://38.41.8.1:8000/play/a03v
#EXTINF:-1 tvg-id="VE | Vale TV" tvg-name="VE | Vale TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Logo_de_VALE_TV.png/200px-Logo_de_VALE_TV.png" group-title="VENEZUELA", Vale TV || VENEZUELA
https://cloud.fastchannel.es/manifiest/hls/valetv/valetv_480p.m3u8
#EXTINF:-1 tvg-id="VE | Venezolana de Televisión" tvg-name="VE | Venezolana de Televisión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Venezolana_de_Televisi%C3%B3n_2018.svg/1024px-Venezolana_de_Televisi%C3%B3n_2018.svg.png" group-title="VENEZUELA", VTV || VENEZUELA
http://38.41.8.1:8000/play/a03i
#EXTINF:-1 tvg-id="VE | Televen" tvg-name="VE | Televen" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Televen_logo.PNG/150px-Televen_logo.PNG" group-title="VENEZUELA", Televen || VENEZUELA
http://38.41.8.1:8000/play/a03x
#EXTINF:-1 tvg-id="VE | Vepaco TV" tvg-name="VE | Vepaco TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Logo-Vepaco-TV.png/245px-Logo-Vepaco-TV.png" group-title="VENEZUELA", Vepaco TV || VENEZUELA
https://cloud.streamingconnect.tv/hls/vepacotv/vepacotv.m3u8
#EXTINF:-1 tvg-id="VE | Vive TV" tvg-name="VE | Vive TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Vivetv.png/165px-Vivetv.png" group-title="VENEZUELA", Vive TV || VENEZUELA
http://38.41.8.1:8000/play/a03j
#EXTINF:-1 tvg-id="VE | Meridiano Televisión" tvg-name="VE | Meridiano Televisión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Meridiano_Televisi%C3%B3n.png/245px-Meridiano_Televisi%C3%B3n.png" group-title="VENEZUELA", Meridiano Televisión || VENEZUELA
http://38.41.8.1:8000/play/a03w
#EXTINF:-1 tvg-id="VE | Ávila Televisión" tvg-name="VE | Ávila Televisión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Logo-avilatv.png/260px-Logo-avilatv.png" group-title="VENEZUELA", Ávila Televisión || VENEZUELA
http://38.41.8.1:8000/play/a03t
#EXTINF:-1 tvg-id="VE | Canal I" tvg-name="VE | Canal I" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/c/c5/Logo_canal_i_venezuela.png" group-title="VENEZUELA", Canal I || VENEZUELA
https://vcp.myplaytv.com/canali/canali/playlist.m3u8
#EXTINF:-1 tvg-id="VE | ANTV" tvg-name="VE | ANTV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/c/cd/ANTV_LOGO_2016.png" group-title="VENEZUELA", ANTV || VENEZUELA
http://38.41.8.1:8000/play/a03m
#EXTINF:-1 tvg-id="VE | TVFANB" tvg-name="VE | TVFANB" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/TVFanb_logo.png/150px-TVFanb_logo.png" group-title="VENEZUELA", TVFANB || VENEZUELA
http://38.41.8.1:8000/play/a03r
#EXTINF:-1 tvg-id="VE | TLT" tvg-name="VE | TLT" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/b/bf/LOGO-HORIZONTAL_text.png" group-title="VENEZUELA", La Tele Tuya || VENEZUELA
http://38.41.8.1:8000/play/a044
#EXTINF:-1 tvg-id="VE | Colombeia" tvg-name="VE | Colombeia" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Logo_Colombeia.png/150px-Logo_Colombeia.png" group-title="VENEZUELA", Colombeia || VENEZUELA
http://38.41.8.1:8000/play/a03n
#EXTINF:-1 tvg-id="VE | ConCiencia TV" tvg-name="VE | ConCiencia TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/ConcienciaTV_logo_letras.png/300px-ConcienciaTV_logo_letras.png" group-title="VENEZUELA", ConCiencia TV || VENEZUELA
http://38.41.8.1:8000/play/a03q
#EXTINF:-1 tvg-id="VE | ShowVen TV" tvg-name="VE | ShowVen TV" tvg-logo="https://play-lh.googleusercontent.com/vVd1VPRW9BgIgv1NzShVoVvYSwaxR3Xri99Dv4Ofm5qJd6jBMto0ZL9-mG0rTAdr6w" group-title="VENEZUELA", ShowVen TV || VENEZUELA
https://vcp.myplaytv.com/coll/coll/playlist.m3u8
#EXTINF:-1 tvg-id="VE | TV Familia" tvg-name="VE | TV Familia" tvg-logo="https://secureservercdn.net/45.40.146.28/1xm.7a5.myftpupload.com/wp-content/uploads/2020/07/loop-TVF-Tex-Blanco-Fondo-Negro.gif?time=1637455454" group-title="VENEZUELA", TV Familia || VENEZUELA
https://cloudusa.streamingconnect.com/tvfamiliatvbox/tvfamiliaweb.m3u8
#EXTINF:-1 tvg-id="VE | IVC" tvg-name="VE | IVC" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/IVC_Network_Logo.png/150px-IVC_Network_Logo.png" group-title="VENEZUELA", IVC Networks || VENEZUELA
https://cdn1.eco.cdn.moderntv.eu/econocable/stream/IVCNETWORKS/40-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DIVCNETWORKS_stream_fl&_cdn_session=1359490491&_cdn_timestamp=1699114927&_cdn_token=7321bf5c199c9bad002d1a377324f61fca51d852
#EXTINF:-1 tvg-id="VE | Promociones Telemaracay C.A." tvg-name="VE | Promociones Telemaracay C.A." tvg-logo="https://upload.wikimedia.org/wikipedia/commons/b/bd/TVS_Venezuela.png" group-title="VENEZUELA", TVS || VENEZUELA
https://vcp3.myplaytv.com/tvs/tvs/playlist.m3u8
#EXTINF:-1 tvg-id="VE | Anzoategui TV" tvg-name="VE | Anzoategui TV" tvg-logo="https://www.foromedios.com/uploads/monthly_2020_09/large.AnzoateguiTV-logo2020-rec1.png.16954ef50ddeff8f97cce0312f5a0ee3.png" group-title="VENEZUELA", Anzoategui TV || VENEZUELA
https://vcp2.myplaytv.com/anzoateguitv/anzoateguitv/playlist.m3u8
#EXTINF:-1 tvg-id="VE | Promar TV" tvg-name="VE | Promar TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Promar_Television.png/150px-Promar_Television.png" group-title="VENEZUELA", Promar TV || VENEZUELA
http://vcp1.myplaytv.com/promar/promar/playlist.m3u8
#EXTINF:-1 tvg-id="VE | Telearagua" tvg-name="VE | Telearagua" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/a9d8a5767456b0a2e0382f9087d63914.webp" group-title="VENEZUELA", Telearagua || VENEZUELA
http://45.173.198.59:8080/hls/nginx3.m3u8
#EXTINF:-1 tvg-id="VE | Telesol" tvg-name="VE | Telesol" tvg-logo="https://pbs.twimg.com/profile_images/1364373257743400970/Sju8qzR7_400x400.jpg" group-title="VENEZUELA", Telesol || VENEZUELA
https://vcp2.myplaytv.com/telesol/telesol/playlist.m3u8
#EXTINF:-1 tvg-id="VE | Explosión Creativa TV" tvg-name="VE | Explosión Creativa TV" tvg-logo="http://lorini.net/exctv/EXC-TV.png" group-title="VENEZUELA", Explosión Creativa TV || VENEZUELA
https://vcp.myplaytv.com/explosioncreativa/ngrp:explosioncreativa_all/playlist.m3u8
#EXTINF:-1 tvg-id="BR | SBT" tvg-name="BR | SBT" tvg-logo="https://www.adlatina.com/uploads/img/fotoNoticiaG44044.jpg" group-title="BRASIL", SBT || BRASIL
http://208.115.225.174:14170
#EXTINF:-1 tvg-id="BR | TV Globo" tvg-name="BR | TV Globo" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/LogoTVGlobo2021.svg/200px-LogoTVGlobo2021.svg.png" group-title="BRASIL", TV Globo || BRASIL
http://www.onlinetv365.xyz:8080/live/57tyjhg65ljouni7yu711/thjhg3468ihj/19.m3u8
#EXTINF:-1 tvg-id="BR | BandNews TV" tvg-name="BR | BandNews TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/BandNews_logo_2019.png/200px-BandNews_logo_2019.png" group-title="BRASIL", BandNews TV || BRASIL
http://www.onlinetv365.xyz:8080/live/57tyjhg65ljouni7yu711/thjhg3468ihj/18.m3u8
#EXTINF:-1 tvg-id="BR | TV Brasil" tvg-name="BR | TV Brasil" tvg-logo="https://s2.glbimg.com/e0Pj7r09Z16FXeEmDfffESxLtUk=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/P/I/kWROf8ROqpWkcIt24TbQ/tv-brasil.jpg" group-title="BRASIL", TV Brasil || BRASIL
https://cdn.jmvstream.com/w/AVJ-12962/playlist/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Rede TV" tvg-name="BR | Rede TV" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/8/89/Logotipo_da_RedeTV%21.png/200px-Logotipo_da_RedeTV%21.png" group-title="BRASIL", Rede TV || BRASIL
https://5b7f3c45ab7c2.streamlock.net/arapuan/ngrp:arapuan_all/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TVN" tvg-name="BR | TVN" tvg-logo="https://pbs.twimg.com/profile_images/1677441762/logo_nova_400x400.jpg" group-title="BRASIL", TVN || BRASIL
http://wz3.dnip.com.br/tvnbrasil/tvnbrasil.sdp/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TVE" tvg-name="BR | TVE" tvg-logo="https://dateame.co/public/storage/media/20200717_tve_brasil.jpg" group-title="BRASIL", TVE || BRASIL
http://streaming.procergs.com.br:1935/tve/stve/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Agro Brasil TV" tvg-name="BR | Agro Brasil TV" tvg-logo="https://play-lh.googleusercontent.com/J6-dCWwXrRwNq3YZTZ_AbpVuAhUdF_kui2BsLDGl77mTTtTqmPqxIHJfSu-WgYg2E-ET=w240-h480-rw" group-title="BRASIL", Agro Brasil TV || BRASIL
https://server.flixtv.com.br/agrobrasiltv/agrobrasiltv/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="BR | Rede Bandeirantes" tvg-name="BR | Rede Bandeirantes" tvg-logo="https://www.newslinereport.com/online/foto_485.jpg" group-title="BRASIL", Band || BRASIL
https://5cf4a2c2512a2.streamlock.net/rbatv/rbatv/chunklist_w74540908.m3u8
#EXTINF:-1 tvg-id="BR | TV Aracati" tvg-name="BR | TV Aracati" tvg-logo="https://play-lh.googleusercontent.com/1lXr5lbsVfyHXAKU9VOwDW2eu5qzt10A2LdxpH16bdmx7PezOs_14g8N9UtymBygeCRn=w240-h480-rw" group-title="BRASIL", TV Aracati || BRASIL
https://video04.logicahost.com.br/tvaracati/tvaracati/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Rede Mundo TV" tvg-name="BR | Rede Mundo TV" tvg-logo="https://www.redemundotv.com.br/assets/images/logo-rede-mundo-tv6.png" group-title="BRASIL", Rede Mundo TV || BRASIL
https://video01.logicahost.com.br/mundotvbrasil/mundotvbrasil/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Teleweb TV" tvg-name="BR | Teleweb TV" tvg-logo="https://play-lh.googleusercontent.com/UHDISsCc3QU6rDVmeG-Qn7tZ0uxJUI5MpwnmIa8dY4j4iQTNMkA628BleNszGFzl6YM=w240-h480-rw" group-title="BRASIL", Teleweb TV || BRASIL
https://video01.kshost.com.br/acessweb7837/acessweb7837/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Rede Familia" tvg-name="BR | Rede Familia" tvg-logo="https://yt3.ggpht.com/ytc/AMLnZu8h0kPa4cEbBBM1dx7FjRcoGEQOi2rzCoEhssluMg=s900-c-k-c0x00ffffff-no-rj" group-title="BRASIL", Rede Familia || BRASIL
https://h5dqr5efme.zoeweb.tv/familia/smil:familia.smil/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Mar" tvg-name="BR | TV Mar" tvg-logo="https://pbs.twimg.com/media/FpvSefQWIAYRK1j?format=png&name=360x360" group-title="BRASIL", TV Mar || BRASIL
https://virtues.es:1936/tvmar/tvmar/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Soul Lab TV" tvg-name="BR | Soul Lab TV" tvg-logo="https://pbs.twimg.com/media/FuDX0-PXgAEbGQq?format=png&name=240x240" group-title="BRASIL", Soul Lab TV || BRASIL
https://video01.soultv.com.br/canalteste/canalteste/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Soul TV" tvg-name="BR | Soul TV" tvg-logo="https://pbs.twimg.com/media/FuDX0-PXgAEbGQq?format=png&name=240x240" group-title="BRASIL", Soul TV || BRASIL
https://video01.soultv.com.br/soultv/soultv/playlist.m3u8
#EXTINF:-1 tvg-id="BR | U Miss TV" tvg-name="BR | U Miss TV" tvg-logo="https://pbs.twimg.com/profile_images/1427350688875618315/x5wP4_ix_400x400.jpg" group-title="BRASIL", U Miss TV || BRASIL
https://test-soultvex.akamaized.net/umiss/umiss/playlist.m3u8
#EXTINF:-1 tvg-id="BR | ISTV" tvg-name="BR | ISTV" tvg-logo="https://istv.com.br/static/media/Logo_ISTV_01.f4e9bd182d5e3afaa8ff.png" group-title="BRASIL", ISTV || BRASIL
https://cdn.jmvstream.com/w/LVW-9883/LVW9883_lFcfKysrHF/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Meio Norte" tvg-name="BR | TV Meio Norte" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/c/c7/Logotipo_da_Rede_Meio_Norte.jpg" group-title="BRASIL", TV Meio Norte || BRASIL
https://acesso.ecast.site:3456/hybrid/play.m3u8
#EXTINF:-1 tvg-id="BR | TV Londres" tvg-name="BR | TV Londres" tvg-logo="https://pbs.twimg.com/media/Fr_I7vcX0AAFNvY?format=png&name=120x120" group-title="BRASIL", TV Londres || BRASIL
https://cdn2.connectbr.com.br/oxtv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="BR | CTV PB" tvg-name="BR | CTV PB" tvg-logo="https://play-lh.googleusercontent.com/aW7c7aWY5HKui7S5gHkJDcMaD-OCP5CmlRGEYlWTu4-O52THZ611ONPAd-l3sXPkvG4=w240-h480-rw" group-title="BRASIL", CTV PB || BRASIL
https://Stmv1.samcast.com.br/ctvpb/ctvpb/playlist.m3u8
#EXTINF:-1 tvg-id="BR | 40 TV" tvg-name="BR | 40 TV" tvg-logo="https://www.40graustv.com.br/wp-content/uploads/2017/02/40-graus-tv.png" group-title="BRASIL", 40 TV || BRASIL
https://acesso.ecast.site:3125/stream/play.m3u8
#EXTINF:-1 tvg-id="BR | Ilog360 TV" tvg-name="BR | Ilog360 TV" tvg-logo="https://pbs.twimg.com/media/Fr_mf14XoAA0iYP?format=png&name=360x360" group-title="BRASIL", Ilog360 TV || BRASIL
https://cdn.jmvstream.com/w/AVJ-12916/playlist/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Pet Lovers TV" tvg-name="BR | Pet Lovers TV" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-l/b452dd39e4ab9787fc4c0eb8ba651112.webp" group-title="BRASIL", Pet Lovers TV || BRASIL
https://video04.logicahost.com.br/petloverstv/petloverstv/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Reconcavo" tvg-name="BR | TV Reconcavo" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMruJ1_cIWLY8sVdQ9Aj6TDfa_3aPwiDFJ380d_e6Cg4o7TCWhu-B8nFiTkiCdDqKRZFA&usqp=CAU" group-title="BRASIL", TV Reconcavo || BRASIL
https://video04.logicahost.com.br/tvreconcavo/tvreconcavo/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Br Global Station" tvg-name="BR | Br Global Station" tvg-logo="https://play-lh.googleusercontent.com/Ck5HAO726qCpF0gBzibXJUziqP1F_RleRhHaiexvNN26jlCXPpB9mpGPZSfEwWvuDSou=w240-h480-rw" group-title="BRASIL", Br Global Station || BRASIL
http://brglobalstation.duckdns.org:8080/hls/brglobalstation.m3u8
#EXTINF:-1 tvg-id="BR | Viva Eduque TV" tvg-name="BR | Viva Eduque TV" tvg-logo="https://www.vivaedeixeviver.org.br/images/stories/cursos/viva-eduque.png" group-title="BRASIL", Viva Eduque TV || BRASIL
https://video01.logicahost.com.br/vivaedeixeviver/vivaedeixeviver/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Cinemonde" tvg-name="BR | Cinemonde" tvg-logo="https://pbs.twimg.com/media/FsPh5nVXwAAlyPA?format=png&name=360x360" group-title="BRASIL", Cinemonde || BRASIL
https://video01.soultv.com.br/cinemonde/cinemonde/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Río Preto" tvg-name="BR | TV Río Preto" tvg-logo="https://play-lh.googleusercontent.com/rKOywAcaYnJhE84_6oXC8_Znbqu3gaKIg5275Atit8-z1cfllQDuCY4YMYUi5NWCKD4_=w240-h480-rw" group-title="BRASIL", TV Río Preto || BRASIL
https://video02.logicahost.com.br/tvriopreto/tvriopreto/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Imperial TV" tvg-name="BR | Imperial TV" tvg-logo="https://imperialtv.com.br/app-assets/images/logo/brand.png" group-title="BRASIL", Imperial TV || BRASIL
https://5eaa6849d0971.streamlock.net/tvimperialnet/tvimperialnet/playlist.m3u8
#EXTINF:-1 tvg-id="BR | GLN TV" tvg-name="BR | GLN TV" tvg-logo="https://imperialtv.com.br/app-assets/images/logo/brand.png" group-title="BRASIL", GLN TV || BRASIL
https://stmv1.paineltv.net/glnfilmes/glnfilmes/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Central TV" tvg-name="BR | Central TV" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-l/84998832d7465ef731fc0e141e6c5efa.webp" group-title="BRASIL", Central TV || BRASIL
https://tv02.zas.media:1936/centraltv/centraltv/playlist.m3u8
#EXTINF:-1 tvg-id="BR | AWTV" tvg-name="BR | AWTV" tvg-logo="https://pbs.twimg.com/media/FsbXxopXgAET-ih?format=png&name=120x120" group-title="BRASIL", AWTV || BRASIL
https://ebocast.ebosystems.com.br:3070/live/awtvlive.m3u8
#EXTINF:-1 tvg-id="BR | Urban TV" tvg-name="BR | Urban TV" tvg-logo="https://urbantv.com.br/img/logo.png" group-title="BRASIL", Urban TV || BRASIL
https://stream.urbantv.com.br/urbantv/video.m3u8
#EXTINF:-1 tvg-id="BR | Andreia Grezzana TV" tvg-name="BR | Andreia Grezzana TV" tvg-logo="https://d14vd6r4ppsx57.cloudfront.net/media/brand/LOGO_AG_2_6ckae00.png" group-title="BRASIL", Andreia Grezzana TV || BRASIL
https://video01.soultv.com.br/andreiagrezzana/andreiagrezzana/playlist.m3u8
#EXTINF:-1 tvg-id="BR | 011 News" tvg-name="BR | 011 News" tvg-logo="http://011.news/wp-content/uploads/2022/09/logo011news.png" group-title="BRASIL", 011 News || BRASIL
https://011news.akamaized.net/011news/011news/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Elemental Channel" tvg-name="BR | Elemental Channel" tvg-logo="https://play-lh.googleusercontent.com/g48AByBUDE1bVPFjHTpPaIozeRx9qNEXrY7180C6EQY4TLw4kCC0hFcZkBj459ru9pw=w240-h480-rw" group-title="BRASIL", Elemental Channel || BRASIL
https://5d82644094cc0.streamlock.net/8116/8116/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Grande Natal" tvg-name="BR | TV Grande Natal" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/14c5a66a88c83606956bfad56ce0e085.webp" group-title="BRASIL", TV Grande Natal || BRASIL
https://canalteste.duckdns.org:4433/hls/tvgrandenatalhdtv/index.m3u8
#EXTINF:-1 tvg-id="BR | TV Ace" tvg-name="BR | TV Ace" tvg-logo="https://assets-iptv2022.cdnvideo.ru/uploads/channel/11901/thumb_TV_ACE.jpeg" group-title="BRASIL", TV Ace || BRASIL
https://stmv7.samcast.com.br/associacaocomercialeempresarialdecaraguatatuba7320/associacaocomercialeempresarialdecaraguatatuba7320/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Rede Premium TV" tvg-name="BR | Rede Premium TV" tvg-logo="http://redepremiumtv.com.br/wp-content/uploads/2018/10/logo-site1-2.png" group-title="BRASIL", Rede Premium TV || BRASIL
https://5c483b9d1019c.streamlock.net/8066/8066/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Metropolitana Rio" tvg-name="BR | TV Metropolitana Rio" tvg-logo="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-hostgator-brasil-v1-0-7%2F367%2F1415367%2FDBjyCxzq%2Fd16118ecf68b4c8aa41c573eb1e28a4c&methods=resize%2C500%2C5000" group-title="BRASIL", TV Metropolitana Rio || BRASIL
https://stmv1.srvstm.com/luis5346/luis5346/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Life Channel" tvg-name="BR | Life Channel" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-l/99c3b9e26fccf483d6432e70777816ca.webp" group-title="BRASIL", Life Channel || BRASIL
https://cdn2.connectbr.com.br/life/index.m3u8
#EXTINF:-1 tvg-id="BR | TV Estilo" tvg-name="BR | TV Estilo" tvg-logo="https://assets-iptv2022.cdnvideo.ru/uploads/channel/12034/thumb_Estilo_TV.jpeg" group-title="BRASIL", TV Estilo || BRASIL
https://cdn.jmvstream.com/w/AVJ-12950/playlist/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Sol Brasil TV" tvg-name="BR | Sol Brasil TV" tvg-logo="https://pbs.twimg.com/media/FtDrSx8WwAEKCtC?format=png&name=small" group-title="BRASIL", Sol Brasil TV || BRASIL
https://video01.soultv.com.br/solbrasil/solbrasil/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TVS Surubim" tvg-name="BR | TVS Surubim" tvg-logo="https://pbs.twimg.com/media/FtDvs_TWAAIWKdP?format=png&name=small" group-title="BRASIL", TVS Surubim || BRASIL
https://video01.kshost.com.br/antonio9510/antonio9510/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Rede QDM" tvg-name="BR | Rede QDM" tvg-logo="https://assets-iptv2022.cdnvideo.ru/uploads/channel/11740/thumb_REDE_QDM.jpeg" group-title="BRASIL", Rede QDM || BRASIL
https://video03.logicahost.com.br/tvkidmais01/tvkidmais01/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Max" tvg-name="BR | TV Max" tvg-logo="https://play-lh.googleusercontent.com/ranUdQU65mQub7faqZJVLlDvgcmmW_Fm7htHmmTT4twPSnZcYnqzYPrYMFP8nU7d3Q=w240-h480-rw" group-title="BRASIL", TV Max || BRASIL
https://5cf4a2c2512a2.streamlock.net/tvmax/tvmax/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Assime Portugal TV" tvg-name="BR | Assime Portugal TV" tvg-logo="https://play-lh.googleusercontent.com/odwav53LekHOxO2Zuh5JYHUMpXwCOkFfRi_IiAG2UBaNPa8n2EnBE4yIvEn7wCSKc-E=w240-h480-rw" group-title="BRASIL", Assime Portugal TV || BRASIL
https://video04.logicahost.com.br/assimeportugal/assimeportugal/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Correio Do Imbé TV" tvg-name="BR | Correio Do Imbé TV" tvg-logo="https://correiodoimbe.com.br/wp-content/uploads/2020/08/logo-correio-imbe.png" group-title="BRASIL", Correio Do Imbé TV || BRASIL
https://server02.tvmais.net.br/mistserver/hls/tvc/0_1/chunk_192816650.m3u8
#EXTINF:-1 tvg-id="BR | Com Brasil" tvg-name="BR | Com Brasil" tvg-logo="https://combrasiltv.com.br/wp-content/uploads/2022/07/Logo-COMBR.png" group-title="BRASIL", Com Brasil || BRASIL
https://br5093.streamingdevideo.com.br/abc/abc/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV WTJ Minas" tvg-name="BR | TV WTJ Minas" tvg-logo="https://www.wtjtvminas.com.br/images/galeria/29032023/o_1gsnce48g16mr1bmk1qcl167f9ps13.jpg" group-title="BRASIL", TV WTJ Minas || BRASIL
https://video02.logicahost.com.br/wtjtvminas/wtjtvminas/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Blits TV" tvg-name="BR | Blits TV" tvg-logo="https://assets-iptv2022.cdnvideo.ru/uploads/channel/11747/thumb_BLITS_TV.jpeg" group-title="BRASIL", Blits TV || BRASIL
https://video03.logicahost.com.br/blitstv01/blitstv01/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Demais TV" tvg-name="BR | Demais TV" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-l/5a0ca2ab1c68adcde7bf577af87071b8.webp" group-title="BRASIL", Demais TV || BRASIL
https://stmv1.samcast.com.br/demaistv6503/demaistv6503/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Rede UTV" tvg-name="BR | Rede UTV" tvg-logo="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-hostgator-brasil-v1-0-3%2F253%2F1028253%2FGDNFdn7O%2Fe42b2675cc2448d6a0b147d6de288138&methods=resize%2C500%2C5000" group-title="BRASIL", Rede UTV || BRASIL
https://srv4.zcast.com.br/redetvoficial/redetvoficial/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Q Tal Channel" tvg-name="BR | Q Tal Channel" tvg-logo="https://assets-iptv2022.cdnvideo.ru/uploads/channel/11733/thumb_QTAL_CHANNEL.jpeg" group-title="BRASIL", Q Tal Channel || BRASIL
https://video03.logicahost.com.br/qtalchannel01/qtalchannel01/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Planalto Norte" tvg-name="BR | TV Planalto Norte" tvg-logo="https://tvplanaltonorte.com.br/images/logo-header.png" group-title="BRASIL", TV Planalto Norte || BRASIL
https://video01.logicahost.com.br/tvplanalto/tvplanalto/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Alternativa" tvg-name="BR | TV Alternativa" tvg-logo="https://pa-str.srvsite.com/arquivos/7296/cabecalho-7296-20211201143202.png" group-title="BRASIL", TV Alternativa || BRASIL
https://stmv5.samcast.com.br/wagner7919/wagner7919/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Yeeaah TV" tvg-name="BR | Yeeaah TV" tvg-logo="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8jIPq9nnwpuP-onQKCbDHGQeYUiGnlO0QYKXJvbJGCPd6LwHb_l2o2cl7BE4S-W2cvduX5b_oXLam-nEMq3nltVC8pXD14Qc-VaOSzOupgqRqs1pH124TtP0pKkIOEWUl-SU4Z8CcI9V-TbqYY5XPyKw8gFzW7ug6CWXkLegujey56Ww1jele7CrTMw/w320-h82/YEEAAH%20-%20degrade%201.png" group-title="BRASIL", Yeeaah TV || BRASIL
https://stmv1.painelvideo.top/yeeaah/yeeaah/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Petropolis" tvg-name="BR | TV Petropolis" tvg-logo="https://pa-str.srvsite.com/arquivos/7024/cabecalho-7024-20220816151708.png" group-title="BRASIL", TV Petropolis || BRASIL
https://video02.logicahost.com.br/tvpetropolis/tvpetropolis/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Mon" tvg-name="BR | TV Mon" tvg-logo="https://cache2net3.com/Repositorio/3106/Logo/ee19d371-e.png" group-title="BRASIL", TV Mon || BRASIL
https://srv1.zcast.com.br/tvmon/tvmon/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Carioca" tvg-name="BR | TV Carioca" tvg-logo="http://core1.hdlatam.tv/media/images/channel/TV_CARIOCA_NET_SEM_FUNDO.png" group-title="BRASIL", TV Carioca || BRASIL
https://ott1.hdlatam.tv/live/TVCARIOCA/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV King" tvg-name="BR | TV King" tvg-logo="https://assets-iptv2022.cdnvideo.ru/uploads/channel/14379/thumb_image_2022-06-28_14-42-57.png" group-title="BRASIL", TV King || BRASIL
https://stmv1.srvstm.com/pedropaulomendes3413/pedropaulomendes3413/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Fandom TV" tvg-name="BR | Fandom TV" tvg-logo="https://pbs.twimg.com/media/FtQCy5tWYAk1hOM?format=png&name=240x240" group-title="BRASIL", Fandom TV || BRASIL
https://cdn2.connectbr.com.br/fabic/index.m3u8
#EXTINF:-1 tvg-id="BR | Amazon Sat TV" tvg-name="BR | Amazon Sat TV" tvg-logo="https://play-lh.googleusercontent.com/HhoMIiIxkqgPYdMZqhgOh98NmC0MoP2Z-GJxpItqJAWQxu0FoOAt2fHyLsxpb4GpxV4=w240-h480-rw" group-title="BRASIL", Amazon Sat TV || BRASIL
https://amazonsat.brasilstream.com.br/hls/amazonsat/index.m3u8
#EXTINF:-1 tvg-id="BR | Rede Nova TV" tvg-name="BR | Rede Nova TV" tvg-logo="http://nbpsda.com/wp-content/uploads/2021/08/nls-1.png" group-title="BRASIL", Rede Nova TV || BRASIL
https://5d82644094cc0.streamlock.net/redenovatv/redenovatv/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Nova TV Regional" tvg-name="BR | Nova TV Regional" tvg-logo="https://pbs.twimg.com/media/FtP_YumWIAUQ-yf?format=png&name=120x120" group-title="BRASIL", Nova TV Regional || BRASIL
https://cdn2.connectbr.com.br/regional/index.m3u8
#EXTINF:-1 tvg-id="BR | Nova TV Interior" tvg-name="BR | Nova TV Interior" tvg-logo="https://pbs.twimg.com/media/FtSswdaXgAMENpI?format=png&name=240x240" group-title="BRASIL", Nova TV Interior || BRASIL
http://187.95.95.241:7982/interior/index.m3u8
#EXTINF:-1 tvg-id="BR | Nova TV Matopiba" tvg-name="BR | Nova TV Matopiba" tvg-logo="https://pbs.twimg.com/media/FtZW7fzWAAEGqba?format=png&name=360x360" group-title="BRASIL", Nova TV Matopiba || BRASIL
http://187.95.95.241:7983/matopiba/index.m3u8
#EXTINF:-1 tvg-id="BR | Nova TV Agrotour" tvg-name="BR | Nova TV Agrotour" tvg-logo="https://play-lh.googleusercontent.com/yLtIjmPlBctcPALUpP9tbpewcKonYfoQu0-UhMOtLxKJySKWLS3D1dvbtUf3CLNlmEs=w240-h480-rw" group-title="BRASIL", Nova TV Agrotour || BRASIL
https://video01.kshost.com.br/marcelo6682/marcelo6682/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TVA A Folha" tvg-name="BR | TVA A Folha" tvg-logo="https://www.jornalafolha.com.br/wp-content/uploads/2020/11/logo-png-bordado.png" group-title="BRASIL", TVA A Folha || BRASIL
https://video01.logicahost.com.br/tvafolha/tvafolha/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Sonata" tvg-name="BR | TV Sonata" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/d4c57d1d109372f3fac1e91b0a0f7086.webp" group-title="BRASIL", TV Sonata || BRASIL
https://StmV1.srvstm.com/tiago4617/tiago4617/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Potengi" tvg-name="BR | TV Potengi" tvg-logo="https://pa-str.srvsite.com/arquivos/6676/cabecalho-6676-20210510225010.png" group-title="BRASIL", TV Potengi || BRASIL
https://stmv1.samcast.com.br/jeova3318/jeova3318/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV CNB" tvg-name="BR | TV CNB" tvg-logo="https://tvcnb.com/wp-content/uploads/2017/10/logo_TVCNB_camisa-e1526345548164.png" group-title="BRASIL", TV CNB || BRASIL
https://livefocamundo.com:8081/tvcnb/index.m3u8
#EXTINF:-1 tvg-id="BR | TV RS Cidades" tvg-name="BR | TV RS Cidades" tvg-logo="https://play-lh.googleusercontent.com/hLY6Ttlun7yyN9tAJwdh4EowBx9uumiqmYOt15pMl4pqYRBx1Mu-vC0RxG3JbSgLT-ig=w240-h480-rw" group-title="BRASIL", TV RS Cidades || BRASIL
https://video01.kshost.com.br:4443/gabriel9059/gabriel9059/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Phoenix TV" tvg-name="BR | Phoenix TV" tvg-logo="https://pbs.twimg.com/media/FtUnA_-XoAAwEm4?format=png&name=360x360" group-title="BRASIL", Phoenix TV || BRASIL
https://video01.soultv.com.br/phoenixtv/phoenixtv/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Rede Smart de Comunicação" tvg-name="BR | Rede Smart de Comunicação" tvg-logo="https://canalsmart.com.br/imagens/logo.png" group-title="BRASIL", Rede Smart de Comunicação || BRASIL
https://5ffab78b24f94.streamlock.net/smart/smart/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Mais TV" tvg-name="BR | Mais TV" tvg-logo="https://play-lh.googleusercontent.com/tSjIKfGqT90hVCm-UGeEGXnaWj7LizAKk1EUdzx5hp12pFZ0lM-gGSz30Op2U1VIKw=w240-h480-rw" group-title="BRASIL", Mais TV || BRASIL
http://maistv.duckdns.org:8080/hls/maistv.m3u8
#EXTINF:-1 tvg-id="BR | Abba RTV" tvg-name="BR | Abba RTV" tvg-logo="https://spaceks.net/sites/abbartv.com.br/images/logo/logo_1213314842.png" group-title="BRASIL", Abba RTV || BRASIL
https://video01.kshost.com.br:4443/adilson8953/adilson8953/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Rede SPTV" tvg-name="BR | Rede SPTV" tvg-logo="https://pa-str.srvsite.com/arquivos/6806/cabecalho-6806-20210603100909.png" group-title="BRASIL", Rede SPTV || BRASIL
https://video01.logicahost.com.br/websptv/websptv/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Soul Cine Clube" tvg-name="BR | Soul Cine Clube" tvg-logo="https://pbs.twimg.com/media/FtZ0JNTWIAELxmM?format=png&name=120x120" group-title="BRASIL", Soul Cine Clube || BRASIL
https://video01.soultv.com.br/soulcine/soulcine/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Primer TV" tvg-name="BR | Primer TV" tvg-logo="http://primertv.com.br/img/logo.png" group-title="BRASIL", Primer TV || BRASIL
http://177.74.174.57:8080/hls/primertv.m3u8
#EXTINF:-1 tvg-id="BR | TV Teen Net" tvg-name="BR | TV Teen Net" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/084299119e2cf7e1b863489165dd5af3.webp" group-title="BRASIL", TV Teen Net || BRASIL
https://stmv1.painelvideo.top/tvteennet/tvteennet/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Hackathon TV" tvg-name="BR | Hackathon TV" tvg-logo="https://hackathonbrasil.com.br/wp-content/uploads/2020/05/web_retangular-para_fundo_claro.png" group-title="BRASIL", Hackathon TV || BRASIL
https://video04.logicahost.com.br/hackathonbrasil/hackathonbrasil/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Florida" tvg-name="BR | TV Florida" tvg-logo="https://usabrtv.com/wp-content/uploads/2023/02/LOGO-SITE-NEW-BRANCA.png" group-title="BRASIL", TV Florida || BRASIL
https://srv1.zcast.com.br/tvflorida/tvflorida/playlist.m3u8
#EXTINF:-1 tvg-id="BR | All Sports" tvg-name="BR | All Sports" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-l/37a7f2bbd24082bb8f947686020c3e82.webp" group-title="BRASIL", All Sports || BRASIL
https://5cf4a2c2512a2.streamlock.net/dgrau/dgrau/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Sou TV" tvg-name="BR | Sou TV" tvg-logo="https://play-lh.googleusercontent.com/NOSe8zTNGn7exNvqIYx9jZvVFgUNI71ObOux2jnX4PnhBrXLyo0YYnkN3WE0vZdgOaY=w240-h480-rw" group-title="BRASIL", Sou TV || BRASIL
https://video01.kshost.com.br/tiago4725/tiago4725/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Adesso TV" tvg-name="BR | Adesso TV" tvg-logo="https://www.adessotv.com.br/images/layout/logo.png" group-title="BRASIL", Adesso TV || BRASIL
https://cdn.jmvstream.com/w/LVW-9715/LVW9715_12B26T62tm/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Milagro" tvg-name="BR | TV Milagro" tvg-logo="https://tvmilagrobrasil.com.br/wp-content/uploads/2021/04/MILAGRO_3D-300x169.png" group-title="BRASIL", TV Milagro || BRASIL
http://201.87.136.36:8091/hls/tvmilagro.m3u8
#EXTINF:-1 tvg-id="BR | VRT Channel" tvg-name="BR | VRT Channel" tvg-logo="https://play-lh.googleusercontent.com/S12InR6L45quw54QiZE-9SNG9zGXBLOmuJx8BrxVOavzEKinhw6oZn2v4PoOjjKXbg=w240-h480-rw" group-title="BRASIL", VRT Channel || BRASIL
https://sistemavrt.vrtchannel.tv.br:3473/stream/play.m3u8
#EXTINF:-1 tvg-id="BR | TVídeo News" tvg-name="BR | TVídeo News" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRtzM69t1Rqpf6csQ1mSQnkCqw3W3Wq95gQ2JoqtYQLm0uk9FDKBIH84fD0Z7TA6rn2cU&usqp=CAU" group-title="BRASIL", TVídeo News || BRASIL
https://video01.logicahost.com.br/tvideonews/tvideonews/playlist.m3u8
#EXTINF:-1 tvg-id="BR | UTV Music" tvg-name="BR | UTV Music" tvg-logo="https://pbs.twimg.com/media/Fthg2JfWIAMesmX?format=png&name=120x120" group-title="BRASIL", UTV Music || BRASIL
https://srv2.zcast.com.br/redetv2/redetv2/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Programa 4 por 4" tvg-name="BR | Programa 4 por 4" tvg-logo="http://programa4por4.com/wp-content/uploads/2022/02/Icon-4por4-512x512-03.png" group-title="BRASIL", Programa 4 por 4 || BRASIL
https://programa4por4.akamaized.net/programa4por4/programa4por4/playlist.m3u8
#EXTINF:-1 tvg-id="BR | RAE TV" tvg-name="BR | RAE TV" tvg-logo="https://yt3.googleusercontent.com/ytc/AL5GRJUNd8ID1QyCaYnnKrQBkqGz760fsAGlpiasaGDj=s900-c-k-c0x00ffffff-no-rj" group-title="BRASIL", RAE TV || BRASIL
https://video01.logicahost.com.br/raetv/raetv/playlist.m3u8
#EXTINF:-1 tvg-id="BR | RS News Sports" tvg-name="BR | RS News Sports" tvg-logo="https://www.rsnewswebtv.com.br/storage/47/config/1NMjivMgru28bdjEYFA6nnOcFxFfT1RA6RKLCc0y.png" group-title="BRASIL", RS News Sports || BRASIL
https://59f1cbe63db89.streamlock.net:1443/rsnewssports/_definst_/rsnewssports/playlist.m3u8
#EXTINF:-1 tvg-id="BR | RS News Sports 2" tvg-name="BR | RS News Sports 2" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/4a9158128f33e2a329ae8296ec8e3574.webp" group-title="BRASIL", RS News Sports 2 || BRASIL
https://59f1cbe63db89.streamlock.net:1443/rsnews/_definst_/rsnews/playlist.m3u8
#EXTINF:-1 tvg-id="BR | RS News Sports 3" tvg-name="BR | RS News Sports 3" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-l/c0be4bef041b92bda1e3232291c3c9e1.webp" group-title="BRASIL", RS News Sports 3 || BRASIL
https://59f1cbe63db89.streamlock.net:1443/rsnews03/_definst_/rsnews03/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Life SCTV" tvg-name="BR | Life SCTV" tvg-logo="https://assets-iptv2022.cdnvideo.ru/static/channel/11964/logo_256_1672317054.jpeg" group-title="BRASIL", Life SCTV || BRASIL
https://video01.logicahost.com.br/tvalianca/tvalianca/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Astral TV" tvg-name="BR | Astral TV" tvg-logo="https://www.astralbrasil.org/wp-content/uploads/2018/06/ASTRAL-LOGO-media.png" group-title="BRASIL", Astral TV || BRASIL
https://cdn.cdnseguro.com/altraltv/altraltv/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV A7" tvg-name="BR | TV A7" tvg-logo="https://assets-iptv2022.cdnvideo.ru/uploads/channel/12188/thumb_TV_A7_.png" group-title="BRASIL", TV A7 || BRASIL
https://srv3.zcast.com.br/wellington7720/wellington7720/playlist.m3u8
#EXTINF:-1 tvg-id="BR | WTV" tvg-name="BR | WTV" tvg-logo="https://www.wtvbrasil.com.br/wp-content/uploads/2019/07/LOGO2019-site-s-fundo.png" group-title="BRASIL", WTV || BRASIL
https://cdn.jmvstream.com/w/AVJ-13242/playlist/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Avivando Nacões" tvg-name="BR | TV Avivando Nacões" tvg-logo="https://play-lh.googleusercontent.com/7Q27r8FaSpbCL_uDm-XA4bQCeNtL5YfFQskmw9wRxAuAxqbjwZJy7KUV00pW63YSUg=w240-h480-rw" group-title="BRASIL", TV Avivando Nacões || BRASIL
https://video01.kshost.com.br/edinardo2448/edinardo2448/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Ondas de Maricá" tvg-name="BR | TV Ondas de Maricá" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/646ac1bfd9a36ad2ee6fc71422975a10.webp" group-title="BRASIL", TV Ondas de Maricá || BRASIL
https://stmv5.samcast.com.br/portalondasdemarica/portalondasdemarica/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Educar" tvg-name="BR | TV Educar" tvg-logo="https://assets.iptv2022.com/uploads/channel/12482/thumb_logotipo.png" group-title="BRASIL", TV Educar || BRASIL
http://v1.comunicabh.com.br/tveducar/tveducar/playlist.m3u8
#EXTINF:-1 tvg-id="BR | MKK Web TV" tvg-name="BR | MKK Web TV" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzZtSy9X2aXh5H7cD_pPNdbu9-ikBG8-RRhG-ZXcD8ClfBeHE1QpLRpLVLPeO7Y-7xlrU&usqp=CAU" group-title="BRASIL", MKK Web TV || BRASIL
https://video01.logicahost.com.br/mkkwebtv/mkkwebtv/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Queens United TV" tvg-name="BR | Queens United TV" tvg-logo="https://www.queensunitedtv.com/wp-content/uploads/2022/08/cropped-logo1800x1800-queens-1536x624.png" group-title="BRASIL", Queens United TV || BRASIL
https://cdn2.connectbr.com.br/Queens/video.m3u8
#EXTINF:-1 tvg-id="BR | BCC Televisión" tvg-name="BR | BCC Televisión" tvg-logo="https://bcctelevision.com.br/wp-content/uploads/2020/05/logo-bcc-01.jpeg" group-title="BRASIL", BCC Televisión || BRASIL
https://video01.kshost.com.br/bccinternational523/bccinternational523/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Zoom" tvg-name="BR | TV Zoom" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/b9e29405fcb5d0ea24baa173a953c256.webp" group-title="BRASIL", TV Zoom || BRASIL
https://cdn.jmvstream.com/w/LVW-9730/LVW9730_LmUwslM8jt/playlist.m3u8
#EXTINF:-1 tvg-id="BR | CLC TV" tvg-name="BR | CLC TV" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/8d6cb19f3f5b307780c2169b89c826ae.webp" group-title="BRASIL", CLC TV || BRASIL
https://cdn2.connectbr.com.br/clc/video.m3u8
#EXTINF:-1 tvg-id="BR | TV Conquista" tvg-name="BR | TV Conquista" tvg-logo="http://tvconquista.com.br/wp-content/uploads/2020/01/logo-tv-conquista.png" group-title="BRASIL", TV Conquista || BRASIL
http://tvconquistalrv.duckdns.org:8080/hls/tvconquistalrv.m3u8
#EXTINF:-1 tvg-id="BR | KPop TV" tvg-name="BR | Kpop TV" tvg-logo="https://kpoptv.live/wp-content/uploads/2021/10/logokpoptvplay.png" group-title="BRASIL", Kpop TV || BRASIL
https://srv1.zcast.com.br/kpoptv/kpoptv/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Itape" tvg-name="BR | TV Itape" tvg-logo="https://www.tvitape.com.br/images/galeria/27032019/o_1d6vmal3d1mi71lcau52urbdd313.png" group-title="BRASIL", TV Itape || BRASIL
https://stream01.msolutionbrasil.com.br/hls/tvitape/live.m3u8
#EXTINF:-1 tvg-id="BR | TV São Caetano" tvg-name="BR | TV São Caetano" tvg-logo="https://play-lh.googleusercontent.com/dbEliB7s57MPfiXf7h0TP2ZGlkjoD3gwuDy7UJxQWUexYtQy-0iVaUEA2762GeuYqg=w240-h480-rw" group-title="BRASIL", TV São Caetano || BRASIL
https://video02.logicahost.com.br/tvcs/tvcs/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Erga Omnes" tvg-name="BR | TV Erga Omnes" tvg-logo="https://play-lh.googleusercontent.com/YHGYw1e_rlsLRQgnkH9CwCjaV9kfjdWYVsA4FAgsuZBytOLSjyWWNgGaKCBV3oE0UlM=w240-h480-rw" group-title="BRASIL", TV Erga Omnes || BRASIL
https://video01.kshost.com.br/erga9862/erga9862/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TTV Votorantim" tvg-name="BR | TV Votorantim" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/bb19ebdc1f27f11728c1d8b14c6cf6c7.webp" group-title="BRASIL", TTV Votorantim || BRASIL
https://v8.ciclano.io:1443/tvvotorantim/_definst_/tvvotorantim/playlist.m3u8
#EXTINF:-1 tvg-id="BR | ABC Brasil" tvg-name="BR | ABC Brasil" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-l/0e6b2a8234bf98dd9e50342cbe7631f9.webp" group-title="BRASIL", ABC Brasil || BRASIL
https://stmv1.srvstm.com/victor7513/victor7513/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Extremo Oriental TV" tvg-name="BR | Extremo Oriental TV" tvg-logo="http://eotv.live/img/logoSite.svg" group-title="BRASIL", Extremo Oriental TV || BRASIL
https://cdn2.connectbr.com.br/Soultv/video.m3u8
#EXTINF:-1 tvg-id="BR | CNB American" tvg-name="BR | CNB American" tvg-logo="https://blogger.googleusercontent.com/img/a/AVvXsEjynDkalFFhIMJNBonthDJbly27AVBDV01anRXO-1jqG0qhqXpxiXc5v9E8oAaVjmrzWeIzJlBd1zZmcqNL2oij8Vq7n47S7dc6yFn69WqrVFDd8XIt-172U34uN_QJSOfIwEj4z2etXDiDIJjoWGA6-WPaP2Bd01mi7SedapjC8THfyTDYOzObYzq4=w1200-h630-p-k-no-nu" group-title="BRASIL", CNB American || BRASIL
https://video03.logicahost.com.br/tvcnbamerican/tvcnbamerican/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Amplitude" tvg-name="BR | TV Amplitude" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/d/d9/Logotipo_da_TV_Amplitude_%28Ju%C3%ADna%29.png" group-title="BRASIL", TV Amplitude || BRASIL
https://cdn.jmvstream.com/w/LVW-10841/LVW10841_mT77z9o2cP/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Ok TV" tvg-name="BR | Ok TV" tvg-logo="https://play-lh.googleusercontent.com/4I3X7tqMi-GEbMmW7PL-S4WQkfepVT6eAzw-FZy8oW2R1gowpEdWDrD-9CrGeiT289WX=w240-h480-rw" group-title="BRASIL", Ok TV || BRASIL
https://acesso.ecast.site:3093/hybrid/play.m3u8
#EXTINF:-1 tvg-id="BR | Rede SDP TV" tvg-name="BR | Rede SDP TV" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/a30e743ba1d7faa989d62dfedd18e40b.webp" group-title="BRASIL", Rede SDP TV || BRASIL
https://video01.kshost.com.br:4443/moobi3963/moobi3963/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Rede Século 21" tvg-name="BR | Rede Século 21" tvg-logo="https://csprojetos.com/wp-content/uploads/2017/12/CS_MKT_TV-Sec-21C-01_Mar_2016_V03.png" group-title="BRASIL", Rede Século 21 || BRASIL
https://cdn.jmvstream.com/w/LVW-10024/ngrp:LVW10024_H3QLdAY6kx_all/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Evangelizar" tvg-name="BR | TV Evangelizar" tvg-logo="https://www.padrereginaldomanzotti.org.br/wp-content/themes/padre/images/logo.png" group-title="BRASIL", TV Evangelizar || BRASIL
https://5f593df7851db.streamlock.net/evangelizar/tv/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Fronteira Channel" tvg-name="BR | Fronteira Channel" tvg-logo="https://play-lh.googleusercontent.com/LRY5fQ6yCk06af9PzzE_BDKqpXL3rm2oiQtHsgsBRfpjUYmlioke3xqQ-STnbskw1yWw=w240-h480-rw" group-title="BRASIL", Fronteira Channel || BRASIL
https://srv4.zcast.com.br/fronteirachannel/fronteirachannel/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Fronteira Kids" tvg-name="BR | Fronteira Kids" tvg-logo="https://assets.iptv2022.com/uploads/channel/14827/thumb_iFRONTEIRA_KIDS.png" group-title="BRASIL", Fronteira Kids || BRASIL
https://srv5.zcast.com.br/fronteirakids/fronteirakids/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Fronteira Movies" tvg-name="BR | Fronteira Movies" tvg-logo="https://play-lh.googleusercontent.com/XIJ2IRczO14ecNZlXYsPTAyJ08gAatQo__GQXPSgDUbRDT2xtq91WRDWcFeAPzxltw=w240-h480-rw" group-title="BRASIL", Fronteira Movies || BRASIL
https://srv4.zcast.com.br/fronteiramovies/fronteiramovies/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Com Santos" tvg-name="BR | TV Com Santos" tvg-logo="https://pbs.twimg.com/media/Ft7GqWBXoAEcVoM?format=png&name=small" group-title="BRASIL", TV Com Santos || BRASIL
https://srv1.zcast.com.br/tvcomsantos/tvcomsantos/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Euronews del Brasil" tvg-name="BR | Euronews del Brasil" tvg-logo="https://play-lh.googleusercontent.com/5P0jFpedf_XyaLXgibuwODS1xLzL-yyeHtcR_UTXLDfLDYii0E7FRVeCFS8b_8yKVDHn" group-title="BRASIL", Euronews del Brasil || BRASIL
https://stmv3.voxtvhd.com.br/tveuronews/tveuronews/playlist.m3u8
#EXTINF:-1 tvg-id="BR | TV Mais" tvg-name="BR | TV Mais" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-l/99952bc10e0b9a0eeb6f47cbf054a87e.webp" group-title="BRASIL", TV Mais || BRASIL
https://stmv1.paineltv.net/tvmaisbrasil/tvmaisbrasil/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Ponte Preta TV" tvg-name="BR | Ponte Preta TV" tvg-logo="https://play-lh.googleusercontent.com/o4e5jrFkjyZqwhz8Y-WavLcip0kJqhTUEp8tlojryt52nXqXjNv4mUwNM3lye1RKnr0=w416-h235-rw" group-title="BRASIL", Ponte Preta TV || BRASIL
https://video01.soultv.com.br/pontepreta/pontepreta/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Sport Club Internacional TV" tvg-name="BR | Sport Club Internacional TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Escudo_do_Sport_Club_Internacional.svg/1200px-Escudo_do_Sport_Club_Internacional.svg.png" group-title="BRASIL", Sport Club Internacional TV || BRASIL
https://clubeinternacionalcod.akamaized.net/internacional/internacional/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Bem Melhor TV" tvg-name="BR | Bem Melhor TV" tvg-logo="https://yt3.googleusercontent.com/edix2OQh8_s85HzUdXE4IGNU5-DgojSn5khERJIBan84_-7fPIZbZtR26et0h-1mkoh6QZ-9dg=s900-c-k-c0x00ffffff-no-rj" group-title="BRASIL", Bem Melhor TV || BRASIL
https://video01.soultv.com.br/bemmelhor/bemmelhor/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Viajando Pelo Brasil TV" tvg-name="BR | Viajando Pelo Brasil TV" tvg-logo="https://pbs.twimg.com/profile_images/1227080934341652480/vqUJVVHq_400x400.jpg" group-title="BRASIL", Viajando Pelo Brasil TV || BRASIL
https://video01.soultv.com.br/viajandopelobrasil/viajandopelobrasil/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Ulb TV" tvg-name="BR | Ulb TV" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/1aac5113f6b93e9421acbff8fe86e7d3.webp" group-title="BRASIL", Ulb TV || BRASIL
https://tv01.livemustv.com.br/tv1760/tv1760/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Rede NGT" tvg-name="BR | Rede NGT" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/6044f74f88a8d13430fb41e4caeca5f0.webp" group-title="BRASIL", Rede NGT || BRASIL
https://streaming.cloudecast.com/memfs/d82529b5-3d6f-4995-acb1-6b0a2c3164fa.m3u8
#EXTINF:-1 tvg-id="BR | TV Aurora" tvg-name="BR | TV Aurora" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/fd4c141d0fb48710c4c56fd52c9df475.webp" group-title="BRASIL", TV Aurora || BRASIL
https://stream.skyspace.com.br:3831/stream/play.m3u8
#EXTINF:-1 tvg-id="BR | TV Nordestina" tvg-name="BR | TV Nordestina" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/a3e049a2ae92c266234e366a9b4ece76.webp" group-title="BRASIL", TV Nordestina || BRASIL
https://5ad482a77183d.streamlock.net/estudiosabiliojosegmail.com/estudiosabiliojosegmail.com/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Canal Rural" tvg-name="BR | Canal Rural" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/b/b8/CanalRuralBR2019.png/revision/latest/scale-to-width-down/250?cb=20220920211910&path-prefix=es" group-title="BRASIL", Canal Rural || BRASIL
https://607d2a1a47b1f.streamlock.net/crur/smil:canalrural.smil/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Canal Do Boi" tvg-name="BR | Canal Do Boi" tvg-logo="https://sba1.com/imagens/logo-canal-do-boi-branco-horizontal.png" group-title="BRASIL", Canal Do Boi || BRASIL
https://aovivo.equipea.com.br:5443/WebRTCAppEE/streams/577816251906375103810199.m3u8
#EXTINF:-1 tvg-id="BR | TV Pampa" tvg-name="BR | TV Pampa" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/1/1e/Logotipo_da_TV_Pampa_%282021%29.png" group-title="BRASIL", TV Pampa || BRASIL
https://59f1cbe63db89.streamlock.net:1443/tvpampa/_definst_/tvpampa/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Inova 360 TV" tvg-name="BR | Inova 360 TV" tvg-logo="https://play-lh.googleusercontent.com/c2kn95u_-EsvsEKsN826LcUOwXdDrEYLOMOZGDzPaLfh2G77XdFwr9l6vk2wR2Tdc8g=w240-h480-rw" group-title="BRASIL", Inova 360 TV || BRASIL
https://video01.soultv.com.br/inova360/inova360/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Pop Bola TV" tvg-name="BR | Pop Bola TV" tvg-logo="https://yt3.googleusercontent.com/VoZRcONeAgmPukuCdcN72EE_XICNmpghY4luJ0XhqndQN81c9DMh21P7cACKb8D_LY1FTXP8=s900-c-k-c0x00ffffff-no-rj" group-title="BRASIL", Pop Bola TV || BRASIL
https://video01.soultv.com.br/popbola/popbola/playlist.m3u8
#EXTINF:-1 tvg-id="BR | B Channel" tvg-name="BR | B Channel" tvg-logo="https://play-lh.googleusercontent.com/JeidTHkzKS6wWtrvYR5xqeOcRQK926oncf5InQNfyX2t4WfiTZpXPPrW2PN8kD6gLcPC=w240-h480-rw" group-title="BRASIL", B Channel || BRASIL
https://video01.soultv.com.br/bwe/bwe/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Universidade da Pessoa" tvg-name="BR | Universidade da Pessoa" tvg-logo="https://www.universidadedapessoa.com.br/wp-content/uploads/2023/03/Header-logo-UdP-2-2.png" group-title="BRASIL", Universidade da Pessoa || BRASIL
https://video01.soultv.com.br/universidadedapessoa/universidadedapessoa/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Doda Equestrian TV" tvg-name="BR | Doda Equestrian TV" tvg-logo="https://dodatrainingcenter.com.br/wp-content/uploads/2020/08/logo-branco-doda-center-260.png" group-title="BRASIL", Doda Equestrian TV || BRASIL
https://video01.soultv.com.br/doda/doda/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Avanca Brasil TV" tvg-name="BR | Avanca Brasil TV" tvg-logo="https://live.staticflickr.com/2053/2308291877_4e9d0bd251_c.jpg" group-title="BRASIL", Avanca Brasil TV || BRASIL
https://avancabrasilcod.akamaized.net/avancabrasil/avancabrasil/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Feliz 7 Play TV" tvg-name="BR | Feliz 7 Play TV" tvg-logo="https://play-lh.googleusercontent.com/T1Nhc3FOhxx-bp82uXJiufjjhT2ohPbYnMKXZBHaRJb-A__XNRac2twmOj8u8Akgzw" group-title="BRASIL", Feliz 7 Play TV || BRASIL
https://video01.soultv.com.br/feliz7play/feliz7play/playlist.m3u8
#EXTINF:-1 tvg-id="BR | Noticias Agricolas TV" tvg-name="BR | Noticias Agricolas TV" tvg-logo="https://pbs.twimg.com/media/FuDRZCtWAAcinhA?format=png&name=240x240" group-title="BRASIL", Noticias Agricolas TV || BRASIL
https://video01.soultv.com.br/noticiasagricolas/noticiasagricolas/playlist.m3u8
#EXTINF:-1 tvg-id="BR | The Market Guide TV" tvg-name="BR | The Market Guide TV" tvg-logo="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0002/2413/brand.gif?itok=kY7S_V8T" group-title="BRASIL", The Market Guide TV || BRASIL
https://video01.soultv.com.br/tvmarketguide/tvmarketguide/playlist.m3u8
#EXTINF:-1 tvg-id="BO | Unitel" tvg-name="BO | Unitel" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/New_Unitel_logo_HD.jpg/200px-New_Unitel_logo_HD.jpg" group-title="BOLIVIA", Unitel || BOLIVIA
http://200.59.188.3:8000/play/a09o
#EXTINF:-1 tvg-id="BO | Radio Televisión Popular" tvg-name="BO | Radio Televisión Popular" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/9/92/RTP_Bolivia_Hd.png" group-title="BOLIVIA", RTP || BOLIVIA
http://136.243.3.70:1935/RtpBolivia/RtpBolivia/playlist.m3u8
#EXTINF:-1 tvg-id="BO | Bolivisión" tvg-name="BO | Bolivisión" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/3/34/Bolivisi%C3%B3nHD.png/revision/latest/scale-to-width-down/1200?cb=20220726175333&path-prefix=es" group-title="BOLIVIA", Bolivisión || BOLIVIA
https://d3mghbm9e5zfap.cloudfront.net/Bolivision/2af819d7c8ab1c07658d1575e55800e5.sdp/playlist.m3u8
#EXTINF:-1 tvg-id="BO | Bolivia TV" tvg-name="BO | Bolivia TV" tvg-logo="https://play-lh.googleusercontent.com/dX47fheQl_3mwitKaPpE2W--3jNwf498GQF7-Wvt70nUht6sHhRAq9_RySAeBcHyC2M=w240-h480-rw" group-title="BOLIVIA", Bolivia TV || BOLIVIA
https://video1.getstreamhosting.com:1936/8224/8224/playlist.m3u8
#EXTINF:-1 tvg-id="BO | Asociación de Teledifusoras Bolivianas" tvg-name="BO | Asociación de Teledifusoras Bolivianas" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/ATBBo2020Logo.png/150px-ATBBo2020Logo.png" group-title="BOLIVIA", ATB || BOLIVIA
https://stream-01.nyc.dailymotion.com/sec(p5KA4QqcEoMI-Au0U41kOsw-70NjX9gRTeXi9KJEES3B1CD6LeU9EySZt3051UqL)/dm/3/x84eirw/s/live-3.m3u8
#EXTINF:-1 tvg-id="BO | Red Uno" tvg-name="BO | Red Uno" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Uno_logo.svg/245px-Uno_logo.svg.png" group-title="BOLIVIA", Red Uno || BOLIVIA
https://stream-03.nyc.dailymotion.com/sec(RAgBiwkvDxA3k2daAQfIDjNtFe8A6wwYAAsXlWUwEnrHgJq6eYYsQ1W8ZLLjBQQj)/dm/3/x8ko1ix/d/live-3.m3u8
#EXTINF:-1 tvg-id="BO | Red Periodistas Asociados Televisión" tvg-name="BO | Red Periodistas Asociados Televisión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Red_pat_new.jpg/220px-Red_pat_new.jpg" group-title="BOLIVIA", PAT || BOLIVIA
https://w8.redpat.tv:7777/play/120/index.m3u8
#EXTINF:-1 tvg-id="BO | Tele Estrella" tvg-name="BO | Tele Estrella" tvg-logo="https://teleestrella.tv.bo/wp-content/uploads/2023/02/Imagen1-4-1024x336.png" group-title="BOLIVIA", Tele Estrella || BOLIVIA
https://solo.disfrutaenlared.com:1936/teleestrella/teleestrella/playlist.m3u8
#EXTINF:-1 tvg-id="BO | Agro TV" tvg-name="BO | Agro TV" tvg-logo="https://teleestrella.tv.bo/wp-content/uploads/2023/01/logo-agro-trasnparente-1024x394.png" group-title="BOLIVIA", Agro TV || BOLIVIA
https://solo.disfrutaenlared.com:1936/agrotv/agrotv/playlist.m3u8
#EXTINF:-1 tvg-id="BO | Tele Fe" tvg-name="BO | Tele Fe" tvg-logo="https://teleestrella.tv.bo/wp-content/uploads/2023/01/LOGO-ROJO-TRANS-1.png" group-title="BOLIVIA", Tele Fe || BOLIVIA
https://solo.disfrutaenlared.com:1936/telefe/telefe/playlist.m3u8
#EXTINF:-1 tvg-id="BO | Abya Yala TV" tvg-name="BO | Abya Yala TV" tvg-logo="https://www.prensa-latina.cu/wp-content/uploads/2022/08/abya-yala-tv.jpg" group-title="BOLIVIA", Abya Yala TV || BOLIVIA
https://master.tucableip.com/abyayalatv/playlist.m3u8
#EXTINF:-1 tvg-id="BO | Erbol TV" tvg-name="BO | Erbol TV" tvg-logo="https://erbol.com.bo/sites/all/themes/atb/logo-principal.png" group-title="BOLIVIA", Erbol TV || BOLIVIA
https://cloud2.streaminglivehd.com:1936/8182/8182/playlist.m3u8
#EXTINF:-1 tvg-id="BO | Coral TV" tvg-name="BO | Coral TV" tvg-logo="https://play-lh.googleusercontent.com/4GZtRfAZ36H4pyoxz1htoVE46eRt_M9sj2Y56En4h0Neezca7wFMaX7ec2n9sW5zJZo=s180-rw" group-title="BOLIVIA", Coral TV || BOLIVIA
https://tv.mediacp.eu:8081/coraltv/index.m3u8
#EXTINF:-1 tvg-id="BO | TV Universitaria" tvg-name="BO | TV Universitaria" tvg-logo="http://tvmi.com.bo/wp-content/uploads/sites/2/2017/11/logotvu.png" group-title="BOLIVIA", TV Universitaria || BOLIVIA
https://video.live.com.bo:3731/live/tvuumsalive.m3u8
#EXTINF:-1 tvg-id="BO | Seo TV" tvg-name="BO | Seo TV" tvg-logo="https://www.lyngsat.com/logo/tv/ss/seo-tv-bo.png" group-title="BOLIVIA", Seo TV || BOLIVIA
https://live.seo.tv.bo/live/SEO1.m3u8
#EXTINF:-1 tvg-id="BO | Seo TV 2 Kids" tvg-name="BO | Seo TV 2 Kids" tvg-logo="https://www.lyngsat.com/logo/tv/ss/seo-tv-bo.png" group-title="BOLIVIA", Seo TV 2 Kids || BOLIVIA
https://live.seo.tv.bo/live/SEO2.m3u8
#EXTINF:-1 tvg-id="BO | Seo TV 3 Novelas" tvg-name="BO | Seo TV 3 Novelas" tvg-logo="https://www.lyngsat.com/logo/tv/ss/seo-tv-bo.png" group-title="BOLIVIA", Seo TV 3 Novelas || BOLIVIA
https://live.seo.tv.bo/live/SEO3.m3u8
#EXTINF:-1 tvg-id="BO | Seo TV 3 Novelas 2" tvg-name="BO | Seo TV 3 Novelas 2" tvg-logo="https://www.lyngsat.com/logo/tv/ss/seo-tv-bo.png" group-title="BOLIVIA", Seo TV 3 Novelas 2 || BOLIVIA
https://live.seo.tv.bo/live/SEO6.m3u8
#EXTINF:-1 tvg-id="BO | Seo TV 4 Películas" tvg-name="BO | Seo TV 4 Películas" tvg-logo="https://www.lyngsat.com/logo/tv/ss/seo-tv-bo.png" group-title="BOLIVIA", Seo TV 4 Películas || BOLIVIA
https://live.seo.tv.bo/live/SEO4.m3u8
#EXTINF:-1 tvg-id="BO | Seo TV Yungas" tvg-name="BO | Seo TV Yungas" tvg-logo="https://www.lyngsat.com/logo/tv/ss/seo-tv-bo.png" group-title="BOLIVIA", Seo TV Yungas || BOLIVIA
https://live.seo.tv.bo/live/SEO7.m3u8
#EXTINF:-1 tvg-id="BO | Univalle TV" tvg-name="BO | Univalle TV" tvg-logo="https://i0.wp.com/univalletelevision.com/wp-content/uploads/2022/10/282564259_10158977843387405_6403480060241523290_n-removebg-preview1-e1654154741392-edited-1.png?w=500&ssl=1" group-title="BOLIVIA", Univalle TV || BOLIVIA
https://master.tucableip.com/univalletv/index.m3u8
#EXTINF:-1 tvg-id="BO | Red CCTV" tvg-name="BO | Red CCTV" tvg-logo="https://redcctvbolivia.com/images/Recurso-4.png" group-title="BOLIVIA", Red CCTV || BOLIVIA
https://solo.disfrutaenlared.com:1936/redcctv/redcctv/playlist.m3u8
#EXTINF:-1 tvg-id="BO | Facetas Televisión" tvg-name="BO | Facetas Televisión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/FTVHD.png/200px-FTVHD.png" group-title="BOLIVIA", Facetas Televisión || BOLIVIA
https://master.tucableip.com/ftv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="BO | Guadalupe TV de Sucre" tvg-name="BO | Guadalupe TV de Sucre" tvg-logo="https://image.winudf.com/v2/image/Y29tLmlzdGJvbGl2aWEuZ3VhZGFsdXBldHZfaWNvbl8xNTMxNTkzNTM4XzA1Nw/icon.png?w=184&fakeurl=1" group-title="BOLIVIA", Guadalupe TV de Sucre || BOLIVIA
https://solo.disfrutaenlared.com:1936/guadalupetv/guadalupetv/playlist.m3u8
#EXTINF:-1 tvg-id="BO | RTVE Canal 50" tvg-name="BO | RTVE Canal 50" tvg-logo="https://redencuentro.com/wp-content/uploads/2021/09/logo_rtve_oficial.png" group-title="BOLIVIA", Radio TV Encuentro || BOLIVIA
https://vdo.grupolimalive.com:3241/live/encuentrotvlive.m3u8
#EXTINF:-1 tvg-id="BO | Ceacom TV" tvg-name="BO | Ceacom TV" tvg-logo="https://ceacomtv.com/images/ceacom/logos/Logo%20CEACOM%2002%20icon.png" group-title="BOLIVIA", Ceacom TV || BOLIVIA
https://eu1.servers10.com:8081/ceacomtv/index.m3u8
#EXTINF:-1 tvg-id="BO | Mega TV" tvg-name="BO | Mega TV" tvg-logo="https://megatvbolivia.com/wp-content/uploads/2022/01/megalog.png" group-title="BOLIVIA", Mega TV || BOLIVIA
https://solo.disfrutaenlared.com:1936/tvcbba/tvcbba/playlist.m3u8
#EXTINF:-1 tvg-id="BO | Megavisión TV" tvg-name="BO | Megavisión TV" tvg-logo="https://directostv.teleame.com/wp-content/uploads/2018/04/Megavisi%C3%B3n-Bolivia-en-vivo-Online-100x70.png" group-title="BOLIVIA", Megavisión TV || BOLIVIA
https://video.live.com.bo:3699/live/megavisionlive.m3u8
#EXTINF:-1 tvg-id="BO | TV Culturas" tvg-name="BO | TV Culturas" tvg-logo="https://pbs.twimg.com/media/F7wgkOVW0AAGFku?format=png&name=small" group-title="BOLIVIA", TV Culturas || BOLIVIA
https://5ca9af4645e15.streamlock.net/tvculturas/videotvculturas/playlist.m3u8
#EXTINF:-1 tvg-id="BO | Gigavisión" tvg-name="BO | Gigavisión" tvg-logo="https://pbs.twimg.com/profile_images/889663440620531712/JlKtXQYa_400x400.jpg" group-title="BOLIVIA", Gigavisión || BOLIVIA
https://master.tucableip.com//gigavision/playlist.m3u8
#EXTINF:-1 tvg-id="BO | TV Latina" tvg-name="BO | TV Latina" tvg-logo="https://www.audiokiss.com/tvlatina/wp-content/uploads/sites/7/2021/03/logo-tvlatina.png" group-title="BOLIVIA", TV Latina || BOLIVIA
https://master.tucableip.com/live/tvlatinamontero/playlist.m3u8
#EXTINF:-1 tvg-id="BO | Imperial TV" tvg-name="BO | Imperial TV" tvg-logo="https://play-lh.googleusercontent.com/484nloAxV2ZpMByON_Fd8EML3IsxKlGLWTOLL7leqQjuNGaKoYYQk9WFdayVMXxhqmc" group-title="BOLIVIA", Imperial Televisión || BOLIVIA
https://vdo.grupolimalive.com:3162/live/imperialtvlive.m3u8
#EXTINF:-1 tvg-id="BO | IN TV" tvg-name="BO | IN TV" tvg-logo="https://in.tv.bo/wp-content/uploads/2023/06/cropped-jcjknkl.png.pagespeed.ce.C47TH4N7dK.png" group-title="BOLIVIA", IN TV || BOLIVIA
https://solo.disfrutaenlared.com:1936/intv/intv/playlist.m3u8
#EXTINF:-1 tvg-id="BO | Ayni Televisión" tvg-name="BO | Ayni Televisión" tvg-logo="https://play-lh.googleusercontent.com/3LYp4KCoxAtKuMgDN5S6kHSxFuA7qxQoUNftznmnzyjcDp4bgqe6CGSQ4YMdFJ4rDAM" group-title="BOLIVIA", Ayni TV || BOLIVIA
http://hd.istbolivia.com:1935/aynitv/aynitv/playlist.m3u8
#EXTINF:-1 tvg-id="BO | Xto TV" tvg-name="BO | Xto TV" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLQfEUIGzraeGwUiQbZr6V7ElcOfcdhljNbB9BlQbA=s900-c-k-c0x00ffffff-no-rj" group-title="BOLIVIA", Xto TV || BOLIVIA
http://136.243.3.70:1935/XtoTv/XtoTv/playlist.m3u8
#EXTINF:-1 tvg-id="BO | Neo TV Canal 31" tvg-name="BO | Neo TV Canal 31" tvg-logo="http://www.tucableip.com/canales/neotv.png" group-title="BOLIVIA", Neo TV || BOLIVIA
https://tv1.mediacp.eu:3661/live/rlbpwxvhlive.m3u8
#EXTINF:-1 tvg-id="BO | Tu TV" tvg-name="BO | Tu TV" tvg-logo="https://yt3.ggpht.com/U47VmnRDhgLjdt3il6T-qGIRgfsdVefCCbhJO6FdtjoRg3wP3a6_Jcg9zKboHqcrpBD-5hwGug=s88-c-k-c0x00ffffff-no-rj" group-title="BOLIVIA", Tu TV || BOLIVIA
https://solo.disfrutaenlared.com:1936/tutv/tutv/playlist.m3u8
#EXTINF:-1 tvg-id="BO | Delta Instituto TV" tvg-name="BO | Delta Instituto TV" tvg-logo="https://pbs.twimg.com/media/Fj1NPSYWIAAL6MU?format=png&name=small" group-title="BOLIVIA", Delta Instituto TV || BOLIVIA
https://vsrv1.az-streamingserver.com:3068/live/vdsocmnulive.m3u8
#EXTINF:-1 tvg-id="BO | Carigso Televisión" tvg-name="BO | Carigso Televisión" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4ChCFlI-i5W3XYw-pFZ6jFR5eEIa--LXALWrzCg4bxt7qtIBOGMoOA4VaoRL76ovO3I&usqp=CAU" group-title="BOLIVIA", Carigso Televisión || BOLIVIA
https://vdo.panelchs.com:3236/live/carigsoradiotvlive.m3u8
#EXTINF:-1 tvg-id="BO | Gogoplay TV" tvg-name="BO | Gogoplay TV" tvg-logo="https://latinartv.com/sites/default/files/logos/gogo-play.png" group-title="BOLIVIA", Gogoplay TV || BOLIVIA
https://250weu.bozztv.com/ssh101/ssh101/gogoplay/playlist.m3u8
#EXTINF:-1 tvg-id="BO | TV Show Oruro" tvg-name="BO | TV Show Oruro" tvg-logo="https://play-lh.googleusercontent.com/pN1aZEuwKrzn1ffaVWgnK1-AXQuIcBRqcbW8F2NK24Wdk2evewuglh2sxG2xIHlH6Qw=w240-h480-rw" group-title="BOLIVIA", TV Show Oruro || BOLIVIA
http://tv.istbolivia.com:1935/tvshow/tvshow/playlist.m3u8
#EXTINF:-1 tvg-id="BO | Cristal de Televisión" tvg-name="BO | Cristal de Televisión" tvg-logo="https://pbs.twimg.com/media/FZ6Up_DWAAAIYZY?format=png&name=240x240" group-title="BOLIVIA", Cristal de Televisión || BOLIVIA
https://master.tucableip.com/cristaltv/index.m3u8
#EXTINF:-1 tvg-id="BO | Canal F10" tvg-name="BO | Canal F10" tvg-logo="https://f10.tv.bo/images/Recurso-4.png" group-title="BOLIVIA", Canal F10 || BOLIVIA
https://video.live.com.bo:3253/live/f10hdlive.m3u8
#EXTINF:-1 tvg-id="BO | Cinerama Televisión" tvg-name="BO | Cinerama Televisión" tvg-logo="https://cineramatv.com/wp-content/uploads/2023/02/logo-2.jpg" group-title="PELICULAS Y SERIES", Cinerama Televisión || BOLIVIA
https://5d00db0e0fcd5.streamlock.net/7062/7062/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Telecanal" tvg-name="CL | Telecanal" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Telecanal_-_2011_logo_%283D_variant%29.png/150px-Telecanal_-_2011_logo_%283D_variant%29.png" group-title="CHILE", Telecanal || CHILE
https://unlimited2-cl-isp.dps.live/tctc/tctc.smil/playlist.m3u8?PlaylistASTRAL
#EXTINF:-1 tvg-id="CL | La Red" tvg-name="CL | La Red" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Emblema_de_La_Red.png/200px-Emblema_de_La_Red.png" group-title="CHILE", La Red || CHILE
https://unlimited2-cl-isp.dps.live/lared/lared.smil/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="CL | TVN" tvg-name="CL | TVN" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Logotipo_de_Televisi%C3%B2n_Nacional_de_Chile.svg/150px-Logotipo_de_Televisi%C3%B2n_Nacional_de_Chile.svg.png" group-title="CHILE", TVN || CHILE
http://www.onlinetv365.xyz:8080/live/57tyjhg65ljouni7yu711/thjhg3468ihj/16.m3u8
#EXTINF:-1 tvg-id="CL | TV Chile" tvg-name="CL | TV Chile" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Logotipo_de_TV_Chile.svg/100px-Logotipo_de_TV_Chile.svg.png" group-title="CHILE", TV Chile || CHILE
http://181.189.243.254:8000/play/a0nw/index.m3u8
#EXTINF:-1 tvg-id="CL | Mega" tvg-name="CL | Mega" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Mega_Chile_2020.png/145px-Mega_Chile_2020.png" group-title="CHILE", Mega || CHILE
https://unlimited2-cl-isp.dps.live/mega/mega.smil/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="CL | Chilevisión" tvg-name="CL | Chilevisión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Logotipo_Principal_de_Chilevisi%C3%B3n.svg/250px-Logotipo_Principal_de_Chilevisi%C3%B3n.svg.png" group-title="CHILE", Chilevisión || CHILE
http://www.onlinetv365.xyz:8080/live/57tyjhg65ljouni7yu711/thjhg3468ihj/4.m3u8
#EXTINF:-1 tvg-id="CL | UChile TV" tvg-name="CL | UChile TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/UChile_TV_logo_2020.png/245px-UChile_TV_logo_2020.png" group-title="CHILE", UChile TV || CHILE
https://unlimited1-cl-isp.dps.live/uchiletv/uchiletv.smil/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="CL | Canal 13" tvg-name="CL | Canal 13" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Emblema_del_Canal_13_Chile.svg/133px-Emblema_del_Canal_13_Chile.svg.png" group-title="CHILE", Canal 13 || CHILE
http://201.222.44.220:4227/play/a02l/index.m3u8
#EXTINF:-1 tvg-id="CL | 13C" tvg-name="CL | 13C" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/13C_2018.png/150px-13C_2018.png" group-title="CHILE", 13C || CHILE
http://138.255.102.3:25461/restreamin/U9ydnT8kwL/148
#EXTINF:-1 tvg-id="CL | Rec TV" tvg-name="CL | Rec TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Logotipo_de_Rec_TV.png/150px-Logotipo_de_Rec_TV.png" group-title="CHILE", Rec TV || CHILE
http://138.255.102.3:25461/restreamin/U9ydnT8kwL/149
#EXTINF:-1 tvg-id="CL | Tele 13" tvg-name="CL | Tele 13" tvg-logo="https://www-storage.13.cl/t13/assets/svg/logos-t13-2022-v2.svg" group-title="CHILE", 742 | Tele 13 || CHILE
https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/t13/t13.smil/playlist.m3u8?did=b2104223689364b8aeeb4920b
#EXTINF:-1 tvg-id="CL | UES TV" tvg-name="CL | UES TV" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGebESilqIFPpblJE2rKuwpKhmbboSvocddiEmfqVjAwvT6UPJEzqQduS-JhQs2F5xio&usqp=CAU" group-title="CHILE", UES TV || CHILE
https://marine2.miplay.cl/uestv/playlist.m3u8
#EXTINF:-1 tvg-id="CL | NTV" tvg-name="CL | NTV" tvg-logo="https://miplay.cl/wp-content/uploads/2022/01/ntv-1920-1080-300x169.jpg" group-title="CHILE", NTV || CHILE
https://marine2.miplay.cl/ntv/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Wapp TV" tvg-name="CL | Wapp TV" tvg-logo="https://ott-assets.mdstrm.com/51tv/assets/images/logo-light-white.png" group-title="CHILE", Wapp TV || CHILE
https://marine2.miplay.cl/wapp/playlist.m3u8
#EXTINF:-1 tvg-id="CL | TVU" tvg-name="CL | TVU" tvg-logo="https://www.tvu.cl/_templates/desktop/includes/img/LOGO-TVU-AZUL.png" group-title="CHILE", TVU || CHILE
https://unlimited1-us.dps.live/tvu/tvu.smil/playlist.m3u8
#EXTINF:-1 tvg-id="CL | TVR" tvg-name="CL | TVR" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Televisi%C3%B3n_Regional_de_Chile_-_logo.png/150px-Televisi%C3%B3n_Regional_de_Chile_-_logo.png" group-title="CHILE", TVR || CHILE
https://unlimited1-us.dps.live/tvr/tvr.smil/playlist.m3u8
#EXTINF:-1 tvg-id="CL | TV+" tvg-name="CL | TV+" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/TV%2B_%282018%29.png/245px-TV%2B_%282018%29.png" group-title="CHILE", TV+ || CHILE
https://marine2.miplay.cl/tvmas/playlist.m3u8
#EXTINF:-1 tvg-id="CL | TV Más 2" tvg-name="CL | TV Más 2" tvg-logo="https://miplay.cl/wp-content/uploads/2022/01/tvmas2-1920-1080-300x169.jpg" group-title="CHILE", TV Más 2 || CHILE
https://marine2.miplay.cl/tateti/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Spectrum Channel" tvg-name="CL | Spectrum Channel" tvg-logo="https://miplay.cl/wp-content/uploads/2022/01/spectrum-1920X1080-300x169.png" group-title="ESTILOS DE VIDA", Spectrum Channel
https://panel.miplay.cl:8081/spectrumchannel/index.m3u8
#EXTINF:-1 tvg-id="CL | Tevex" tvg-name="CL | Tevex" tvg-logo="https://tevex.cl/wp-content/uploads/2021/01/logo_tevex_formato_3.svg" group-title="CHILE", Tevex || CHILE
https://marine2.miplay.cl/tevex/playlist.m3u8
#EXTINF:-1 tvg-id="CL | TV Senado" tvg-name="CL | TV Senado" tvg-logo="https://tv.senado.cl/tvsenado/site/artic/20160901/imag/foto_0000000920160901163145.png" group-title="CHILE", TV Senado || CHILE
https://janus-tv-ply.senado.cl/playlist/stream_hls.m3u8?s=tvsenado-sd&t=1682284510&uuid=b6c1be1b-e28d-4372-b5f0-a36a683b82c3&rand=0.42224578681638936
#EXTINF:-1 tvg-id="CL | Santiago Televisión" tvg-name="CL | Santiago Televisión" tvg-logo="https://www.santiagotelevision.cl/imag/v1/icon/logoHeader.png" group-title="CHILE", Santiago Televisión || CHILE
https://stv.janus.cl/playlist/stream.m3u8
#EXTINF:-1 tvg-id="CL | Tec TV" tvg-name="CL | Tec TV" tvg-logo="https://tectv.cl/wp-content/uploads/2020/10/TECTV-sin-hd.png" group-title="CHILE", Tec TV || CHILE
https://ccd07c4d72b0.ngrok.app/hls/stream.m3u8
#EXTINF:-1 tvg-id="CL | Canal 2 Televisión San Antonio" tvg-name="CL | Canal 2 Televisión San Antonio" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/6/61/Descarga3.jpg/revision/latest?cb=20190826001246&path-prefix=es" group-title="CHILE", Canal 2 Televisión San Antonio || CHILE
https://unlimited1-us.dps.live/canal2/canal2.smil/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Décima TV" tvg-name="CL | Décima TV" tvg-logo="https://miplay.cl/wp-content/uploads/2022/01/decimatv-1920-1080-300x169.jpg" group-title="CHILE", Décima TV || CHILE
https://unlimited6-cl.dps.live/decimatv/decimatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Canal 57 Melipilla" tvg-name="CL | Canal 57 Melipilla" tvg-logo="https://play-lh.googleusercontent.com/h5mGowi_1pK7-i-RnjsINVW75HhI4n1lSz9UXDX91UcxlBgN0Skb7yQYAH5FudjnusO2" group-title="CHILE", Canal 57 Melipilla || CHILE
https://panel.tvstream.cl:1936/8016/8016/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Canal 74 Teve" tvg-name="CL | Canal 74 Teve" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLRn7MLspPwiS6I5ZdpxDaLtL4AVOrLMnuKTup-f=s88-c-k-c0x00ffffff-no-rj" group-title="CHILE", Canal 74 Teve || CHILE
https://stmv1.zcasthn.com.br/canal74hd/canal74hd/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Arica TV" tvg-name="CL | Arica TV" tvg-logo="https://arica.tv/wp-content/uploads/2020/02/aricatv-color_Mesa-de-trabajo-1-1-1536x1536.png" group-title="CHILE", Arica TV || CHILE
https://5eaccbab48461.streamlock.net:1936/8002/8002/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Iquique TV" tvg-name="CL | Iquique TV" tvg-logo="https://i0.wp.com/directostv.teleame.com/wp-content/uploads/2017/10/Iquique-TV-en-vivo-Online.png?fit=1920%2C1080&ssl=1" group-title="CHILE", Iquique TV || CHILE
https://marine2.miplay.cl/arcatel/iquiquetv720/video.m3u8
#EXTINF:-1 tvg-id="CL | TVO Tocopilla" tvg-name="CL | TVO Tocopilla" tvg-logo="https://pbs.twimg.com/media/FY2v-8zWIAEQKXK?format=png&name=360x360" group-title="CHILE", TVO Tocopilla || CHILE
https://srv3.zcast.com.br/cristian5592/cristian5592/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Antofagasta TV" tvg-name="CL | Antofagasta TV" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLRTu0ivxkbCTQgcVOVpUOj4elhlVTcofuxZSKz-MA=s900-c-k-c0x00ffffff-no-rj" group-title="CHILE", Antofagasta TV || CHILE
https://unlimited1-us.dps.live/atv/atv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Atacama Noticias TV" tvg-name="CL | Atacama Noticias TV" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLQJZzMDrLu494hgxx9tFbqdxw1VH_sMvj_WphTeOg=s900-c-k-c0x00ffffff-no-rj" group-title="CHILE", Atacama Noticias TV || CHILE
https://v2.tustreaming.cl/atacamanoticias/index.m3u8
#EXTINF:-1 tvg-id="CL | Bío-Bío TV" tvg-name="CL | Bío-Bío TV" tvg-logo="https://www.biobiochile.cl/assets/img/logo-bbtv-header.png" group-title="CHILE", Bío-Bío TV || CHILE
https://unlimited1-cl-isp.dps.live/bbtv/bbtv.smil/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="CL | Canal TV 8" tvg-name="CL | Canal TV 8" tvg-logo="https://www.canaltv8.cl/wp-content/uploads/2022/07/logo-normal.png" group-title="CHILE", Canal TV 8 || CHILE
https://panel.tvstream.cl:1936/8032/8032/playlist.m3u8
#EXTINF:-1 tvg-id="CL | TV Quinta Región" tvg-name="CL | TV Quinta Región" tvg-logo="https://www.streamingmaster.cl/wp-content/uploads/2023/02/tvq.jpg" group-title="CHILE", TV Quinta Región || CHILE
https://mediacpstreamchile.com:1936/8002/8002/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Madero TV" tvg-name="CL | Madero TV" tvg-logo="https://www.maderotv.cl/wp-content/uploads/2019/11/cropped-LOGO-MADEROTV.png" group-title="CHILE", Madero TV || CHILE
https://www.cloudscriptdog.cl:19360/madero-video-01/madero-video-01.m3u8
#EXTINF:-1 tvg-id="CL | TV5 Linares" tvg-name="CL | TV5 Linares" tvg-logo="https://i.ytimg.com/an/AqNZagXjd1Q/9258c1f5-e3b1-4fef-acdd-be19f1f359d2_mq.jpg?v=5d6c2708" group-title="CHILE", TV5 Linares || CHILE
https://unlimited1-us.dps.live/tv5/tv5.smil/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Canal Latino 54" tvg-name="CL | Canal Latino 54" tvg-logo="https://www.coolstreaming.us/img/ch/image54700767901.jpg" group-title="CHILE", Canal Latino 54 || CHILE
https://live.chileservidores.com:8081/latina/index.m3u8
#EXTINF:-1 tvg-id="CL | Holvoet TV" tvg-name="CL | Holvoet TV" tvg-logo="https://newses.cgtn.com/n/BfJAA-CIA-HAA/BHJeGAA.jpg" group-title="CHILE", Holvoet TV || CHILE
http://unlimited6-cl.dps.live/holvoettv/holvoettv.smil/holvoettv/livestream1/chunks.m3u8
#EXTINF:-1 tvg-id="CL | Pucón TV" tvg-name="CL | Pucón TV" tvg-logo="https://pbs.twimg.com/profile_images/710193965283336192/iOJ3Jihf_400x400.jpg" group-title="CHILE", Pucón TV || CHILE
https://marine2.miplay.cl/pucontv/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Molina TV" tvg-name="CL | Molina TV" tvg-logo="https://pbs.twimg.com/media/FYvt_lgXoAECzkt?format=png&name=120x120" group-title="CHILE", Molina TV || CHILE
https://marine2.miplay.cl/molinatv/playlist.m3u8
#EXTINF:-1 tvg-id="CL | ITV Patagonia" tvg-name="CL | ITV Patagonia" tvg-logo="https://yt3.googleusercontent.com/ytc/AL5GRJXXsRZ9MYPEdvDW2saIt--C3kF8CWtzKluQWltR2g=s900-c-k-c0x00ffffff-no-rj" group-title="CHILE", ITV Patagonia || CHILE
https://redirector.dps.live/hls/itv/playlist.m3u8
#EXTINF:-1 tvg-id="CL | CSTV" tvg-name="CL | CSTV" tvg-logo="https://pbs.twimg.com/media/FYxfo5zXkAAmRz-?format=png&name=360x360" group-title="CHILE", CSTV || CHILE
https://videostreaming.cloudserverlatam.com/CSTV/CSTV/playlist.m3u8
#EXTINF:-1 tvg-id="CL | El Pingüino TV" tvg-name="CL | El Pingüino TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/7/7c/Pinguino_TV.png" group-title="CHILE", El Pingüino TV || CHILE
https://streaming.elpinguino.com:5391/live/EP.smil/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Huasco TV" tvg-name="CL | Huasco TV" tvg-logo="https://pbs.twimg.com/media/FYvp91HWQAERqTD?format=png&name=small" group-title="CHILE", Huasco TV || CHILE
https://paneltv.online:1936/8024/8024/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Alternativa TV de Huasco" tvg-name="CL | Alternativa TV de Huasco" tvg-logo="https://i0.wp.com/alternativatv.cl/wp-content/uploads/2021/06/BANNER-ALTERNATIVA-TV-ONLINE.jpg?w=720&ssl=1" group-title="CHILE", Alternativa TV de Huasco || CHILE
https://5eaccbab48461.streamlock.net:1936/8216/8216/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Región Televisión Ñuble" tvg-name="CL | Región Televisión Ñuble" tvg-logo="https://pbs.twimg.com/media/FZ6GE0NXkAE6E87?format=png&name=small" group-title="CHILE", Región Televisión Ñuble || CHILE
https://live.tvcontrolcp.com:1936/guzman/guzman/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Club TV" tvg-name="CL | Club TV" tvg-logo="https://www.clubtv.cl/wp-content/uploads/2022/06/logo-grande.png" group-title="CHILE", Club TV || CHILE
https://mediacpstreamchile.com:1936/clubtv/clubtv/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Opinión Sur TV" tvg-name="CL | Opinión Sur TV" tvg-logo="https://i2.paste.pics/bbb0373472ad737d7f75d40d9c3d1839.png" group-title="CHILE", Opinión Sur TV || CHILE
https://mediacpstreamchile.com:1936/opinionsur/opinionsur/playlist.m3u8
#EXTINF:-1 tvg-id="CL | Plaza TV" tvg-name="CL | Plaza TV" tvg-logo="https://tuplazatv.cl/wp-content/uploads/2022/10/logo_plaza.png" group-title="MUSICA Y REALITIES", Plaza TV
https://marine2.miplay.cl/girovisual/playlist.m3u8
#EXTINF:-1 tvg-id="AR | América" tvg-name="AR | América" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Am%C3%A9rica_TV_%28Nuevo_logo_Junio_2020%29.png/133px-Am%C3%A9rica_TV_%28Nuevo_logo_Junio_2020%29.png" group-title="ARGENTINA", América || ARGENTINA
http://191.102.90.97:8000/play/a0i9/index.m3u8
#EXTINF:-1 tvg-id="AR | TVP" tvg-name="AR | TVP" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/TVP_-_Televisi%C3%B3n_P%C3%BAblica_%282021%29.svg/200px-TVP_-_Televisi%C3%B3n_P%C3%BAblica_%282021%29.svg.png" group-title="ARGENTINA", Televisión Pública || ARGENTINA
https://cntlnk-main-edge-access.secure.footprint.net/entrypoint/c7_vivo01_dai_source-20001_all_1080p.m3u8
#EXTINF:-1 tvg-id="AR | Telefe" tvg-name="AR | Telefe" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Telefe_Internacional_%282018%29.png/150px-Telefe_Internacional_%282018%29.png" group-title="INTERNACIONALES", Telefe Internacional || ARGENTINA
https://cdn3.eco.cdn.moderntv.eu/econocable/stream/TELEFE/40-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DTELEFE_stream_te&_cdn_session=1359492523&_cdn_timestamp=1699114966&_cdn_token=4a5d55e999d414c77e9355b06958b1b31d405a77
#EXTINF:-1 tvg-id="AR | El Nueve" tvg-name="AR | El Nueve" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/d1ac690d1c0234a702dae9d12a4cce77.webp" group-title="INTERNACIONALES", El Nueve || ARGENTINA
https://2a1773fcc0c94a639b422d1cf7ba14b7.mediatailor.us-east-1.amazonaws.com/v1/manifest/4c8323052bc3dbd9aa2eba0b638d8495561e8377/JW-Octubre-Channel09/9ad564ff-d99c-4aee-9fcd-1e727eb09887/3.m3u8
#EXTINF:-1 tvg-id="AR | Canal 13 de Buenos Aires" tvg-name="AR | Canal 13 de Buenos Aires" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Logo_de_eltrece_lanzado_en_2016.png/120px-Logo_de_eltrece_lanzado_en_2016.png" group-title="ARGENTINA", Canal 13 de Buenos Aires || ARGENTINA
http://www.onlinetv365.xyz:8080/live/57tyjhg65ljouni7yu711/thjhg3468ihj/12.m3u8
#EXTINF:-1 tvg-id="AR | El Trece Internacional" tvg-name="AR | El Trece Internacional" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Isotipo_eltrece_2016.png/120px-Isotipo_eltrece_2016.png" group-title="INTERNACIONALES", El Trece Internacional || ARGENTINA
https://cdn3.eco.cdn.moderntv.eu/econocable/stream/TRECEARGENTINA/20-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DTRECEARGENTINA_stream_e4&_cdn_session=1359492771&_cdn_timestamp=1699114971&_cdn_token=3d311739f5d7dcfd304b0c4b30dc626a7a570802
#EXTINF:-1 tvg-id="AR | Ciudad Mágica TV" tvg-name="AR | Ciudad Mágica TV" tvg-logo="https://i2.paste.pics/83552d3fde11360055725a8d478f3c53.png" group-title="ARGENTINA", Ciudad Mágica TV || ARGENTINA
https://tv.initium.net.ar:3235/live/grupocitylive.m3u8
#EXTINF:-1 tvg-id="AR | Argentinísima Satelital" tvg-name="AR | Argentinísima Satelital" tvg-logo="https://i.imgur.com/bs4truU.png" group-title="ARGENTINA", Argentinísima Satelital || ARGENTINA
https://cronos.aldeaglobal.net.ar/hls/argentinisima.m3u8
#EXTINF:-1 tvg-id="AR | Canal 22 de Buenos Aires" tvg-name="AR | Canal 22 de Buenos Aires" tvg-logo="https://canal22web.com/wp-content/uploads/2020/09/80.jpg" group-title="ARGENTINA", Canal 22 de Buenos Aires || ARGENTINA
https://5f700d5b2c46f.streamlock.net/canal22/canal22/playlist.m3u8
#EXTINF:-1 tvg-id="AR | Aire de Santa Fé" tvg-name="AR | Aire de Santa Fé" tvg-logo="https://directostv.teleame.com/wp-content/uploads/2017/10/Aire-de-Santa-Fe-en-vivo-Online.png" group-title="ARGENTINA", Aire de Santa Fé || ARGENTINA
https://sc1.stweb.tv/airedigital/live/playlist.m3u8
#EXTINF:-1 tvg-id="AR | Canal 10 de Córdoba" tvg-name="AR | Canal 10 de Córdoba" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Canal_10_C%C3%B3rdoba_%28Logo_2018%29.png/133px-Canal_10_C%C3%B3rdoba_%28Logo_2018%29.png" group-title="ARGENTINA", Canal 10 de Córdoba || ARGENTINA
https://stream.arcast.live/canal10/ngrp:canal10_all/playlist.m3u8
#EXTINF:-1 tvg-id="AR | Canal NET" tvg-name="AR | Canal NET" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Net_TV_logo.png/120px-Net_TV_logo.png" group-title="ARGENTINA", Canal NET || ARGENTINA
https://unlimited1-us.dps.live/nettv/nettv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="AR | Canal 7 de Salta" tvg-name="AR | Canal 7 de Salta" tvg-logo="https://canal7salta.com/wp-content/uploads/2017/08/cropped-cropped-LOGO-1.png" group-title="ARGENTINA", Canal 7 de Salta || ARGENTINA
https://vivo.solumedia.com:19360/cooperativa/cooperativa.m3u8
#EXTINF:-1 tvg-id="AR | Valle TV Canal 9" tvg-name="AR | Valle TV Canal 9" tvg-logo="https://img.webme.com/pic/v/valletvcanal9/CANAL%209%20-.jpg" group-title="ARGENTINA", Valle TV Canal 9 || ARGENTINA
http://stmv6.srvstm.com/valletv/valletv/playlist.m3u8
#EXTINF:-1 tvg-id="UY | Canal 4" tvg-name="UY | Canal 4" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Canal4_uy.png/150px-Canal4_uy.png" group-title="URUGUAY", Canal 4 || URUGUAY
http://svtv.xyz:8080/live/sandra30abril/CQNFV/67105.m3u8
#EXTINF:-1 tvg-id="UY | TV Ciudad" tvg-name="UY | TV Ciudad" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/TVCiudad_logo_2020.png/140px-TVCiudad_logo_2020.png" group-title="URUGUAY", TV Ciudad || URUGUAY
https://vxlive.cdn.antel.net.uy/auth_V__TV_Ciudad,vxttoken=cGF0aFVSST0lMkZhdXRoX1ZfX1RWX0NpdWRhZCUyRnZ4Zm10JTNEaGxzJTJGJTJBJmV4cGlyeT0xNjk4ODY4OTgwJnJhbmRvbT1XOXZpeklUZUp0JmMtaXA9MTgxLjE3Ni4xMzYuMTIwJmlkX3JlZmVyZW5jaWE9JmlkX2Rpc3Bvc2l0aXZvPTAmaWRfZnJvbnRlbmQ9MTI4MCZwdWJsaWNfaWQ9MnNnc20sOWNkOGVlNWQ2OTVhMjcyZTVhYzg1YmM0ZmI2MTllYTZmZDUyODc0N2ZmYTkwNDhiY2EwOTIyZjZmZTI5NDEzNQ==/vxfmt=hls/playlist.m3u8
#EXTINF:-1 tvg-id="UY | Canal 10" tvg-name="UY | Canal 10" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/c/cb/2014LogoCanal10.png/revision/latest/scale-to-width-down/200?cb=20220202050124&path-prefix=es" group-title="URUGUAY", Saeta TV Canal 10 || URUGUAY
http://svtv.xyz:8080/live/sandra30abril/CQNFV/67104.m3u8
#EXTINF:-1 tvg-id="UY | Teledoce" tvg-name="UY | Teledoce" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/5/52/LogoTeledoce2019Azul.png" group-title="URUGUAY", Teledoce || URUGUAY
http://svtv.xyz:8080/live/sandra30abril/CQNFV/55083.m3u8
#EXTINF:-1 tvg-id="UY | La Red" tvg-name="UY | La Red" tvg-logo="http://www.redtv.com.uy/wp-content/uploads/2019/10/logoheader2.png" group-title="URUGUAY", La Red || URUGUAY
https://stm1.rootuy.xyz:19360/sdredtv/sdredtv.m3u8
#EXTINF:-1 tvg-id="UY | UCL TV" tvg-name="UY | UCL TV" tvg-logo="https://www.ucltelevision.com/wp-content/uploads/2021/04/cropped-Logo-UCL-TV-LATAM-horizontal-132x65.png" group-title="URUGUAY", Un Canal Latinoamericano TV || URUGUAY
https://livedelta.cdn.antel.net.uy/out/u/url_canalu.m3u8
#EXTINF:-1 tvg-id="UY | TVF Canal 4 Florida" tvg-name="UY | TVF Canal 4 Florida" tvg-logo="https://1.bp.blogspot.com/-n-ToclaJnhU/YTo17oV6nPI/AAAAAAAAQgk/YKWlAtGijwkfrlfVixbJ4sK3uYB9cKXDwCLcBGAsYHQ/w700-h400-p-k-no-nu/canal-tvflorida-en-vivo_optimized.jpg" group-title="URUGUAY", TVF Canal 4 Florida || URUGUAY
https://60ed5b6d0df78.streamlock.net:1936/tvflorida/tvflorida/playlist.m3u8
#EXTINF:-1 tvg-id="UY | Canal 23 Florida" tvg-name="UY | Canal 23 Florida" tvg-logo="https://i0.wp.com/directostv.teleame.com/wp-content/uploads/2022/08/Canal-23-Florida-Uruguay-en-vivo-Online.png?resize=696%2C392&ssl=1" group-title="URUGUAY", Canal 23 Florida || URUGUAY
https://vxlive.cdn.antel.net.uy/auth_V_Canal_23_Florida,vxttoken=cGF0aFVSST0lMkZhdXRoX1ZfQ2FuYWxfMjNfRmxvcmlkYSUyRnZ4Zm10JTNEaGxzJTJGJTJBJmV4cGlyeT0xNjk4ODY5MDExJnJhbmRvbT0zSnFDbmJDM0dWJmMtaXA9MTgxLjE3Ni4xMzYuMTIwJmlkX3JlZmVyZW5jaWE9JmlkX2Rpc3Bvc2l0aXZvPTAmaWRfZnJvbnRlbmQ9MTE5NiZwdWJsaWNfaWQ9MnM2bjYsYzAyMWMxMDZkZjNmMmQ1NGY4ZjhiZjg5N2E4NzU0NDZiMjA1ZTY5Zjg4Y2U1MTI0ZDFkYWYzNTJiYTc5Y2E3NQ==/vxfmt=hls/playlist.m3u8
#EXTINF:-1 tvg-id="UY | Canal Más" tvg-name="UY | Canal Más" tvg-logo="https://play-lh.googleusercontent.com/nBuRrXQscntpKQBxejjl2KrF3FonM9XeULo47wyhx5S6ooVbymt-knaKx5Pl1-J6lUis=w240-h480-rw" group-title="URUGUAY", Canal Más || URUGUAY
https://tvdatta.com:3451/stream/play.m3u8
#EXTINF:-1 tvg-id="UY | Charrua TV" tvg-name="UY | Charrua TV" tvg-logo="https://1.bp.blogspot.com/-5oMEGv6pLAo/YToskYNBjdI/AAAAAAAAQes/FLUAZ0CmW8E3ZqGT0XFAlD8GdMiD5TzewCLcBGAsYHQ/w700-h400-p-k-no-nu/charr%25C3%25BAa-televisi%25C3%25B3n-en-vivo_optimized.png" group-title="URUGUAY", Charrua TV || URUGUAY
https://stmv.video.gmpro.top/tvcharrua/tvcharrua/playlist.m3u8
#EXTINF:-1 tvg-id="PY | Noticias Paraguay" tvg-name="PY | Noticias Paraguay" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/NPY_%28Noticias_Paraguay%29.png/250px-NPY_%28Noticias_Paraguay%29.png" group-title="PARAGUAY", Noticias Paraguay || PARAGUAY
http://laondatv.online:8080/live/leonardo/123456/279912.m3u8
#EXTINF:-1 tvg-id="PY | Telefuturo" tvg-name="PY | Telefuturo" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Telefuturo2017.png/150px-Telefuturo2017.png" group-title="PARAGUAY", Telefuturo || PARAGUAY
http://177.234.230.226:8010/play/a033/index.m3u8
#EXTINF:-1 tvg-id="PY | Paravisión" tvg-name="PY | Paravisión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Paravision_logo.png/150px-Paravision_logo.png" group-title="PARAGUAY", Paravisión || PARAGUAY
http://laondatv.online:8080/live/leonardo/123456/279960.m3u8
#EXTINF:-1 tvg-id="PY | Canal 9 Noticias" tvg-name="PY | Canal 9 Noticias" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Canal_9_Noticias.jpg/125px-Canal_9_Noticias.jpg" group-title="PARAGUAY", C9N || PARAGUAY
https://d1263956mchuq3.cloudfront.net/hls/c9n.m3u8
#EXTINF:-1 tvg-id="PY | Sistema Nacional de Televisión" tvg-name="PY | Sistema Nacional de Televisión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/SNT_LOGO.jpg/220px-SNT_LOGO.jpg" group-title="PARAGUAY", SNT || PARAGUAY
https://d1263956mchuq3.cloudfront.net/hls/snt.m3u8
#EXTINF:-1 tvg-id="PY | Sur Televisión" tvg-name="PY | Sur Televisión" tvg-logo="https://cdn.mitvstatic.com/channels/116c52f1-8f55-4325-af6d-ab11f98e81d5_m.jpg" group-title="PARAGUAY", Sur Televisión || PARAGUAY
http://laondatv.online:8080/live/leonardo/123456/279915.m3u8
#EXTINF:-1 tvg-id="PY | La Tele" tvg-name="PY | La Tele" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/6/67/Latele_Paraguay.jpg" group-title="PARAGUAY", La Tele || PARAGUAY
http://177.234.230.226:8010/play/a034/index.m3u8
#EXTINF:-1 tvg-id="PY | Trece" tvg-name="PY | Trece" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Logotrececanal.png/100px-Logotrececanal.png" group-title="PARAGUAY", Trece || PARAGUAY
https://rds3gen.desdeparaguay.net/trecetv/trecetv_baja/playlist.m3u8?k=ae46fc3611ef55e81451065dd4fec5e1841e5742dac7762a4f0ae8c3484a00d8&exp=1689249903
#EXTINF:-1 tvg-id="PY | Paraguay TV" tvg-name="PY | Paraguay TV" tvg-logo="https://yt3.ggpht.com/ytc/AMLnZu_VMtrTllkAGA0qgsmMYtMoCV6XAjYORRStO5kzYg=s900-c-k-c0x00ffffff-no-rj" group-title="PARAGUAY", Paraguay TV || PARAGUAY
http://laondatv.online:8080/live/leonardo/123456/279963.m3u8
#EXTINF:-1 tvg-id="PY | Unicanal" tvg-name="PY | Unicanal" tvg-logo="https://television.com.py/wp-content/uploads/2015/03/UnicanalLogotvpy.jpg" group-title="PARAGUAY", Unicanal || PARAGUAY
https://rds3gen.desdeparaguay.net/unicanal/unicanal_baja/playlist.m3u8?k=2aec41151bbdceedfb20e0c495d65d028cb39fc310eca0446d20ea432bb845f4&exp=1689249991
#EXTINF:-1 tvg-id="PY | ABC TV" tvg-name="PY | ABC TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Abc_color.PNG/245px-Abc_color.PNG" group-title="PARAGUAY", ABC TV || PARAGUAY
https://abc-color.cdn.vustreams.com/live/d87c2b7b-9ecf-4e6e-b63b-b32772bd7851/live.isml/d87c2b7b-9ecf-4e6e-b63b-b32772bd7851.m3u8
#EXTINF:-1 tvg-id="PY | Cristal TV" tvg-name="PY | Cristal TV" tvg-logo="https://appnew.megainfoapp.com/files/1/CristalTV.jpeg" group-title="PARAGUAY", Cristal TV || PARAGUAY
https://59ce1298bfb98.streamlock.net/cristaltv/cristaltv/chunklist_w1404718741.m3u8
#EXTINF:-1 tvg-id="PY | Mi TV" tvg-name="PY | Mi TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/LOGO_MITV_ALTA_DEFINICION_2020_PNG.png/800px-LOGO_MITV_ALTA_DEFINICION_2020_PNG.png" group-title="PARAGUAY", Mi TV || PARAGUAY
https://rds3.desdeparaguay.net/mitv/mitv/chunklist_w735296660.m3u8?k=1ce349cc39ac8d18e2dafd9501d71521380d56fd6b86ed1516921c76d221b4f8&exp=1642343052
#EXTINF:-1 tvg-id="PA | Televisora Nacional de Panamá" tvg-name="PA | Televisora Nacional de Panamá" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/b/b2/TVN_Panam%C3%A1_%282017%29.png/revision/latest/scale-to-width-down/220?cb=20200108123758&path-prefix=es" group-title="PANAMÁ", Televisora Nacional || PANAMÁ
http://45.228.232.204:16000/play/a028/index.m3u8
#EXTINF:-1 tvg-id="PA | Radio Programas Continentales TV" tvg-name="PA | Radio Programas Continentales TV" tvg-logo="https://www.rpctv.com/css-custom/314/images/logo-314.svg" group-title="PANAMÁ", RPC TV || PANAMÁ
http://45.228.232.204:16000/play/a06t/index.m3u8
#EXTINF:-1 tvg-id="PA | Oye TV" tvg-name="PA | Oye TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/OYE_TV.jpg/150px-OYE_TV.jpg" group-title="PANAMÁ", Oye TV || PANAMÁ
http://45.90.105.74:25461/JW2WBOndemand/d8rQEH2h4E/34918
#EXTINF:-1 tvg-id="PA | TVMax" tvg-name="PA | TVMax" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Logo_tvmax.png/170px-Logo_tvmax.png" group-title="PANAMÁ", TVMax || PANAMÁ
http://45.5.117.182:8000/play/a0ip/index.m3u8
#EXTINF:-1 tvg-id="PA | Telemetro" tvg-name="PA | Telemetro" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Logo-telemetro.svg/150px-Logo-telemetro.svg.png" group-title="PANAMÁ", Telemetro || PANAMÁ
http://45.228.232.204:16000/play/a027/index.m3u8
#EXTINF:-1 tvg-id="PA | Mas 23" tvg-name="PA | Mas 23" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/M%C3%A1s_23.png/132px-M%C3%A1s_23.png" group-title="PANAMÁ", Mas 23 || PANAMÁ
http://45.228.232.204:16000/play/a051/index.m3u8
#EXTINF:-1 tvg-id="PA | Nex" tvg-name="PA | Nex" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Nexnew.png/132px-Nexnew.png" group-title="PANAMÁ", Nex || PANAMÁ
http://181.189.243.254:8000/play/a0qw/index.m3u8
#EXTINF:-1 tvg-id="PA | Asamblea Nacional TV" tvg-name="PA | Asamblea Nacional TV" tvg-logo="https://pbs.twimg.com/media/Flcb7irXkAAkf_p?format=png&name=900x900" group-title="PANAMÁ", Asamblea Nacional TV || PANAMÁ
https://dacastmmd.mmdlive.lldns.net/dacastmmd/28aad57d1f7e4f13be8d0c8390f679b2/chunklist_b2028000.m3u8
#EXTINF:-1 tvg-id="PA | Bocas TV" tvg-name="PA | Bocas TV" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-rZTZ1giQXdPgONIYlCLSTiQveiuwrRInO6oErSOIgXp__tM-sM-TiNQeTsI_2ZijEg&usqp=CAU" group-title="PANAMÁ", Bocas TV || PANAMÁ
https://stream.oursnetworktv.com/latin/btvpanama/playlist.m3u8
#EXTINF:-1 tvg-id="CR | Canal 2 Central de Radios" tvg-name="CR | Canal 2 Central de Radios" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Repretel_2_CDR.png/120px-Repretel_2_CDR.png" group-title="COSTA RICA", Canal 2 CDR || COSTA RICA
https://d25v5vivhcrrh5.cloudfront.net/hls/canal2.m3u8
#EXTINF:-1 tvg-id="CR | Canal 4" tvg-name="CR | Canal 4" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Repretel_4_logo.png/150px-Repretel_4_logo.png" group-title="COSTA RICA", Canal 4 || COSTA RICA
https://d25v5vivhcrrh5.cloudfront.net/hls/canal4.m3u8
#EXTINF:-1 tvg-id="CR | Canal 6" tvg-name="CR | Canal 6" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Canal6CR.png/150px-Canal6CR.png" group-title="COSTA RICA", Canal 6 Telecentro || COSTA RICA
https://d2t46xrpai3it5.cloudfront.net/Canal6CR/201cac55f42a87a46e2d27a75e0c7c84.sdp/playlist.m3u8
#EXTINF:-1 tvg-id="CR | Teletica Canal 7" tvg-name="CR | Teletica Canal 7" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Teletica.png/120px-Teletica.png" group-title="COSTA RICA", Teletica || COSTA RICA
http://170.82.37.21:8000/play/a03u/index.m3u8
#EXTINF:-1 tvg-id="CR | Canal 8 de Costa Rica" tvg-name="CR | Canal 8 de Costa Rica" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Multi8.png/150px-Multi8.png" group-title="COSTA RICA", Canal 8 || COSTA RICA
https://mdstrm.com/live-stream-playlist/5a7b1e63a8da282c34d65445.m3u8?uid=C3a7PpdAuZC3sabLt30lYaR3f8eZ4Cmi&sid=2quC4ekWQnoJZeHFhE8blHNWjoZquyAQ&pid=QzfOlvABGmd0T4Aqvnp6zBdfoSC9a9BR&an=screen&at=web-app&av=v5.2.190&ref=https%3A%2F%2Fwww.telediario.cr%2F&res=363x220&without_cookies=false&dnt=true
#EXTINF:-1 tvg-id="CR | Canal 11" tvg-name="CR | Canal 11" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Repretel_11_logo.png/150px-Repretel_11_logo.png" group-title="COSTA RICA", Canal 11 || COSTA RICA
https://d25v5vivhcrrh5.cloudfront.net/hls/canal11.m3u8
#EXTINF:-1 tvg-id="CR | Trece Costa Rica Televisión" tvg-name="CR | Trece Costa Rica Televisión" tvg-logo="https://www.televisiongratis.tv/components/com_televisiongratis/images/canal-13-trece-costa-rica-televisin-1576.png" group-title="COSTA RICA", Trece Costa Rica Televisión || COSTA RICA
http://181.189.243.254:8000/play/a0oh/index.m3u8
#EXTINF:-1 tvg-id="CR | Telered" tvg-name="CR | Telered" tvg-logo="http://costaricatelevision.com/sites/default/files/2022-09/_Telered%252520Television.png" group-title="COSTA RICA", Telered || COSTA RICA
https://video20.klm99.com:3558/live/teleredlive.m3u8
#EXTINF:-1 tvg-id="CR | Antena Seis TV" tvg-name="CR | Antena Seis TV" tvg-logo="https://pbs.twimg.com/media/FcB8VoxXEAE5jd0?format=png&name=360x360" group-title="COSTA RICA", Antena Seis TV || COSTA RICA
http://tv.azulstream.com:8081/live/NGBjaF4fW5Ms/Nhh3jbs6AsVs/1.m3u8
#EXTINF:-1 tvg-id="CR | TV Sur Canal 14" tvg-name="CR | TV Sur Canal 14" tvg-logo="https://www.tvsur.co.cr/wp-content/uploads/2020/05/tvsur-logo.png" group-title="COSTA RICA", TV Sur Canal 14 || COSTA RICA
https://5bf8041cb3fed.streamlock.net/TVSURCANAL14/TVSURCANAL14/playlist.m3u8
#EXTINF:-1 tvg-id="CR | TV Norte" tvg-name="CR | TV Norte" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzpvMx6KFKlFyHmFowpfMvoDt56jJ6tEbvRRtaGjOQQtpMIYyxXy_L_sIdWKVDzt_sfv4&usqp=CAU" group-title="COSTA RICA", TV Norte || COSTA RICA
https://stream.tvn14.com/TVN/CH14.stream_720p/playlist.m3u8
#EXTINF:-1 tvg-id="CR | Norte Informativo TV" tvg-name="CR | Norte Informativo TV" tvg-logo="https://pbs.twimg.com/media/FlMry5xXoAYtMEN?format=png&name=small" group-title="COSTA RICA", Norte Informativo TV || COSTA RICA
https://videohd.live:19360/8076/8076.m3u8
#EXTINF:-1 tvg-id="CR | Telesur el canal de los ticos" tvg-name="CR | Telesur el canal de los ticos" tvg-logo="https://directostv.teleame.com/wp-content/uploads/2017/10/telesur-costa-rica-100x70.png" group-title="COSTA RICA", Telesur || COSTA RICA
https://59ef525c24caa.streamlock.net/telesur/telesur/playlist.m3u8
#EXTINF:-1 tvg-id="CR | Telesistema" tvg-name="CR | Telesistema" tvg-logo="http://costaricatelevision.com/sites/default/files/styles/player_image/public/2021-04/telesistema-costa-rica.png.webp?itok=tFpto95y" group-title="COSTA RICA", Telesistema || COSTA RICA
http://k4.usastreams.com/ARBtv/ARBtv/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="CR | TV Sur Canal 9" tvg-name="CR | TV Sur Canal 9" tvg-logo="https://directostv.teleame.com/wp-content/uploads/2017/10/TV-Sur-Canal-9-en-vivo-Online-100x70.png" group-title="COSTA RICA", TV Sur Canal 9 || COSTA RICA
http://tv.ticosmedia.com:1935/TVSUR/TVSUR/playlist.m3u8
#EXTINF:-1 tvg-id="CR | Ticavision Canal 27" tvg-name="CR | Ticavision Canal 27" tvg-logo="https://costaricatelevision.com/sites/default/files/2021-03/ticavision-costa-rica_0.png" group-title="COSTA RICA", Ticavisión || COSTA RICA
https://62fc643fbf1aa.streamlock.net/HBTV/HBTV/playlist.m3u8
#EXTINF:-1 tvg-id="CR | Anexión TV 36" tvg-name="CR | Anexión TV 36" tvg-logo="https://directostv.teleame.com/wp-content/uploads/2017/10/anexiontv-100x70.png" group-title="COSTA RICA", Anexión TV 36 || COSTA RICA
https://liveingesta119.cdnmedia.tv/trivision36live/dvrlive-1500/chunklist.m3u8?DVR
#EXTINF:-1 tvg-id="CR | San Vito TV" tvg-name="CR | San Vito TV" tvg-logo="https://yt3.ggpht.com/cLTNc45fyk6VrejPCSbSE6nQgKyR_iVQGfVAZEmxfnJ7i__RkHV06KDGfXvMecGAtV_lYmQsCw=s900-c-k-c0x00ffffff-no-rj" group-title="COSTA RICA", San Vito TV || COSTA RICA
https://stmv.streamingvip.click/sanvitotv/sanvitotv/playlist.m3u8
#EXTINF:-1 tvg-id="CR | Tele Uno TV" tvg-name="CR | Tele Uno TV" tvg-logo="https://yt3.ggpht.com/ytc/AMLnZu_sAmXW2IvcCMjM4eMnz87h9QSR8mKCWcDCMkSSFQ=s900-c-k-c0x00ffffff-no-rj" group-title="COSTA RICA", Tele Uno TV || COSTA RICA
https://5d16127744872.streamlock.net/TVUNO/TVUNO/playlist.m3u8
#EXTINF:-1 tvg-id="CR | TV Santa Cruz" tvg-name="CR | TV Santa Cruz" tvg-logo="https://www.tvsantacruzcr.net/img/logotvsc_2.png" group-title="COSTA RICA", TV Santa Cruz || COSTA RICA
https://rtmp.info/tvsantacruz/envivo/playlist.m3u8
#EXTINF:-1 tvg-id="CR | Nicoya TV" tvg-name="CR | Nicoya TV" tvg-logo="https://www.pngkey.com/png/detail/816-8164472_nicoya-tv.png" group-title="COSTA RICA", Nicoya TV || COSTA RICA
https://59ef525c24caa.streamlock.net/nicoyatv/nicoyatv/chunklist_w2029325583.m3u8
#EXTINF:-1 tvg-id="CR | Voice Over TV" tvg-name="CR | Voice Over TV" tvg-logo="https://www.voiceovercr.com/mayorkilling_weapons/2020/07/Logo-Varo-Version.png" group-title="COSTA RICA", Voice Over TV || COSTA RICA
https://cloudvideo.servers10.com:8081/8198/index.m3u8
#EXTINF:-1 tvg-id="CR | Colosal TV" tvg-name="CR | Colosal TV" tvg-logo="https://pbs.twimg.com/media/FcB6HSyXwAAsFGg?format=png&name=360x360" group-title="MUSICA Y REALITIES", Colosal TV
https://5d16127744872.streamlock.net/COLOSAL/COLOSAL/playlist.m3u8
#EXTINF:-1 tvg-id="NI | Canal 2" tvg-name="NI | Canal 2" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpCAAsfEEW97LI5peV0NGAtlIL5VfhnX-schTiTTLig0Oemf0HpCUT4kF6KA1tAKx2ev8&usqp=CAU" group-title="NICARAGUA", Canal 2 Televicentro || NICARAGUA
https://cootv.cootel.com.ni:8095/Canal02_CooTel/playlist.m3u8
#EXTINF:-1 tvg-id="NI | Canal 4" tvg-name="NI | Canal 4" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Logo_Canal_4_La_Mejor_Televisi%C3%B3n.png/150px-Logo_Canal_4_La_Mejor_Televisi%C3%B3n.png" group-title="NICARAGUA", Canal 4 Multinoticias || NICARAGUA
https://cootv.cootel.com.ni:8095/Canal04_CooTel/playlist.m3u8
#EXTINF:-1 tvg-id="NI | Canal 6" tvg-name="NI | Canal 6" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/6_de_nicaragua-mediano.png" group-title="NICARAGUA", Canal 6 Nicaragüense || NICARAGUA
https://cootv.cootel.com.ni:8095/Canal06_CooTel/playlist.m3u8
#EXTINF:-1 tvg-id="NI | Canal 8 Telenica" tvg-name="NI | Canal 8 Telenica" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Tn8_logotipo_2021.png/165px-Tn8_logotipo_2021.png" group-title="NICARAGUA", TN8 Telenica || NICARAGUA
https://cootv.cootel.com.ni:8095/Canal08_CooTel/playlist.m3u8
#EXTINF:-1 tvg-id="NI | Canal 9" tvg-name="NI | Canal 9" tvg-logo="https://static.wikia.nocookie.net/doblaje/images/b/bc/Canal9nicaragua.png/revision/latest/scale-to-width-down/185?cb=20210203203806&path-prefix=es" group-title="NICARAGUA", Canal 9 || NICARAGUA
https://cootv.cootel.com.ni:8095/Canal09_CooTel/playlist.m3u8
#EXTINF:-1 tvg-id="NI | Canal 10" tvg-name="NI | Canal 10" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Canal_10_Nicaragua.png/190px-Canal_10_Nicaragua.png" group-title="NICARAGUA", Canal 10 || NICARAGUA
https://cootv.cootel.com.ni:8095/Canal10_CooTel/playlist.m3u8
#EXTINF:-1 tvg-id="NI | Canal 11 TV Red" tvg-name="NI | Canal 11 TV Red" tvg-logo="https://directostv.teleame.com/wp-content/uploads/2020/04/Canal-11-Nicaragua-en-vivo-Online-100x70.png" group-title="NICARAGUA", Canal 11 TV Red || NICARAGUA
https://cootv.cootel.com.ni:8095/Canal11_CooTel/playlist.m3u8
#EXTINF:-1 tvg-id="NI | Nicavisión" tvg-name="NI | Nicavisión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Canal_12_Nicaragua_logo.webp/200px-Canal_12_Nicaragua_logo.webp.png" group-title="NICARAGUA", Canal 12 Nicavisión || NICARAGUA
http://45.228.232.219:16000/play/a0lk/index.m3u8
#EXTINF:-1 tvg-id="NI | Viva Nicaragua Canal 13" tvg-name="NI | Viva Nicaragua Canal 13" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Logo_Viva_Nicaragua_Canal_13.png/200px-Logo_Viva_Nicaragua_Canal_13.png" group-title="NICARAGUA", Viva Nicaragua Canal 13 || NICARAGUA
https://cootv.cootel.com.ni:8095/Canal13_CooTel/playlist.m3u8
#EXTINF:-1 tvg-id="NI | Vos TV Canal 14" tvg-name="NI | Vos TV Canal 14" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/14_de_nicaragua-mediano.png" group-title="NICARAGUA", Vos TV || NICARAGUA
https://cootv.cootel.com.ni:8095/Channel14/playlist.m3u8
#EXTINF:-1 tvg-id="NI | Canal 15" tvg-name="NI | Canal 15" tvg-logo="https://pbs.twimg.com/media/FgYBiv_XEAEwavW?format=png&name=small" group-title="NICARAGUA", Canal 15 || NICARAGUA
https://cootv.cootel.com.ni:8095/Canal15_CooTel/playlist.m3u8
#EXTINF:-1 tvg-id="NI | La Rock 22" tvg-name="NI | La Rock 22" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/LaRock22.jpg/245px-LaRock22.jpg" group-title="NICARAGUA", La Rock 22 || NICARAGUA
https://cootv.cootel.com.ni:8095/Canal22_CooTel/playlist.m3u8
#EXTINF:-1 tvg-id="NI | Canal de Noticias de Nicaragua" tvg-name="NI | Canal de Noticias de Nicaragua" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/CDNN_23_Nicaragua.png/340px-CDNN_23_Nicaragua.png" group-title="NICARAGUA", CDNN 23 || NICARAGUA
https://cootv.cootel.com.ni:8095/Canal23_CooTel/playlist.m3u8
#EXTINF:-1 tvg-id="NI | TV One" tvg-name="NI | TV One" tvg-logo="https://tvonenicaragua.com/wp-content/uploads/2020/02/logo-central-correcto2.png" group-title="NICARAGUA", TV One || NICARAGUA
https://cootv.cootel.com.ni:8095/channeltvone/playlist.m3u8
#EXTINF:-1 tvg-id="NI | CVisión TV" tvg-name="NI | CVisión TV" tvg-logo="https://cvisiontv.com/wp-content/uploads/2022/06/cropped-logo-c-vision.png" group-title="NICARAGUA", CVisión TV || NICARAGUA
https://stream.cvisiontv.com/cvision_stream.m3u8
#EXTINF:-1 tvg-id="NI | WTV Canal 20 de Nueva Guinea" tvg-name="NI | WTV Canal 20 de Nueva Guinea" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLQJYlaCX1UArt5jM5r0sYe2E46sgxqbpuudC75Qaw=s900-c-k-c0x00ffffff-no-rj" group-title="NICARAGUA", WTV Canal 20 de Nueva Guinea || NICARAGUA
https://cootv.cootel.com.ni:8095/Canal40_WTV/playlist.m3u8
#EXTINF:-1 tvg-id="NI | Yes TV" tvg-name="NI | Yes TV" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLROnrZCI5VnoF_aU_h4znfefMJCbBFaq93S_hMR=s900-c-k-c0x00ffffff-no-rj" group-title="NICARAGUA", Yes TV || NICARAGUA
https://cootv.cootel.com.ni:8095/Canal24_YesTV/playlist.m3u8
#EXTINF:-1 tvg-id="NI | TV Zion" tvg-name="NI | TV Zion" tvg-logo="https://image.roku.com/developer_channels/prod/5ef500ca8e6fa56d4d6be0453ab9bf870417b5378684a4943abe421d0743c0cc.png" group-title="NICARAGUA", TV Zion || NICARAGUA
https://cootv.cootel.com.ni:8095/Canal44_Tvzion/playlist.m3u8
#EXTINF:-1 tvg-id="NI | Nicarao TV" tvg-name="NI | Nicarao TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Nicarao_TV_Logo.jpg/150px-Nicarao_TV_Logo.jpg" group-title="NICARAGUA", Nicarao TV || NICARAGUA
http://45.170.225.212:58001/play/a04h/index.m3u8
#EXTINF:-1 tvg-id="SV | TV-2" tvg-name="SV | TV-2" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/TCS_2_2016.png/150px-TCS_2_2016.png" group-title="EL SALVADOR", TV-2 || EL SALVADOR
https://telecorporacion.cdn.vustreams.com/live/af9473b9-191c-456a-b714-57eace94e2fe/live.isml/live-video=2000000-audio_0=64000.m3u8
#EXTINF:-1 tvg-id="SV | Canal 4" tvg-name="SV | Canal 4" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Canal_4_TCS.png/245px-Canal_4_TCS.png" group-title="EL SALVADOR", Canal 4 || EL SALVADOR
http://45.5.118.213:16000/play/a0mm/index.m3u8
#EXTINF:-1 tvg-id="SV | TV Seis" tvg-name="SV | TV Seis" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Canal_6_TCS.png/200px-Canal_6_TCS.png" group-title="EL SALVADOR", TV Seis || EL SALVADOR
https://telecorporacion.cdn.vustreams.com/live/a242095a-c49d-4263-b9ae-5958f5e0c9a1/live.isml/live-video=2000000-audio_0=64000.m3u8
#EXTINF:-1 tvg-id="SV | Agape TV Canal 8" tvg-name="SV | Agape TV Canal 8" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Agape_8_2001.png/200px-Agape_8_2001.png" group-title="EL SALVADOR", Agape TV Canal 8 || EL SALVADOR
https://video-weaver.mia05.hls.ttvnw.net/v1/playlist/CsIFq5xQB_7UrOOfp92sv2aA5m2wMMtXor77a1EhnNP8qPqmp0F_ul3bsx72trdpoNPdJSkwe4FNuCVewsCM_hXDrFrpPDWkqDGu9GuoYQI4x_yAPgix9IyJ_jtDeKIwDsffWZR36O9-ZQWuWanInz4pPYmH9NzTgvrmL-Sei6KGyhdJlnnBeQA8a4f-oO70nEjsNn1xv5xNLSukrvyFb4mQTk-G-u1Lbkq1MTb3y7w7JUqNl4pC04twe2OJ0hdNP8xkEmWis_XAy5VLcsL-f86UGwIYQBvs0UMo4w3HqF_raAl9prBJafEPhiy6ALmMsyHq6EYN34VoMMAZab23_LMQux0U1z82tl1m43mIaDNHrHGwt88wJZkDU6rojWa0pbX9ee78jIRDKbMW8qyyMELZ40yH5P7my7XlBjnUXj4CwGV2XT78e4wLQkd_SrSHwzOJ_oIl7or81sQW3oPZNwijQ2_d8QCIAIx8GMhsMbFnsCqH6oPbR2IVfglJEeZk51Fg8lkA9cSmJMXV0ILIZLZWgDy1bYZjcLx6tms4pfAPuozxOsCf0yVRSspdtomi7HNKLvbwgyEmFw53dYqH2-GFZ6VogCzAaPedqyST4fViEE5aqVUdhxIBlKteR3lVdJfLV0o9c1WOKz_do5ooa98RCmCGbjQ8lGs1dL8A1eetnwOqMEns6QV4lD52f2isMcAtYorf4E5-nSs18SfuysVLLj92aFrHcQ5d_zgJ6kCY1V4tT-f-sxhKwpFl75MofPSAo6EWBhz68Rn1keLnvFUkLrWTRo4882NVCELccCaOE5hS6FYkvvwxvqLOZHb2seLVODhkkOhBKI4cLe-RVgau-8XSTtY_CYUSEpRAtTcl_TQptUQfgzXqFUfq7X_wHL9FRBehLU4Z1j5uFdJoJ3juRm_Ij64UInPj7zLnpu_LNdbcmBoMNRbgkQvRyLFcZVX3IAEqCXVzLWVhc3QtMjDxBw.m3u8
#EXTINF:-1 tvg-id="SV | Asamblea Legislativa TV" tvg-name="SV | Asamblea Legislativa TV" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/2/2c/9TV_El_Salvador_%282018%29.png/revision/latest/scale-to-width-down/300?cb=20191116000236" group-title="EL SALVADOR", TV Legislativa || EL SALVADOR
https://streaming.asamblea.gob.sv/hls/plenariahd.m3u8
#EXTINF:-1 tvg-id="SV | Canal 10" tvg-name="SV | Canal 10" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Canal_10_%28El_Salvador%29_2019.svg/200px-Canal_10_%28El_Salvador%29_2019.svg.png" group-title="EL SALVADOR", Canal 10 || EL SALVADOR
http://181.189.243.198:8000/play/a06e/index.m3u8
#EXTINF:-1 tvg-id="SV | Canal 11 TUTV" tvg-name="SV | Canal 11 TUTV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/TUTV_11_2014.png/150px-TUTV_11_2014.png" group-title="EL SALVADOR", Canal 11 TUTV || EL SALVADOR
https://streaming.grupocsanetwork.com:19360/canal11/canal11.m3u8
#EXTINF:-1 tvg-id="SV | Canal 12" tvg-name="SV | Canal 12" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Canal_12_El_Salvador_2018.png/150px-Canal_12_El_Salvador_2018.png" group-title="EL SALVADOR", Canal 12 || EL SALVADOR
http://45.5.118.213:16000/play/a0kc/index.m3u8
#EXTINF:-1 tvg-id="SV | Taber TV" tvg-name="SV | Taber TV" tvg-logo="https://directostv.teleame.com/wp-content/uploads/2016/06/Taber-TV-Canal-17-El-Salvador-en-vivo-Online-100x70.png" group-title="EL SALVADOR", Taber TV || EL SALVADOR
https://5ca9af4645e15.streamlock.net/tabertv/smil:tabertv.smil/chunklist_w169172025_b3428000_DVR_sleng.m3u8
#EXTINF:-1 tvg-id="SV | Meganoticias" tvg-name="SV | Meganoticias" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/a/a4/Canal-19-El-Salvador-en-vivo-Online.png" group-title="EL SALVADOR", Canal 19 MegaNoticias || EL SALVADOR
https://mgv-channel19.akamaized.net/hls/live/2093190/MGV_CHANNEL19/0/streamPlaylist.m3u8
#EXTINF:-1 tvg-id="SV | Canal 21" tvg-name="SV | Canal 21" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Canal-21.png/245px-Canal-21.png" group-title="EL SALVADOR", Canal 21 Megavisión || EL SALVADOR
https://mgv-channel21.akamaized.net/hls/live/2093191/MGV_CHANNEL21/0/streamPlaylist.m3u8
#EXTINF:-1 tvg-id="SV | TVM" tvg-name="SV | TVM" tvg-logo="https://tvm.com.sv/wp-content/uploads/2021/07/TVM_Design-01.png" group-title="EL SALVADOR", Televisión Migueleña || EL SALVADOR
http://185.246.86.135:25461/live/app10/app100/2.m3u8
#EXTINF:-1 tvg-id="SV | TVO Canal 23" tvg-name="SV | TVO Canal 23" tvg-logo="https://tvocanal23.com/wp-content/uploads/2020/10/logo.png" group-title="EL SALVADOR", TVO Canal 23 || EL SALVADOR
http://45.5.119.202:54321/play/a05j/index.m3u8
#EXTINF:-1 tvg-id="SV | WOW TV Canal 24" tvg-name="SV | WOW TV Canal 24" tvg-logo="https://wowelsalvador.com/imagen/logo2.png" group-title="EL SALVADOR", WOW TV || EL SALVADOR
https://cdn.elsalvadordigital.com:1936/wowtv/smil:wowtv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="SV | Órbita TV Canal 25" tvg-name="SV | Órbita TV Canal 25" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/8c20da0d7134ea2390120155e3d88ba5.webp" group-title="EL SALVADOR", Órbita TV || EL SALVADOR
https://ssh101.bozztv.com/ssh101/OrbitaTV25/playlist.m3u8
#EXTINF:-1 tvg-id="SV | TCS+" tvg-name="SV | TCS+" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/TCS_35_2017.png/245px-TCS_35_2017.png" group-title="EL SALVADOR", TCS+ || EL SALVADOR
https://telecorporacion.cdn.vustreams.com/live/d17513a3-9de2-47e3-b15a-899fd5f5877e/live.isml/live-video=2000000-audio_0=64000.m3u8
#EXTINF:-1 tvg-id="SV | TVX" tvg-name="SV | TVX" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/TVX_El_Salvador.png/250px-TVX_El_Salvador.png" group-title="EL SALVADOR", TVX || EL SALVADOR
https://video-weaver.mia05.hls.ttvnw.net/v1/playlist/Cr8FMe4Rgimfg9CSP3vsVHo3Kc_9qqTBwJOjsGD0Uw9HxN0nY_aa8xIasScLhDOFa55DpP29OXAwS2MBQCsp_Nt2C8lXlYyBcMBFM4ohG6SIZos4N27lYFGKESfmvewFxZaL3Ja8N8vMDaF6QtsoGtU40j3K-wmN26-Nz8M_8u9akrP-s9UEep1wCeJTadFunOKDY-3kab8QJZpyOSEFPjt_qJbpzVrGJdgQvTjRtu_yzgPkBkqcQn8fhK2UOCPyjOQ_nnxJkSgnYqVwIZpCGoHqoKgFfk1PnNqlUHaRC28lKACuZc_izuAXUmlsADRECoyXY0rPlqeTNrTqU5DRrqSZUzna1IUun2Ve3RKD1D0mXoqYoIocvbfgmSNvm7EPkH1JCSMDeKRuMgylyas-FgLKlN3TXJscdffYe_6nLiyqR1YzyhcrRvYwfjCMRjC_agBvfXmQVnzeVSn_BXzFFEdIDH0No0tT18CoQvsA8EiUpnVEvwxxrpw3-rUPfoAf6JlN0rleh6aO95xzRT-T2JecGzg-k8m9D7MSCj7_e17_k5InLv_qv_ikMNYXFZ5FW3DCfJhXVH3Xz5OrHcjUQVglsTGhrCOKMks1v3wX-zkAKzHl7YCaFUkkjEzWAD-LD4JuZmcFQ9NmeuPAYCP_qoXzOoQ8rpXHQJK-yx35Xud3y-uqEEvJU4p7WlKnM53g2Iqr5MtwcBRo1Zhh0tRg7J3BPRxcjlrnK-1RqW6JmfQMjdlL0xTcKVMFJ8ZKGWTtsZw1-o72qnghntCnz8WK4I27a_tH6A2cT3Lg-QIBneUPpBBNK3f73MBG8XuppHJ0ipsdCysPkCE3jsUgTyYGiscJQZksGHgLdY2u2mq5MqgJST7BpDvQRSiqsNJfjTIybMo2YhSdgEp5qrpIykZLVZ_9q4jH2NUGECuBYzDvHbNAiRoMKinrW_jNNmQi52KyIAEqCXVzLWVhc3QtMjDxBw.m3u8
#EXTINF:-1 tvg-id="SV | Canal 57 Apopa TV" tvg-name="SV | Canal 57 Apopa TV" tvg-logo="https://photos.live-tv-channels.org/tv-logo/sv-canal-57-6594-300x225.jpg" group-title="EL SALVADOR", Canal 57 Apopa TV || EL SALVADOR
https://streaming.grupocsanetwork.net:3424/canal57/canal57/playlist.m3u8
#EXTINF:-1 tvg-id="SV | RD Click TV" tvg-name="SV | RD Click TV" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLSoMCXVxLXziWM9-DaCj8zwCpV9-nCyTcTTRa5Jow=s88-c-k-c0x00ffffff-no-rj" group-title="EL SALVADOR", RD Click TV || EL SALVADOR
https://cloudvideo.servers10.com:8081/8064/index.m3u8
#EXTINF:-1 tvg-id="HN | Telesistema Informativo" tvg-name="HN | Telesistema Informativo" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvqdLQlc8QobZms93gGFRZRpG0bdvso1Vkw73Z25dNd70l0qQW5ir2t6YIDBAe03x_gu8&usqp=CAU" group-title="HONDURAS", TSi Canal 3 || HONDURAS
http://45.228.234.193:16000/play/a0ee/index.m3u8
#EXTINF:-1 tvg-id="HN | Canal 5" tvg-name="HN | Canal 5" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Canal_5_HN_logo_2019.png/150px-Canal_5_HN_logo_2019.png" group-title="HONDURAS", Canal 5 El Lider || HONDURAS
http://45.228.232.219:16000/play/a0mo/index.m3u8
#EXTINF:-1 tvg-id="HN | Canal 6" tvg-name="HN | Canal 6" tvg-logo="https://file.canal6.com.hn//2022/03/logo_header.webp" group-title="HONDURAS", Canal 6 || HONDURAS
http://170.82.37.21:8000/play/a007/index.m3u8
#EXTINF:-1 tvg-id="HN | Telecadena 7 y 4" tvg-name="HN | Telecadena 7 y 4" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Telecadena7y42018.png/150px-Telecadena7y42018.png" group-title="HONDURAS", Telecadena 7 y 4 || HONDURAS
http://45.228.234.193:16000/play/a0do/index.m3u8
#EXTINF:-1 tvg-id="HN | Canal 8" tvg-name="HN | Canal 8" tvg-logo="https://tnh.gob.hn/wp-content/uploads/2022/11/cropped-285512422_431662858967024_748898711325018620_n-e1667698342409.jpg" group-title="HONDURAS", Canal 8 || HONDURAS
http://170.82.37.21:8000/play/a00j/index.m3u8
#EXTINF:-1 tvg-id="HN | Mega Clásicos" tvg-name="HN | Mega Clásicos" tvg-logo="https://otv-us-web.s3-us-west-2.amazonaws.com/logos/guide/2/Open/92x36_352/Misc/megaclasicostv.png" group-title="HONDURAS", Mega Clásicos || HONDURAS
http://170.82.37.21:8000/play/a005/index.m3u8
#EXTINF:-1 tvg-id="HN | Vica TV" tvg-name="HN | Vica TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/VTV_HN_logo_2019.png/210px-VTV_HN_logo_2019.png" group-title="HONDURAS", VTV || HONDURAS
https://d1af06j591gh9u.cloudfront.net/VTVHN/e395935fa39597e3997b916a295f23e4.sdp/playlist.m3u8
#EXTINF:-1 tvg-id="HN | TEN Canal 10" tvg-name="HN | TEN Canal 10" tvg-logo="https://1.bp.blogspot.com/-WYepFcQLrXc/XQka9TmZ0uI/AAAAAAAAHz8/eTOqew4vGoocd66uqlPHccAeYN74huzmgCLcBGAs/w350-h350-p-k-no-nu/TEN%2BCanal%2B10.png" group-title="HONDURAS", TEN Canal 10 || HONDURAS
https://62418d5684c12.streamlock.net/TENHD/TENLive.smil/playlist.m3u8
#EXTINF:-1 tvg-id="HN | Canal 11" tvg-name="HN | Canal 11" tvg-logo="https://pbs.twimg.com/profile_images/1615373732830142467/m_-jM18o_400x400.jpg" group-title="HONDURAS", Canal 11 || HONDURAS
http://45.228.232.219:16000/play/a0lg/index.m3u8
#EXTINF:-1 tvg-id="HN | TV Azteca Honduras" tvg-name="HN | TV Azteca Honduras" tvg-logo="https://yt3.googleusercontent.com/cyq9irLdDgryTt4fKAH3_df_Fs9sqsBReXVpK3kxpBS_I5Rv0zvSNoii0tJ3B06t7cueB1kzzw=s176-c-k-c0x00ffffff-no-rj" group-title="HONDURAS", TV Azteca Honduras || HONDURAS
http://170.82.37.21:8000/play/a00e/index.m3u8
#EXTINF:-1 tvg-id="HN | Girasol TV" tvg-name="HN | Girasol TV" tvg-logo="https://girasoltv.girasolradiotvhn.com/wp-content/uploads/2020/10/cropped-logo-girasoltv-400x200px963.png" group-title="HONDURAS", Girasol TV || HONDURAS
https://video.misistemareseller.com/Girasoltv/Girasoltv/playlist.m3u8
#EXTINF:-1 tvg-id="HN | Teledanlí" tvg-name="HN | Teledanlí" tvg-logo="https://yt3.ggpht.com/ytc/AMLnZu_1g2d_zrJFqen8rp4OK-7NBbcQqUt_Z-7N1yng=s900-c-k-c0x00ffffff-no-rj" group-title="HONDURAS", Teledanlí || HONDURAS
https://cloud2.streaminglivehd.com:1936/8224/8224/playlist.m3u8
#EXTINF:-1 tvg-id="HN | UTV" tvg-name="HN | UTV" tvg-logo="https://directostv.teleame.com/wp-content/uploads/2018/03/utv.png" group-title="HONDURAS", UTV || HONDURAS
https://live-utv.unah.edu.hn/web/salida.m3u8
#EXTINF:-1 tvg-id="HN | LTV" tvg-name="HN | LTV" tvg-logo="https://d3ld16hid784z2.cloudfront.net/media/2021/01/logo-ltv-top.png" group-title="HONDURAS", LTV || HONDURAS
https://5e85d90130e77.streamlock.net/6022/6022/chunklist_w911572265.m3u8
#EXTINF:-1 tvg-id="HN | DTP Canal 15" tvg-name="HN | DTP Canal 15" tvg-logo="https://play-lh.googleusercontent.com/qBFWeXRZ1Q_4dZ1NaejEULj9V-mHF9HAHdKZ-UZA3LUc9uTS9lyMo9E7yPpmc5REqc4" group-title="HONDURAS", DTP || HONDURAS
https://emisoras.hn:8081/dtp/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="HN | Hable Como Habla TV" tvg-name="HN | Hable Como Habla TV" tvg-logo="https://hch.tv/wp-content/uploads/2021/09/logos-hch-bueno-1.png" group-title="HONDURAS", HCH || HONDURAS
http://45.228.234.193:16000/play/a0b6/index.m3u8
#EXTINF:-1 tvg-id="HN | Cholusat Sur Canal 36" tvg-name="HN | Cholusat Sur Canal 36" tvg-logo="https://directostv.teleame.com/wp-content/uploads/2017/10/Cholusat-Sur-Canal-36-en-vivo-Online-100x70.png" group-title="HONDURAS", Cholusat Sur || HONDURAS
http://audiotvserver.net:1935/livemedia/cholusat/chunklist_w374441771.m3u8
#EXTINF:-1 tvg-id="HN | Mas Noticias Televisión" tvg-name="HN | Mas Noticias Televisión" tvg-logo="https://cdn.mntv.hn/2022/02/mntv-logo.webp" group-title="HONDURAS", Mas Noticias Televisión || HONDURAS
http://amixtv.com:8080/mntvh/index.m3u8
#EXTINF:-1 tvg-id="HN | Roatan Hable Claro TV" tvg-name="HN | Roatan Hable Claro TV" tvg-logo="https://roatanhableclaro.com/wp-content/uploads/2021/07/logo-599x98v1.png" group-title="HONDURAS", Roatan Hable Claro TV || HONDURAS
https://srv4.zcast.com.br/roatanhableclaro/roatanhableclaro/playlist.m3u8
#EXTINF:-1 tvg-id="HN | Aza TV" tvg-name="HN | Aza TV" tvg-logo="https://1.bp.blogspot.com/-_OP090SKY-w/XRz39swn9QI/AAAAAAAAH7Q/77kq1tCsZ-UciGyDZlDzwH5PuVvGh_45gCLcBGAs/s1600/Canal%2BAZA%2BTV.png" group-title="HONDURAS", Aza TV || HONDURAS
https://stmv1.zcasthn.com.br/azatvhd/azatvhd/playlist.m3u8
#EXTINF:-1 tvg-id="HN | Q'Hubo TV" tvg-name="HN | Q'Hubo TV" tvg-logo="https://qhubotv.com/content/images/2022/08/Logo-Q-HUBO-1.png" group-title="HONDURAS", Q'Hubo TV || HONDURAS
https://5e85d90130e77.streamlock.net/6024/6024/playlist.m3u8
#EXTINF:-1 tvg-id="HN | Metro TV" tvg-name="HN | Metro TV" tvg-logo="https://1.bp.blogspot.com/-6gQWDOzqUHU/XQo-_-umYGI/AAAAAAAAH00/gM_d6FInXxAQhKeRggaiKR_i-putnpGXACLcBGAs/s1600/Canal%2BLa%2BMetro%2BTV%2Bhonduras.png" group-title="HONDURAS", Metro TV || HONDURAS
https://emisoras.hn:8081/metrotv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="HN | Choluteca TV" tvg-name="HN | Choluteca TV" tvg-logo="https://1.bp.blogspot.com/-7l5aseK7l1I/YTsuVOKgWGI/AAAAAAAAQkk/OfOcu9UyK04GiBMS4R3W5zwHxYbDkWC9wCLcBGAsYHQ/s268/Choluteva%2BTV%2Ben%2Bvivo%2B%25281%2529.png" group-title="HONDURAS", Choluteca TV || HONDURAS
https://emisoras.hn:8081/cholutecatv/index.m3u8
#EXTINF:-1 tvg-id="HN | Campus TV" tvg-name="HN | Campus TV" tvg-logo="http://live.campushd.tv/wp-content/uploads/2019/05/logo-2.png" group-title="HONDURAS", Campus Televisión || HONDURAS
https://5e85d90130e77.streamlock.net/6052/6052/playlist.m3u8
#EXTINF:-1 tvg-id="HN | Alsacias TV" tvg-name="HN | Alsacias TV" tvg-logo="https://play-lh.googleusercontent.com/yACFGtBzI_R0s-XY2r3wVTZW4VE4uMxNW2IkXAramPrckFmihjalpwvaFfhzu0SwRg0" group-title="HONDURAS", Alsacias Televisión || HONDURAS
https://emisoras.hn:8081/atv/index.m3u8
#EXTINF:-1 tvg-id="HN | Canal 34 Comayagua" tvg-name="HN | Canal 34 Comayagua" tvg-logo="https://i.ytimg.com/vi/kafNUQFkf4c/maxresdefault.jpg" group-title="HONDURAS", Canal 34 Comayagua || HONDURAS
http://amixtv.com:8080/canal34/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="HN | Telemas" tvg-name="HN | Telemas" tvg-logo="https://www.telemas.tv/wp-content/uploads/2022/02/cropped-logo-principal-fondo-gris.png" group-title="HONDURAS", Telemas || HONDURAS
http://amixtv.com:8080/telemas/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="HN | Picosa TV" tvg-name="HN | Picosa TV" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6RC5b4wt2Nd5aH90L2CojsCR8MVI1gcibzfb3uHYE_vFqO-0qywjZxZmhNSuWjNCNdyc&usqp=CAU" group-title="HONDURAS", Picosa TV || HONDURAS
http://190.83.116.230:9010/play/a08x/index.m3u8
#EXTINF:-1 tvg-id="HN | EDN" tvg-name="HN | EDN" tvg-logo="https://play-lh.googleusercontent.com/58j_6IIJnaGGvTii9eX8pLgQcXQY45QuvILn7hWICaOlZYnfEaVMyaDH6MitzZx6HBY" group-title="HONDURAS", EDN || HONDURAS
https://60417ddeaf0d9.streamlock.net/edntv/videoedntv/playlist.m3u8
#EXTINF:-1 tvg-id="HN | RSV" tvg-name="HN | RSV" tvg-logo="https://www.rsvhonduras.com/images/RSV---copia.jpg" group-title="HONDURAS", RSV || HONDURAS
https://stmv1.srvif.com/rsvhonduras/rsvhonduras/playlist.m3u8
#EXTINF:-1 tvg-id="HN | Sula TV" tvg-name="HN | Sula TV" tvg-logo="https://pbs.twimg.com/media/FjpjC6aWYAAxZTs?format=png&name=small" group-title="HONDURAS", Sula TV || HONDURAS
https://sulatv1.ddns.net/hls/live/index.m3u8
#EXTINF:-1 tvg-id="HN | Vallevisión" tvg-name="HN | Vallevisión" tvg-logo="https://i.ytimg.com/vi/IBcNGeLfkQs/maxresdefault.jpg" group-title="HONDURAS", Vallevisión || HONDURAS
https://stmv1.zcasthn.com.br/vallevision/vallevision/playlist.m3u8
#EXTINF:-1 tvg-id="HN | Lenca TV" tvg-name="HN | Lenca TV" tvg-logo="https://play-lh.googleusercontent.com/Pj0cw_MtiXOVbmPnOYWuxjRg_RdJIDU682YhYxqwUeFtVYX7QSn-lQgxDKBuJYQ9ajm7" group-title="HONDURAS", Lenca TV || HONDURAS
http://lencatelevision.com:8080/hls/ltv1.m3u8
#EXTINF:-1 tvg-id="HN | Olanchito TV Canal 23" tvg-name="HN | Olanchito TV Canal 23" tvg-logo="https://play-lh.googleusercontent.com/T8PKa3_bSjQDxV8DrXwrt3ToHADCA-8qcesWKDvirErkOscHTeAk0RZqyuxkFdtZjgw" group-title="HONDURAS", Olanchito TV Canal 23 || HONDURAS
http://168.181.121.194:1836/hlscha3/llive.m3u8?key=3D8aUsX2w
#EXTINF:-1 tvg-id="HN | TV Centro" tvg-name="HN | TV Centro" tvg-logo="https://yt3.ggpht.com/xEQiwzePGT88-dHDTkP1t0zbnp0z0DrYcBKy3T3qOzbRKLRupUlV3croueV4fZnebZJthe3Ogg=s900-c-k-c0x00ffffff-no-rj" group-title="HONDURAS", TV Centro || HONDURAS
https://cloud2.streaminglivehd.com:1936/8032/8032/playlist.m3u8
#EXTINF:-1 tvg-id="HN | TV Centro Más" tvg-name="HN | TV Centro Más" tvg-logo="https://pbs.twimg.com/media/FcsmNR4WYAEZLHK?format=png&name=120x120" group-title="HONDURAS", TV Centro Más || HONDURAS
https://cloud2.streaminglivehd.com:1936/8004/8004/playlist.m3u8
#EXTINF:-1 tvg-id="HN | TV Copan" tvg-name="HN | TV Copan" tvg-logo="https://www.tvcopan.com/wp-content/uploads/2021/11/sello-tv-copan-768x321.png" group-title="HONDURAS", TV Copan || HONDURAS
https://emisoras.hn:8081/tvcopan/index.m3u8
#EXTINF:-1 tvg-id="HN | VS Channel" tvg-name="HN | VS Channel" tvg-logo="https://play-lh.googleusercontent.com/EreEURApvbzEKq6vbjtv0ZlaSpNknn1rGa6PP2FtCs6QLioZA2gsCCyUfvBLL5tkeA=w240-h480-rw" group-title="HONDURAS", VS Channel || HONDURAS
http://190.124.160.164:8081/vschannel/123/chunks.m3u8?nimblesessionid=3132693
#EXTINF:-1 tvg-id="HN | Teleprogreso" tvg-name="HN | Teleprogreso" tvg-logo="https://www.teleprogreso.tv/wp-content/uploads/2019/09/logo-tp-header.jpg" group-title="HONDURAS", Teleprogreso || HONDURAS
https://stmv1.zcasthn.com.br/teleprogreso/teleprogreso/playlist.m3u8
#EXTINF:-1 tvg-id="HN | CHTV" tvg-name="HN | CHTV" tvg-logo="https://play-lh.googleusercontent.com/Vq7oDQqzdPdkAX2SX7kYVNpIJ5ssEpitw82BYeu1wgwTJzA9WWq_tcULb2vZS7aei-Et" group-title="HONDURAS", CHTV || HONDURAS
https://media.streambrothers.com:1936/8054/8054/playlist.m3u8
#EXTINF:-1 tvg-id="HN | Paradise TV" tvg-name="HN | Paradise TV" tvg-logo="https://pbs.twimg.com/media/FpLXfzgakAk-uUh?format=png&name=small" group-title="HONDURAS", Paradise TV || HONDURAS
https://s2.tvdatta.com:3840/live/paradisetvlive.m3u8
#EXTINF:-1 tvg-id="HN | Guayape TV" tvg-name="HN | Guayape TV" tvg-logo="https://yt3.ggpht.com/ytc/AMLnZu-j0bhkrSmX05mfXeFbxraPoEBG91pLATbw0r8N8g=s88-c-k-c0x00ffffff-no-rj" group-title="HONDURAS", Guayape TV || HONDURAS
https://srv1.zcast.com.br/guayapetv/guayapetv/playlist.m3u8
#EXTINF:-1 tvg-id="HN | Teleceiba" tvg-name="HN | Teleceiba" tvg-logo="http://teleceiba.com/wp-content/uploads/2016/02/logo-teleceiba2016-hme.png" group-title="HONDURAS", Teleceiba || HONDURAS
http://170.82.37.21:8000/play/a00i/index.m3u8
#EXTINF:-1 tvg-id="HN | Une TV" tvg-name="HN | Une TV" tvg-logo="https://yt3.googleusercontent.com/ytc/AL5GRJVTLb4P-M3bk02XzZw6njPNKtrF5GEeE5CWGfu1=s900-c-k-c0x00ffffff-no-rj" group-title="HONDURAS", Une TV || HONDURAS
http://170.82.37.21:8000/play/a00d/index.m3u8
#EXTINF:-1 tvg-id="HN | W TV" tvg-name="HN | W TV" tvg-logo="https://pbs.twimg.com/media/FrdICLxWIAEB25O?format=png&name=small" group-title="HONDURAS", W TV || HONDURAS
https://emisoras.hn:8081/wtv/index.m3u8
#EXTINF:-1 tvg-id="HN | STVE Telebásica" tvg-name="HN | STVE Telebásica" tvg-logo="https://yt3.googleusercontent.com/eAhokGdUn-UxY9ZTQsNnJVqFqRU50AxZ5JtrbZX_B20keJnfHIVdKydYfXjVF0wm3ffuI9re4g=s176-c-k-c0x00ffffff-no-rj" group-title="HONDURAS", STVE Telebásica || HONDURAS
http://45.228.232.219:16000/play/a0kd/index.m3u8
#EXTINF:-1 tvg-id="GT | Canal 3" tvg-name="GT | Canal 3" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Canal3GT2022.png/800px-Canal3GT2022.png" group-title="GUATEMALA", Canal 3 el super canal || GUATEMALA
http://daleplay.club:8080/listatbsdaleplay22/listatbsdaleplaypararepetircanales/115803
#EXTINF:-1 tvg-id="GT | Televisiete" tvg-name="GT | Televisiete" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Canal7GT2022.png/1024px-Canal7GT2022.png" group-title="GUATEMALA", Televisiete || GUATEMALA
http://daleplay.club:8080/listatbsdaleplay22/listatbsdaleplaypararepetircanales/115804
#EXTINF:-1 tvg-id="GT | Teleonce" tvg-name="GT | Teleonce" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Canal11GT2022.png/200px-Canal11GT2022.png" group-title="GUATEMALA", Teleonce || GUATEMALA
http://daleplay.club:8080/listatbsdaleplay22/listatbsdaleplaypararepetircanales/135425
#EXTINF:-1 tvg-id="GT | Trecevisión" tvg-name="GT | Trecevisión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Canal13GT2022.png/250px-Canal13GT2022.png" group-title="GUATEMALA", Trecevisión || GUATEMALA
http://45.5.117.182:8000/play/a0fy/index.m3u8
#EXTINF:-1 tvg-id="GT | TN 23" tvg-name="GT | TN 23" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/TN23logo2016.png/250px-TN23logo2016.png" group-title="GUATEMALA", TN 23 || GUATEMALA
https://linear-259.frequency.stream/dist/vix/259/hls/master/playlist.m3u8
#EXTINF:-1 tvg-id="GT | Guatevisión" tvg-name="GT | Guatevisión" tvg-logo="https://www.guatevision.com/wp-content/uploads/sites/2/2019/09/logo-1.png?quality=82" group-title="GUATEMALA", Guatevisión || GUATEMALA
http://daleplay.club:8080/listatbsdaleplay22/listatbsdaleplaypararepetircanales/313954
#EXTINF:-1 tvg-id="GT | Canal 27 El Canal de la Esperanza" tvg-name="GT | Canal 27 El Canal de la Esperanza" tvg-logo="https://www.canal27.org/wp-content/uploads/2023/04/Logo-canal-mediano-transp-1024x576.png" group-title="GUATEMALA", Canal 27 El Canal de la Esperanza || GUATEMALA
https://live.canal27.tv:3633/live/canal27live.m3u8
#EXTINF:-1 tvg-id="GT | Nuevo Mundo Televisión" tvg-name="GT | Nuevo Mundo Televisión" tvg-logo="https://image.jimcdn.com/app/cms/image/transf/none/path/s819cb0bb844c8380/image/i28512c8451c19f44/version/1488494562/image.png" group-title="GUATEMALA", Nuevo Mundo Televisión || GUATEMALA
https://tvlatina.live:1936/8008/8008/playlist.m3u8
#EXTINF:-1 tvg-id="GT | TV Azteca Guatemala" tvg-name="GT | TV Azteca Guatemala" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Azteca_Guate_2017.png/200px-Azteca_Guate_2017.png" group-title="GUATEMALA", TV Azteca Guate || GUATEMALA
http://daleplay.club:8080/listatbsdaleplay22/listatbsdaleplaypararepetircanales/223644
#EXTINF:-1 tvg-id="GT | Canal Antigua" tvg-name="GT | Canal Antigua" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Canal_antigua_logo.png/115px-Canal_antigua_logo.png" group-title="GUATEMALA", Canal Antigua || GUATEMALA
http://45.228.234.193:16000/play/a0dk/index.m3u8
#EXTINF:-1 tvg-id="GT | VEA Canal" tvg-name="GT | VEA Canal" tvg-logo="https://i0.wp.com/directostv.teleame.com/wp-content/uploads/2017/10/Vea-Canal-en-vivo-Online.png?resize=696%2C392&ssl=1" group-title="GUATEMALA", VEA Canal || GUATEMALA
https://video-weaver.mia05.hls.ttvnw.net/v1/playlist/CssF5hkHSpNMtvCZRWeXtJU9QqCp66hKvZ3Hj8mCxZxA9z9uPMDUbuCDsdBfReWJni4P1nNoGSU7X1yEC38ZQCm9AUcE5q0eg-Vn1-g3gdeGrsEWA1HMmdwFbqu7WfO5p1k-38RGJjLDaFXWaHfL4HU9P1xmIGol6_85cViAoejh4xYOqIehEWfh42dGivV9YNtQ0emVaxpvHkY_R8MN05CFZ3hsqkT88cNEXXYDZAJDqbVwOACmdX3Lezb2Q-BMUYnIkJdO7Fc3y7acxQp0_LGgSZYX04lsR5sF6jwdZ2kyk4bp0oB87JScYyOapLjvaZE_ltQ0AR3S0STbz1HVnKubZ5-PTwc4IJDoYHRaWA-i961I8dLG84OhIUNXTfxWTPj-VNmMx9QddGmqDOK7UfFBVENjXQbFXebxRUuGVBhbAZy1E4p3Dn9bpBek08jqUky1chxXEuqtW6Ylm1kWeYoVh1Cwl5SEO8gl7GhxZzPOYT8P974lqA1nR9mZk7EgrLoLSrpWzRjBPNRStVXzKayRGnbvjW0eb8eBkZ2u_y-9bpYh8gfmQfgCAgqoM5t0lgzaKaS5JsVeftmQCTOaWjFSEcuZ6lu0A6dA4Kr5HA1o7ch8abapnU5wLrjaofzktgymCbu3cdniRN033MeqVeNPJ44-swBeCQ0CYfIi_9X1UthGi4Yt_tiBG_RB6YkEOHry96SFthywwrdbdMb32Eev3lb87WPPmxnmnr5kOu70-7tVqX8bM6sJbqrH2OmNfrQCthqfJiuujnXx8DmofktPEs67JRv-U2umM-hbjt3LsYY6I3VCvzyXeq68iKi40VBFSJw4u6eyh3wxratUogIilDrI12orhdtaC2ePo3HkQA9s-QPZ3pgR1UAGsxaPtm_ZyEi6Mf5mtEWj_bBfimrq7E__pxBHgG8Fnh7qNiLWMldasRykeP8l5MHjJxoMhM_TxBhogoIOy6wHIAEqCWV1LXdlc3QtMjDzBw.m3u8
#EXTINF:-1 tvg-id="GT | Canal de Gobierno" tvg-name="GT | Canal de Gobierno" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLR_Hm3vKJu8-yXqyi7Q66F8ME2CsBddRLq4JnyVcQ=s88-c-k-c0x00ffffff-no-rj" group-title="GUATEMALA", Canal de Gobierno || GUATEMALA
https://video-weaver.mia05.hls.ttvnw.net/v1/playlist/CtYF99Php5qcDajjJuBRCUkHenJD6obnpbDB6teKCIZl6PI9ads_uuF15KKwmPtJUVmx8gPkFx_0CwIUBazHHock57OaSarxwt7wc1jjWMrPtSSH9WaEBlpgkC76wB3Cz1txGIgvzIBMqNAnTMEgYLtg9Oc7rLcqCxVCD_to3xcJkGoEigSwSkH4vPVgtMbSSZ7Flbt1naa6FaXhByd47gVCBy4EzvpiYPP4biAtOXr6dOc3Z42TYtCCCuvFQxnmSZbwgkagwsUn5yjsPwthITr0J7yk0dOs586q-JQuS3Q1b76IQnZmO8GEuYTwqVVsBjEf_k_G9j6nEq1MXwGBsIYQ1jfl08Z43cMxjOLomIV103Ihf2pZS7V6bgWmGbGSGVs3gXqYRoHvjhjCOSyqF__v0M7RuEDqd-J7uSY-lVsyioB_tBFqKkO7hjnO9bsl1jD5VYeMtAwog3I7ABL2EKne30t48vZixFHwGIvCpCINszhpeBg0bTxAdkQC6iX_QMRP-AN95z_NOogOSyOeqFjBGkHvAkZr5MLws8f6gbyAu7FACX1h2Hsim-x-9qeJuvZqo88Sp5dErXSNE-BZj-VKkBDrQhhfyOUJxP-aJVIkFJcss94k8rzaogK-bVjabsYnZKQtcARBEBMLlCHu4hNqObOOEx5eH15Dc7E83iXz9lJCqJzpwJ5gC-oFWZq65OmTdeJWrfM1V_wwA1BClE1HXR6TVy0gdfOBKMK640rdFfRB07xC1KwFHQ5S-O50cGKWYeugNQj2Da2iO5bdzGr8Pgl8SUAcv1pClpxm0vRNQa-IH-K0o8CVu38jambX_IPzsql25bymcX6bSQoT05Fqt8bW9E6EbvKr1ABcNOZ1r4V51VrnmX4jvAB08jCusuI_3zHwM63DCLpFc_JzfgzsyDfneqvtGGkaepAgSVk-1x6Lm9h02Yd8m3iqur-pjPECnCp9tu-8GgzV5n05uGUOQhdQL40gASoJdXMtZWFzdC0yMPEH.m3u8
#EXTINF:-1 tvg-id="GT | La Red TV" tvg-name="GT | La Red TV" tvg-logo="https://www.lared1061.com/wp-content/uploads/2022/11/Untitled-design-34.png" group-title="GUATEMALA", La Red TV || GUATEMALA
http://45.5.119.202:54321/play/a05l/index.m3u8
#EXTINF:-1 tvg-id="GT | UTZ Channel" tvg-name="GT | UTZ Channel" tvg-logo="https://pbs.twimg.com/media/FpdM0ZtXgAAsDcR?format=png&name=240x240" group-title="GUATEMALA", UTZ Channel || GUATEMALA
http://45.228.234.77:3340/play/UtzChannel/index.m3u8
#EXTINF:-1 tvg-id="GT | CNI Digital TV" tvg-name="GT | CNI Digital TV" tvg-logo="https://yt3.googleusercontent.com/tZOXEbCcPJaDBYP9fkISsjAInn7mVmbfOUJ9ECd_IzK6RYX3wfzb80JEDnLnmpSnF_eU9qge-Q=s900-c-k-c0x00ffffff-no-rj" group-title="GUATEMALA", CNI Digital TV || GUATEMALA
http://204.12.202.90:8080/playgt/playgt2023/143
#EXTINF:-1 tvg-id="GT | Canal 5 Sololá" tvg-name="GT | Canal 5 Sololá" tvg-logo="https://play-lh.googleusercontent.com/nM4lpY-B8PmfTf61UOpV2wSHLKD02F7stYKL36nzjs5OT6QXTF4dEsyoCVJVW4KlXg=w526-h296-rw" group-title="GUATEMALA", Canal 5 Sololá || GUATEMALA
https://cdn.streamhispanatv.net:3700/live/tv5sololalive.m3u8
#EXTINF:-1 tvg-id="GT | Canal TV 6" tvg-name="GT | Canal TV 6" tvg-logo="https://pbs.twimg.com/media/Fk8HcGnWAAArkr1?format=png&name=small" group-title="GUATEMALA", Canal TV 6 || GUATEMALA
https://stream.meteorito.cloud/canal6/smil:canal6.smil/playlist.m3u8
#EXTINF:-1 tvg-id="GT | Televisión Departamental Sololá" tvg-name="GT | Televisión Departamental Sololá" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLSty18cfbX8fc5AhCUoQNosfvdF6OUGS7XfObo7WA=s900-c-k-c0x00ffffff-no-rj" group-title="GUATEMALA", TDS || GUATEMALA
https://tv.ideskhn.com:3343/live/tdssololalive.m3u8
#EXTINF:-1 tvg-id="GT | TV Paisaje" tvg-name="GT | TV Paisaje" tvg-logo="https://tvguatemala.net/wp-content/uploads/2023/02/TV-Paisaje-Solola-En-Vivo.webp" group-title="GUATEMALA", TV Paisaje || GUATEMALA
https://video-weaver.mia05.hls.ttvnw.net/v1/playlist/CtQFsfSfGyYO1GWN9j8lOX3Pxe82nkoD2bHVyputfb6t6bNre_85xDFXQ3GU8ZfNkA5fQss0MHFuJVlZ-hcpGG7vZfqRUl38pXQEN1xkTPk-_dYv1Cu2WMQT8_ryHPRZW7tA3NyiYNpM0TsCIVhlWZzWCaMiZe3gpJ7BwIkQI0A47orl98oGB8p3yJOE7SdttPCVtkq5Q8lVQXlDmTMfoBRw6nsaWoHtoUYy3XqoXjpFG-jyohW5eSeFlCc9RzAnsZ_DbwvCL15dIYdwBKzrh_kl4adpYovw2XK_V9u5XXUrj5Ne_BWq0uceP4tCDxWEq1eFIVeRhxDpD3z0Dav4OHJgzU7ORYxctbrz2OwPhIMOp_lqxMO1ICQj_zeNbQUFnkpPuS3RtzMGKQZjho4lo98XyzXGbjGjS1aaLy6hqL5jTla2o9ubCH5s7he5LkH2zM0c20BjijLfjNHekKxSvIcyQNUrzVKdGahcyIWBFbKjy4QURRMY4NTc-GpOSfL_r1JmN7T0fST34dXrYqwfw04jjc7215dKTdcA6XrHzNvrxoQeu8dLxRfr4dLtXJKEIosdJuWWZlSSrnlfyPHnP87hbwb4eAiZzPDlu5mwmgRase7NcnD5dlhom2SDWoODgvx7zX0c3Qt0wjmu7Zjvl1txb-EGCS7O8V9jH8fzoDEtOANsPTNtONTvEYbbax8WanVJJ3PLJOQc_B9zMvyZIwH2hab9fmzgDx6cp_oC-eeIe1oqsOVwt5pgUQWvVYhBsIRpzbCynvSONQiy7Pkzc_k8oRV0xu4CLKoj2MKrDDQuwkzpPnydwAo_fKiivUNO36ayf5kfSN97InX_CAHc3Ue_pbsIc6-uBYs0SKHRQS3zD2b3glmwe4Pvy_mcpeaLk0-J9XVIi6dHbZ4A8IMB2xY_R24AAZ4MUQWJUOrUkG9cXh6j9rjqG8ECS_cUt4THW4pi9AbOVhoM2r4pPSyfgWsvGMUPIAEqCXVzLWVhc3QtMjDxBw.m3u8
#EXTINF:-1 tvg-id="GT | Canal 9 Sololá" tvg-name="GT | Canal 9 Sololá" tvg-logo="https://static.wixstatic.com/media/7acae1_af8e141a8b0641ba8b1f6e818ed47357~mv2.png" group-title="GUATEMALA", Canal 9 Sololá || GUATEMALA
https://cdn.streamhispanatv.net:3237/live/canal9tvgtlive.m3u8
#EXTINF:-1 tvg-id="GT | Guatv" tvg-name="GT | Guatv" tvg-logo="https://static.wixstatic.com/media/7acae1_8cd678c8791045eb8fab68a10b36a1f6~mv2.png" group-title="GUATEMALA", Guatv || GUATEMALA
https://cdn.streamhispanatv.net:3589/live/guatvgtlive.m3u8
#EXTINF:-1 tvg-id="GT | Nim TV" tvg-name="GT | Nim TV" tvg-logo="https://static.wixstatic.com/media/7acae1_a52030788e08407abb6f67a51e0d5276~mv2.png" group-title="GUATEMALA", Nim TV || GUATEMALA
https://cdn.streamhispanatv.net:3210/live/nimtvgtlive.m3u8
#EXTINF:-1 tvg-id="GT | Expresión TV" tvg-name="GT | Expresión TV" tvg-logo="https://play-lh.googleusercontent.com/vUzmGKespnKq6EKq246qx1HBoFUBrNXXCV1i-Ci4Nz94s19lQBCpNIfmLj08gTDstemU" group-title="GUATEMALA", Expresión TV || GUATEMALA
https://cdn.streamhispanatv.net:3508/live/extvlive.m3u8
#EXTINF:-1 tvg-id="GT | Visión TV" tvg-name="GT | Visión TV" tvg-logo="https://static.wixstatic.com/media/7acae1_68253d580c29475b9be0be44ae441758~mv2.png" group-title="GUATEMALA", Visión TV || GUATEMALA
https://cdn.streamhispanatv.net:3076/live/visiontvlive.m3u8
#EXTINF:-1 tvg-id="GT | Tunevisión" tvg-name="GT | Tunevisión" tvg-logo="https://static.wixstatic.com/media/7acae1_3fb0baf8b1a34eb182f7726e18e8a12f~mv2.png" group-title="GUATEMALA", Tunevisión || GUATEMALA
https://cdn.streamhispanatv.net:3852/live/tunevisionlive.m3u8
#EXTINF:-1 tvg-id="GT | TVS Retro" tvg-name="GT | TVS Retro" tvg-logo="https://static.wixstatic.com/media/7acae1_cedb3160f2f54e378f9990c5a5a49a1d~mv2.png" group-title="GUATEMALA", TVS Retro || GUATEMALA
https://cdn.streamhispanatv.net:3531/live/tvsretrogtlive.m3u8
#EXTINF:-1 tvg-id="GT | Telemaya" tvg-name="GT | Telemaya" tvg-logo="https://www.telemaya.com/images/logo.png" group-title="GUATEMALA", Telemaya || GUATEMALA
https://tv91.hostingnuclear.com:19360/telemaya/telemaya.m3u8
#EXTINF:-1 tvg-id="GT | TV Radio Maya" tvg-name="GT | TV Radio Maya" tvg-logo="https://d6scj24zvfbbo.cloudfront.net/07b2980a5c2c0fb9c4babbf90a196f49/200000010-25a1825a1a/200/LOGO%20RADIO%20MAYA%20NUEVO%20.png?ph=0a6e80f01c" group-title="GUATEMALA", TV Radio Maya || GUATEMALA
https://video.misistemareseller.com/tvradiomaya/tvradiomaya/playlist.m3u8
#EXTINF:-1 tvg-id="GT | Teve Globo" tvg-name="GT | Teve Globo" tvg-logo="https://teveglobo.s3.us-east-2.amazonaws.com/Logo.png" group-title="GUATEMALA", Teve Globo de Quetzaltenango || GUATEMALA
https://cdn.streamhispanatv.net:3862/live/teveglobolive.m3u8
#EXTINF:-1 tvg-id="GT | Totovisión" tvg-name="GT | Totovisión" tvg-logo="https://static.wixstatic.com/media/7acae1_a20549c54e1e49ddabdff4c98eee4d25~mv2.png" group-title="GUATEMALA", Totovisión || GUATEMALA
https://cdn.streamhispanatv.net:3209/live/totovisiongtlive.m3u8
#EXTINF:-1 tvg-id="GT | Mi canal GT" tvg-name="GT | Mi canal GT" tvg-logo="https://static.wixstatic.com/media/7acae1_d5576fcd9aaf4853afcb142591bedacb~mv2.png" group-title="GUATEMALA", Mi canal GT || GUATEMALA
http://ms.android-iptv.com/live/V7rA1feOk3/FkGkEh8Spe/6671.m3u8
#EXTINF:-1 tvg-id="GT | Full Channel" tvg-name="GT | Full Channel" tvg-logo="https://static.wixstatic.com/media/7acae1_f1b665198ed5434dbdddc5bd45b156cc~mv2.png" group-title="GUATEMALA", Full Channel || GUATEMALA
https://cdn.streamhispanatv.net:3845/live/fullchannelgtlive.m3u8
#EXTINF:-1 tvg-id="GT | SAS TV" tvg-name="GT | SAS TV" tvg-logo="https://static.wixstatic.com/media/7acae1_c84cc56a740f48d1ad46aab4102788cc~mv2.png" group-title="GUATEMALA", SAS TV || GUATEMALA
https://cdn.streamhispanatv.net:3390/live/sastvgtlive.m3u8
#EXTINF:-1 tvg-id="GT | TV Unción" tvg-name="GT | TV Unción" tvg-logo="https://pbs.twimg.com/media/FpQbkRGWAAE9bqa?format=png&name=small" group-title="GUATEMALA", TV Unción || GUATEMALA
http://45.228.234.77:3340/play/tvuncion04/index.m3u8
#EXTINF:-1 tvg-id="GT | Canal 100 TV Chinique" tvg-name="GT | Canal 100 TV Chinique" tvg-logo="https://static.wixstatic.com/media/7acae1_17c09e7dae974060a5cf7d0561412dc9~mv2.png" group-title="GUATEMALA", Canal 100 TV Chinique || GUATEMALA
https://cdn.streamhispanatv.net:3295/live/canal100chilive.m3u8
#EXTINF:-1 tvg-id="GT | Knal 4 Quiché" tvg-name="GT | Knal 4 Quiché" tvg-logo="https://static.wixstatic.com/media/7acae1_1dd1a280dfef42a4a904ce4a8582e1aa~mv2.png" group-title="GUATEMALA", Knal 4 Quiché || GUATEMALA
https://cdn.streamhispanatv.net:3261/live/knal4gtlive.m3u8
#EXTINF:-1 tvg-id="GT | TV Florencia" tvg-name="GT | TV Florencia" tvg-logo="https://pbs.twimg.com/media/Fa5X4OHX0AAbP3G?format=png&name=small" group-title="GUATEMALA", TV Florencia || GUATEMALA
https://cdn.streamhispanatv.net:3819/live/tvflorencialive.m3u8
#EXTINF:-1 tvg-id="GT | Telecosta" tvg-name="GT | Telecosta" tvg-logo="https://www.telecostaescuintla.com/gallery_gen/3b51c096b46472b84baedd3e6dba34ff_200x176.png" group-title="GUATEMALA", Telecosta || GUATEMALA
https://tv91.hostingnuclear.com:19360/telecosta/telecosta.m3u8
#EXTINF:-1 tvg-id="GT | Playmedios TV" tvg-name="GT | Playmedios TV" tvg-logo="https://static.wixstatic.com/media/7acae1_8cf9f5fa2991439b88ea3847bd682565~mv2.png" group-title="GUATEMALA", Playmedios TV || GUATEMALA
http://204.12.202.90:8080/playgt/playgt2023/61
#EXTINF:-1 tvg-id="GT | Nuestra Imagen TV" tvg-name="GT | Nuestra Imagen TV" tvg-logo="https://i0.wp.com/nuestraimagentv.com.gt/portada/wp-content/uploads/2022/03/cropped-LOGO-NUESTRA-IMAGEN-FONDO-AZUL1-QUETZZAL.png?resize=1024%2C353&ssl=1" group-title="GUATEMALA", Nuestra Imagen TV || GUATEMALA
https://live.tvcontrolcp.com:1936/imagentv/imagentv/playlist.m3u8
#EXTINF:-1 tvg-id="GT | TV TUN" tvg-name="GT | TV TUN" tvg-logo="https://pbs.twimg.com/media/FZwGRtKXgAAznhd?format=png&name=240x240" group-title="GUATEMALA", TV TUN || GUATEMALA
https://cdn.streamhispanatv.net:3832/live/tvtunlive.m3u8
#EXTINF:-1 tvg-id="GT | Canal 8 de Nueva Santa Rosa" tvg-name="GT | Canal 8 de Nueva Santa Rosa" tvg-logo="https://static.wixstatic.com/media/7acae1_a986824eaf454764a466d8a78dde6b75~mv2.png" group-title="GUATEMALA", Canal 8 de Nueva Santa Rosa || GUATEMALA
https://cdn.streamhispanatv.net:3697/live/canal8starosalive.m3u8
#EXTINF:-1 tvg-id="GT | Multivisión" tvg-name="GT | Multivisión" tvg-logo="https://static.wixstatic.com/media/7acae1_95bf7301ff9847eeafd13b08e3570b64~mv2.png" group-title="GUATEMALA", Multivisión || GUATEMALA
http://svtmedia.digitalgt.com:8080/hls/multivision/index.m3u8
#EXTINF:-1 tvg-id="GT | Multivisión Sports" tvg-name="GT | Multivisión Sports" tvg-logo="https://static.wixstatic.com/media/7acae1_e6ccf72d22fd440a9cf3c402b04f1a4a~mv2.png" group-title="GUATEMALA", Multivisión Sports || GUATEMALA
http://svtmedia.digitalgt.com:8080/hls/multivisionsports/index.m3u8
#EXTINF:-1 tvg-id="GT | Barbe TV" tvg-name="GT | Barbe TV" tvg-logo="https://static.wixstatic.com/media/7acae1_b837b981945d4703a1a838aa550156e0~mv2.png" group-title="GUATEMALA", Barbe TV || GUATEMALA
https://cdn.streamhispanatv.net:3549/live/barbetvlive.m3u8
#EXTINF:-1 tvg-id="GT | Izabal TV" tvg-name="GT | Izabal TV" tvg-logo="https://static.wixstatic.com/media/7acae1_390a0d84287a4bf0bea7620324b57e27~mv2.png" group-title="GUATEMALA", Izabal TV || GUATEMALA
https://cdn.streamhispanatv.net:3340/live/izabaltvlive.m3u8
#EXTINF:-1 tvg-id="GT | Ixchiguan Stereo TV" tvg-name="GT | Ixchiguan Stereo TV" tvg-logo="https://pbs.twimg.com/media/Fa5hIzaXoAAIbV2?format=png&name=120x120" group-title="GUATEMALA", Ixchiguan Stereo TV || GUATEMALA
https://cdn.streamhispanatv.net:3859/live/ixchiguanlive.m3u8
#EXTINF:-1 tvg-id="GT | Maxivisión" tvg-name="GT | Maxivisión" tvg-logo="https://static.wixstatic.com/media/7acae1_ccb27612733c4b5a90b1fcbf30ce7e2a~mv2.png" group-title="GUATEMALA", Maxivisión || GUATEMALA
https://stm1.rootuy.xyz:19360/maxivision/maxivision.m3u8
#EXTINF:-1 tvg-id="GT | Aurora Media Films" tvg-name="GT | Aurora Media Films" tvg-logo="https://static.wixstatic.com/media/7acae1_82b6b5d51d954299bbc7ce7e9d67393d~mv2.png" group-title="GUATEMALA", Aurora Media Films || GUATEMALA
https://cdn.streamhispanatv.net:3398/live/auroramflive.m3u8
#EXTINF:-1 tvg-id="GT | Como antes TV" tvg-name="GT | Como antes TV" tvg-logo="https://static-cdn.jtvnw.net/jtv_user_pictures/4cb24625-2cac-450f-82a0-f4b838992f80-profile_image-70x70.png" group-title="GUATEMALA", Como antes TV || GUATEMALA
https://video-weaver.mia05.hls.ttvnw.net/v1/playlist/CtkF231QeXu8XmlDISOCrwSI-Ln2fKgKKpNT4KRtg2JHzF-qEwhxI3G7cjjdbyKlMfUpYbk6sncjRx7uoCKQzGyM7nwdStGiWHmr1caDTs_rLTqoE0v0joX4ACZvsDxWRPEjoY05q8ZIP1zam6UGUC4mafLUBWHjRjHyQWFzIT3Ek0etNUjcCEPCFhpXx83fOU0YabhWaxX5PF6wBv3Ne1oFeb2r7Bpnxj0tp03d4kIECHG1uPrw2z5aM75tTPMAIkTspYgl0gm4nn-AVUku6EmJ_EYO51Li5W5hh0jaDBogLPsJpu0gX7s5Iu0_GUjvifb6-ZRfqq5mVB_yhqHbsig0WlnH8eUbGBZVH8DOGsYAih7Sa76vvornLckAg1dZIgMZ03OSwsbtJRqi3VyAaKQ3qjlMdi-0oRilx_XIXdcObzLma_D9_BEiiN5-oXF8GCMJWoxwET8Q2t0_VjROutCmdK-a-35L38oiwcJml-sJz-5pq-TwmScY2F8FupwROFnYGWS36a7-QEvM2YMnKP-hqmnz4XmE_ayAjok0b4upL90eak8SG6O5GHoo0uHffZSyfw-JroQwcvwDqd8r2tdP53vHyjygmkRpNMUu31s-HajQdwtybzfchiiyLMOzwCD7m30aWZZBRUAxd8y8uSjphFuoMTku9ORwrU7_se4fwnp-Ye53nnCVJwj2osJVz5Qtl85sF_OFCi15o2vxoJHiz52EZQ5Bgy0dmI2XLdHrEzSfECBKwtc0yMHJBSQJoQ7iNTRVZKVSQ_X79m2zyMKehtPAR7VNk47CdS5NtfPQeafbONsEYJt5uN6YTKWMLc3q8_TxnbZCT0R552z7Chuk1FJLmjC5MTZU2OPM3BIMUR8700734qDRmVRI_5nroJJ4mV9tvlZQbU78Xl4-NkOn8E7s2hmr36Cf9tl7_h-d9WdKTOMzH_GyPMKFTAIPillJ55Qh0zMS24d0GgyAkGc5abWPVgXxCnsgASoJZXUtd2VzdC0yMPMH.m3u8
#EXTINF:-1 tvg-id="GT | Amigos TV" tvg-name="GT | Amigos TV" tvg-logo="https://radiosdeguate.com/image/tv/amigos-tv-chiquimula.png" group-title="GUATEMALA", Amigos TV || GUATEMALA
https://tv91.hostingnuclear.com:19360/amigostv/amigostv.m3u8
#EXTINF:-1 tvg-id="GT | Esquipulas TV" tvg-name="GT | Esquipulas TV" tvg-logo="https://tvguatemala.net/wp-content/uploads/2022/11/Esquipulas-TV-Chiquimula-Guatemala-e1667264346773-289x300.webp" group-title="GUATEMALA", Esquipulas TV || GUATEMALA
https://tv91.hostingnuclear.com:19360/esquipulastv/esquipulastv.m3u8
#EXTINF:-1 tvg-id="GT | Canal 13 de Esquipulas" tvg-name="GT | Canal 13 de Esquipulas" tvg-logo="https://radiosdeguate.com/i/tv/canal-13-esquipulas.png" group-title="GUATEMALA", Canal 13 de Esquipulas || GUATEMALA
https://tv91.hostingnuclear.com:19360/intercable/intercable.m3u8
#EXTINF:-1 tvg-id="GT | Única TV" tvg-name="GT | Única TV" tvg-logo="https://pbs.twimg.com/media/FU3uz6HWUAAw_fs?format=png&name=small" group-title="GUATEMALA", Única TV || GUATEMALA
https://cdn.streamhispanatv.net:3642/live/unicatvlive.m3u8
#EXTINF:-1 tvg-id="GT | Telemax" tvg-name="GT | Telemax" tvg-logo="https://static.wixstatic.com/media/7acae1_5246a327848d4e0f8c39011dd09f0324~mv2.png" group-title="GUATEMALA", Telemax || GUATEMALA
https://cdn.streamhispanatv.net:3824/live/telemaxlive.m3u8
#EXTINF:-1 tvg-id="GT | Cariñosa TV" tvg-name="GT | Cariñosa TV" tvg-logo="https://static.wixstatic.com/media/7acae1_eb191c99aa9948488be5db82cf03b69b~mv2.png" group-title="GUATEMALA", Cariñosa TV || GUATEMALA
https://cdn.streamhispanatv.net:3110/live/carinosatvlive.m3u8
#EXTINF:-1 tvg-id="GT | Super TV Tuismil" tvg-name="GT | Super TV Tuismil" tvg-logo="https://static.wixstatic.com/media/7acae1_59a88b44a8b844149ffc8b27b1baadda~mv2.png" group-title="GUATEMALA", Super TV Tuismil || GUATEMALA
https://cdn.streamhispanatv.net:3586/live/tuismillive.m3u8
#EXTINF:-1 tvg-id="GT | Canal 25 Regional" tvg-name="GT | Canal 25 Regional" tvg-logo="https://play-lh.googleusercontent.com/7ztHD_HAgYKfpaX4S-b3LKlREhXqyVYvO9oXFVK5e9mMVlkVaKcPTxltaCiD7EybyNk=w240-h480-rw" group-title="GUATEMALA", Canal 25 Regional || GUATEMALA
https://srv6.zcast.com.br/canalsantarosa/canalsantarosa/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Teleantillas" tvg-name="DO | Teleantillas" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/TeleAntillas.jpg/125px-TeleAntillas.jpg" group-title="REPUBLICA DOMINICANA", Teleantillas || REPUBLICA DOMINICANA
http://181.189.243.254:8000/play/a0p1/index.m3u8
#EXTINF:-1 tvg-id="DO | Si TV" tvg-name="DO | Si TV" tvg-logo="https://sitv.com.do/wp-content/uploads/2021/10/sitvlogo-1.svg" group-title="REPUBLICA DOMINICANA", Si TV || REPUBLICA DOMINICANA
http://190.122.104.221/Player/sitv.m3u8
#EXTINF:-1 tvg-id="DO | Canal RTVD 4" tvg-name="DO | Canal RTVD 4" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/RTVD_logo_2022.webp/200px-RTVD_logo_2022.webp.png" group-title="REPUBLICA DOMINICANA", Canal RTVD 4 || REPUBLICA DOMINICANA
https://protvradiostream.com:1936/canal4rd-1/ngrp:canal4rd-1_all/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Cananga Televisión" tvg-name="DO | Cananga Televisión" tvg-logo="https://canalesdominicanos.live/template/images/radios/cananga-tv.jpeg" group-title="REPUBLICA DOMINICANA", Cananga Televisión || REPUBLICA DOMINICANA
https://cdn.streamingcpanel.com:3545/live/canangatlive.m3u8
#EXTINF:-1 tvg-id="DO | Telemicro" tvg-name="DO | Telemicro" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/7/75/Telemicro_1997.png/revision/latest/scale-to-width-down/170?cb=20191125192220&path-prefix=es" group-title="REPUBLICA DOMINICANA", Telemicro || REPUBLICA DOMINICANA
http://45.5.117.182:8000/play/a0hi/index.m3u8
#EXTINF:-1 tvg-id="DO | Antena 7" tvg-name="DO | Antena 7" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Antena_Latina_2016.webp/270px-Antena_Latina_2016.webp.png" group-title="REPUBLICA DOMINICANA", Antena 7 || REPUBLICA DOMINICANA
https://d1841z6ti5nz2v.cloudfront.net/Antena7DO/34cdaa501a0217ea217d8f4f083c1728.sdp/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Color Visión" tvg-name="DO | Color Visión" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/ec05bd74826e90977bf051086434a04d.webp" group-title="REPUBLICA DOMINICANA", Color Visión || REPUBLICA DOMINICANA
http://190.149.66.90:4000/play/a02w/index.m3u8
#EXTINF:-1 tvg-id="DO | Telesistema" tvg-name="DO | Telesistema" tvg-logo="https://directostv.teleame.com/wp-content/uploads/2017/10/telesistemac-100x70.png" group-title="REPUBLICA DOMINICANA", Telesistema || REPUBLICA DOMINICANA
http://45.5.117.182:8000/play/a0ek/index.m3u8
#EXTINF:-1 tvg-id="DO | Telecentro" tvg-name="DO | Telecentro" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Telecentro_ICON.jpg/125px-Telecentro_ICON.jpg" group-title="REPUBLICA DOMINICANA", Telecentro || REPUBLICA DOMINICANA
http://45.228.234.193:16000/play/a0cy/index.m3u8
#EXTINF:-1 tvg-id="DO | Catorce TV" tvg-name="DO | Catorce TV" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1zw2p9aavhzut6-I2XfjwRn5Hz8pDPd7hfurIwpP4qTqTzPp_qRridkUeGiGqae6c86c&usqp=CAU" group-title="REPUBLICA DOMINICANA", Catorce TV || REPUBLICA DOMINICANA
https://video.misistemareseller.com/catorcetv/catorcetv/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Digital 15" tvg-name="DO | Digital 15" tvg-logo="http://festivaldecineglobal.org/2014/wp-content/uploads/Digital15-228x176.png" group-title="REPUBLICA DOMINICANA", Digital 15 || REPUBLICA DOMINICANA
http://45.228.232.219:16000/play/a0kg/index.m3u8
#EXTINF:-1 tvg-id="DO | Tele Santo Domingo" tvg-name="DO | Tele Santo Domingo" tvg-logo="https://pbs.twimg.com/media/FpQWZWmXoAIGvm4?format=png&name=small" group-title="REPUBLICA DOMINICANA", Tele Santo Domingo || REPUBLICA DOMINICANA
https://cdn5.streamgato.us:3315/live/telesantodomingolive.m3u8
#EXTINF:-1 tvg-id="DO | RTVD 17" tvg-name="DO | RTVD 17" tvg-logo="https://canal17rd.com/wp-content/uploads/2020/09/cropped-logo.png" group-title="REPUBLICA DOMINICANA", RTVD 17 || REPUBLICA DOMINICANA
https://protvradiostream.com:1936/rtvd17/ngrp:rtvd17_all/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Cinevisión" tvg-name="DO | Cinevisión" tvg-logo="https://canal19.do/wp-content/uploads/2021/06/cropped-Logos-Canal-19-Cinevision-1024x341.png" group-title="REPUBLICA DOMINICANA", Cinevisión || REPUBLICA DOMINICANA
https://live.teledom.info:3713/live/cinevisionlive.m3u8
#EXTINF:-1 tvg-id="DO | Antena 21" tvg-name="DO | Antena 21" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/8/8c/Antena_21_2017.png/revision/latest/scale-to-width-down/300?cb=20210512152824&path-prefix=es" group-title="REPUBLICA DOMINICANA", Antena 21 || REPUBLICA DOMINICANA
http://51.81.106.157:8084/hls/a21.m3u8
#EXTINF:-1 tvg-id="DO | Telefuturo canal 23" tvg-name="DO | Telefuturo canal 23" tvg-logo="https://radiodigitaltv.com/wp-content/uploads/2022/01/telefuturo-canal-23-en-vivo-online.jpg" group-title="REPUBLICA DOMINICANA", Telefuturo canal 23 || REPUBLICA DOMINICANA
https://ss9.domint.net:3054/tf_str/telefuturo/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Red Nacional de Noticias" tvg-name="DO | Red Nacional de Noticias" tvg-logo="https://i0.wp.com/rnn.com.do/wp-content/uploads/2021/11/LOGO-CUBOS-RNN-test-3.png?resize=1536%2C484&ssl=1" group-title="REPUBLICA DOMINICANA", RNN || REPUBLICA DOMINICANA
http://cacatuaiptv.com/rnn.m3u8
#EXTINF:-1 tvg-id="DO | Teleuniverso" tvg-name="DO | Teleuniverso" tvg-logo="https://pbs.twimg.com/profile_images/1055497104175652864/3iL8w0va_400x400.jpg" group-title="REPUBLICA DOMINICANA", Teleuniverso || REPUBLICA DOMINICANA
http://45.228.234.193:16000/play/a0cx/index.m3u8
#EXTINF:-1 tvg-id="DO | EN Televisión" tvg-name="DO | EN Televisión" tvg-logo="https://canalesdominicanos.live/template/images/radios/entelevision.jpg" group-title="REPUBLICA DOMINICANA", EN Televisión || REPUBLICA DOMINICANA
https://video.misistemareseller.com/entelevision/entelevision/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Supercanal 33" tvg-name="DO | Supercanal 33" tvg-logo="https://1.bp.blogspot.com/-apCuh7ef9oo/XiMXT7DxbiI/AAAAAAAAIWY/HvhzsoeWuck0a8_58dw4TdQyWuyGCQHbgCLcBGAsYHQ/s1600/img_super%2Bcanal%2B33%2Ben%2Bvivo%2Btv%2BDom.jpg" group-title="REPUBLICA DOMINICANA", Supercanal 33 || REPUBLICA DOMINICANA
https://elgruposupercanal.streamgato.us:3658/live/supercanal33live.m3u8
#EXTINF:-1 tvg-id="DO | Sport Visión Canal 35" tvg-name="DO | Sport Visión Canal 35" tvg-logo="https://canalesdominicanos.live/template/images/radios/small/sport-vision-canal-35.jpg" group-title="REPUBLICA DOMINICANA", Sport Visión Canal 35 || REPUBLICA DOMINICANA
https://5fa5de1a545ae.streamlock.net/sportvision35tv/sportvision35tv/playlist.m3u8
#EXTINF:-1 tvg-id="DO | CDN 37" tvg-name="DO | CDN 37" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLQaFlOLf2ETBNoLvzvPfnPDmChxG7FkUQJ5DkH0fg=s900-c-k-c0x00ffffff-no-rj" group-title="REPUBLICA DOMINICANA", CDN 37 || REPUBLICA DOMINICANA
https://dacastmmd.mmdlive.lldns.net/dacastmmd/5f85ae10c62d4be3a5edbf483cb04f25/chunklist_b4628000.m3u8
#EXTINF:-1 tvg-id="DO | Coral TV" tvg-name="DO | Coral TV" tvg-logo="https://www.foromedios.com/uploads/monthly_2018_01/large.Coral2017.PNG.5f4fc1a4dfac82acd43fccd93cffb82c.PNG" group-title="REPUBLICA DOMINICANA", Coral TV || REPUBLICA DOMINICANA
http://190.122.96.188:8888/http/005
#EXTINF:-1 tvg-id="DO | Teleradio América" tvg-name="DO | Teleradio América" tvg-logo="https://teleradioamerica.com/wp-content/themes/tra2017/imagenes/logo.png" group-title="REPUBLICA DOMINICANA", Teleradio América || REPUBLICA DOMINICANA
https://live.teledom.info:3625/live/tra45live.m3u8
#EXTINF:-1 tvg-id="DO | Amé Televisión" tvg-name="DO | Amé Televisión" tvg-logo="https://www.amecanal47.com/images/ame_47_sm.jpg" group-title="REPUBLICA DOMINICANA", Amé Televisión || REPUBLICA DOMINICANA
https://ss9.domint.net:3040/ame_str/amecanal47/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Televisión La Nueva Isabela" tvg-name="DO | Televisión La Nueva Isabela" tvg-logo="https://tni51online.com/images/tni_logo_web.jpg" group-title="REPUBLICA DOMINICANA", Televisión La Nueva Isabela || REPUBLICA DOMINICANA
https://ss5.domint.net:3188/tni_str/tni51/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Teleimpacto" tvg-name="DO | Teleimpacto" tvg-logo="http://teleimpacto52.com.do/wp-content/uploads/2021/07/TELEIMPACTOLOGO3-e1626542642362.png" group-title="REPUBLICA DOMINICANA", Teleimpacto || REPUBLICA DOMINICANA
http://190.122.96.188:8888/http/013
#EXTINF:-1 tvg-id="DO | Carivisión" tvg-name="DO | Carivisión" tvg-logo="http://carivision.online/wp-content/uploads/2017/10/Sin-t%C3%ADtulo-1carivision-300x144.png" group-title="REPUBLICA DOMINICANA", Carivisión || REPUBLICA DOMINICANA
https://ss5.domint.net:3174/car_str/carivision/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Teledigital" tvg-name="DO | Teledigital" tvg-logo="https://www.vivalivetv.com/public/files/shows/0/1/2218-294x165-FFFFFF.jpg" group-title="REPUBLICA DOMINICANA", Teledigital || REPUBLICA DOMINICANA
https://cdn5.streamgato.us:3371/live/canal56live.m3u8
#EXTINF:-1 tvg-id="DO | Digital Visión 63" tvg-name="DO | Digital Visión 63" tvg-logo="https://pbs.twimg.com/profile_images/878989434196295680/p1LEA6U4_400x400.jpg" group-title="REPUBLICA DOMINICANA", Digital Visión 63 || REPUBLICA DOMINICANA
https://ss3.domint.net:3120/dv6_str/digitalvision/chunklist_w1482544367.m3u8
#EXTINF:-1 tvg-id="DO | CDN Deportes" tvg-name="DO | CDN Deportes" tvg-logo="https://cdndeportes.com.do/wp-content/uploads/2022/02/Logo_CDNDeportes.svg" group-title="REPUBLICA DOMINICANA", CDN Deportes || REPUBLICA DOMINICANA
http://181.189.243.254:8000/play/a0qq/index.m3u8
#EXTINF:-1 tvg-id="DO | Tele Radio Norte" tvg-name="DO | Tele Radio Norte" tvg-logo="https://lh3.googleusercontent.com/p/AF1QipOwY1A-sA1J8U8Mkjs5sgVh28tkI2ibPDp0aLPO=w1080-h608-p-no-v0" group-title="REPUBLICA DOMINICANA", Tele Radio Norte || REPUBLICA DOMINICANA
https://angelistic.live:3785/live/tvoficiallive.m3u8
#EXTINF:-1 tvg-id="DO | Su Mundo TV" tvg-name="DO | Su Mundo TV" tvg-logo="https://canalesdominicanos.live/template/images/radios/su-mundo-tv.jpg" group-title="REPUBLICA DOMINICANA", Su Mundo TV || REPUBLICA DOMINICANA
https://vsrv2.az-streamingserver.com:3087/live/sumundotvlive.m3u8
#EXTINF:-1 tvg-id="DO | Guaymate TV" tvg-name="DO | Guaymate TV" tvg-logo="https://www.vivalivetv.com/public/files/shows/0/1/2472-800x450-FFFFFF.jpg" group-title="REPUBLICA DOMINICANA", Guaymate TV || REPUBLICA DOMINICANA
https://5790d294af2dc.streamlock.net/8100/8100/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Nexxo TV" tvg-name="DO | Nexxo TV" tvg-logo="https://canalesdominicanos.live/template/images/radios/nexxo-tv-santiago.png" group-title="REPUBLICA DOMINICANA", Nexxo TV || REPUBLICA DOMINICANA
https://cdn3.streamgato.us:3938/live/nexxotvlive.m3u8
#EXTINF:-1 tvg-id="DO | Teleunión" tvg-name="DO | Teleunión" tvg-logo="http://teleuniontvrd.com/portal/wp-content/themes/rt_manticore/images/logoteleunionsmall.png" group-title="REPUBLICA DOMINICANA", Teleunión || REPUBLICA DOMINICANA
http://server3.prostudionetwork.com:1945/teleunion/TU/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Canal 25" tvg-name="DO | Canal 25" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-l/27311479e30cd9bfbae59eb9854b0e2c.webp" group-title="REPUBLICA DOMINICANA", Canal 25 || REPUBLICA DOMINICANA
https://ss3.domint.net:3150/c25_str/canal25/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Televisión del Este" tvg-name="DO | Televisión del Este" tvg-logo="https://televisiondeleste.net/wp-content/uploads/2021/04/LogoTVEste2.png" group-title="REPUBLICA DOMINICANA", Televisión del Este || REPUBLICA DOMINICANA
http://cm.hostlagarto.com:8081/ESTV/estv.myStream/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Galaxia Teve" tvg-name="DO | Galaxia Teve" tvg-logo="http://1.bp.blogspot.com/-BZ3byEaoRkE/XfwZYeUp-eI/AAAAAAAAD1E/AYwLVzCOjQkL4sAK3RuM5Vm512y9rtw5QCK4BGAYYCw/s1600/Sin%2Bt%25C3%25ADtulo-4-01.jpg" group-title="REPUBLICA DOMINICANA", Galaxia Teve || REPUBLICA DOMINICANA
https://vdo1.streamgato.us:3839/live/galaxiatvlive.m3u8
#EXTINF:-1 tvg-id="DO | MegaVisión TV" tvg-name="DO | MegaVisión TV" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLThfHKg1wlVNDCFiAmoJXlnyziu-qyb3Z27c8kYZQ=s900-c-k-c0x00ffffff-no-rj" group-title="REPUBLICA DOMINICANA", MegaVisión TV || REPUBLICA DOMINICANA
http://server3.prostudionetwork.com:1943/megavision/MV/playlist.m3u8
#EXTINF:-1 tvg-id="DO | TV 43" tvg-name="DO | TV 43" tvg-logo="http://www.tv43.net/wp-content/uploads/2021/09/cropped-logo-Nuevo-corto-TV43.png" group-title="REPUBLICA DOMINICANA", TV 43 || REPUBLICA DOMINICANA
https://ss5.domint.net:3058/tv43_str/tv43/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Adocco TV" tvg-name="DO | Adocco TV" tvg-logo="https://adocco.tv/wp-content/uploads/2022/03/cropped-logo_tv.png" group-title="REPUBLICA DOMINICANA", Adocco TV || REPUBLICA DOMINICANA
https://cm.hostlagarto.com:4445/phtv/Phtv.myStream/playlist.m3u8?DVR
#EXTINF:-1 tvg-id="DO | Vision 3000 Canal 3" tvg-name="DO | Vision 3000 Canal 3" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHsrGtckQhs4siaVvTunwb0INzkcxVB_Bh1P7WdezFQbmF6WqCmoXaHNflBKIn3FNmFjw&usqp=CAU" group-title="REPUBLICA DOMINICANA", Vision 3000 Canal 3 || REPUBLICA DOMINICANA
https://ss3.domint.net:3102/v3_str/v3000/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Peravia Visión" tvg-name="DO | Peravia Visión" tvg-logo="https://peraviavision.tv/wp-content/uploads/2018/11/cropped-Logo-PERAVIA-VISION-SOLO.png" group-title="REPUBLICA DOMINICANA", Peravia Visión || REPUBLICA DOMINICANA
https://ss5.domint.net:3048/pvv_str/peravia/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Boreal Televisión" tvg-name="DO | Boreal Televisión" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLQRQnla6CN3x3X55D3yFq6VYWTrLX97te5ArEJ8=s900-c-k-c0x00ffffff-no-rj" group-title="REPUBLICA DOMINICANA", Boreal Televisión || REPUBLICA DOMINICANA
https://cdn.borealtelevision.com:3712/live/borealtelevisionhdlive.m3u8
#EXTINF:-1 tvg-id="DO | Telenord Canal 8" tvg-name="DO | Telenord Canal 8" tvg-logo="https://www.telenord.com.do/templates/yootheme/cache/0a/Telenordcom_-_iconos_8-0a7abf6c.webp" group-title="REPUBLICA DOMINICANA", Telenord Canal 8 || REPUBLICA DOMINICANA
http://newyorkstream.ddns.net:5854/telenord8/telenord8/telenord8.m3u8
#EXTINF:-1 tvg-id="DO | Telenord Canal 10" tvg-name="DO | Telenord Canal 10" tvg-logo="https://www.telenord.com.do/templates/yootheme/cache/88/Telenordcom_-_iconos_10-88d88d08.webp" group-title="REPUBLICA DOMINICANA", Telenord Canal 10 || REPUBLICA DOMINICANA
http://newyorkstream.ddns.net:5854/telenord10/telenord10/telenord10.m3u8
#EXTINF:-1 tvg-id="DO | Telenord Canal 12" tvg-name="DO | Telenord Canal 12" tvg-logo="https://telenord.com.do/templates/yootheme/cache/f3/Telenordcom_-_iconos_12-f3ec5e84.webp" group-title="REPUBLICA DOMINICANA", Telenord Canal 12 || REPUBLICA DOMINICANA
http://newyorkstream.ddns.net:5854/telenord12/telenord12/telenord12.m3u8
#EXTINF:-1 tvg-id="DO | TVO Canal 49" tvg-name="DO | TVO Canal 49" tvg-logo="https://tvo.com.do/imgs/logo.png" group-title="REPUBLICA DOMINICANA", TVO Canal 49 || REPUBLICA DOMINICANA
https://rctvhd.net:8081/tvoromanalive/index.m3u8
#EXTINF:-1 tvg-id="DO | TV 10 San Juan" tvg-name="DO | TV 10 San Juan" tvg-logo="https://tv10sanjuan.com.do/wp-content/uploads/2020/09/LOGO-TV10-unico-1.png" group-title="REPUBLICA DOMINICANA", TV 10 San Juan || REPUBLICA DOMINICANA
https://cloud2.streaminglivehd.com:1936/8024/8024/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Morro TV" tvg-name="DO | Morro TV" tvg-logo="https://pbs.twimg.com/profile_images/1508441196317794306/nfsXucqo_400x400.jpg" group-title="REPUBLICA DOMINICANA", Morro TV || REPUBLICA DOMINICANA
https://cloudflare.streamgato.us:3044/live/morrotvlive.m3u8
#EXTINF:-1 tvg-id="DO | Makao TV" tvg-name="DO | Makao TV" tvg-logo="https://makaoradio.com/wp-content/uploads/2021/06/makao_new_332.png" group-title="REPUBLICA DOMINICANA", Makao TV || REPUBLICA DOMINICANA
https://live.obslivestream.com/makaomux/index.m3u8
#EXTINF:-1 tvg-id="DO | TV Plata" tvg-name="DO | TV Plata" tvg-logo="https://canalesdominicanos.live/template/images/radios/tv_plata_canal_3.jpg" group-title="REPUBLICA DOMINICANA", TV Plata || REPUBLICA DOMINICANA
https://ss9.domint.net:3032/tvp_str/tvp2111/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Musavisión" tvg-name="DO | Musavisión" tvg-logo="https://musavision.com/wp-content/uploads/2023/03/musavision-logo-2.png" group-title="REPUBLICA DOMINICANA", Musavisión || REPUBLICA DOMINICANA
https://soportedvb.click:3827/live/musavisiontvlive.m3u8
#EXTINF:-1 tvg-id="DO | Telecontacto" tvg-name="DO | Telecontacto" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLSd3ktMHGu7sx029OZRAKLzzFmpqtkIBmOiUtw4=s900-c-k-c0x00ffffff-no-rj" group-title="REPUBLICA DOMINICANA", Telecontacto || REPUBLICA DOMINICANA
https://vdo1.streamgato.us:3578/live/telecontactohdlive.m3u8
#EXTINF:-1 tvg-id="DO | Romana TV" tvg-name="DO | Romana TV" tvg-logo="https://photos.live-tv-channels.org/tv-logo/do-romana-tv-2379.jpg" group-title="REPUBLICA DOMINICANA", Romana TV || REPUBLICA DOMINICANA
https://videoserver.tmcreativos.com:19360/cvmhbyrcat/cvmhbyrcat.m3u8
#EXTINF:-1 tvg-id="DO | Alegre TV" tvg-name="DO | Alegre TV" tvg-logo="https://www.vivalivetv.com/public/files/shows/0/1/2852-294x165-FFFFFF.jpg" group-title="REPUBLICA DOMINICANA", Alegre TV || REPUBLICA DOMINICANA
https://vsrv2.az-streamingserver.com:3149/live/alegretvlive.m3u8
#EXTINF:-1 tvg-id="DO | La Ruta TV" tvg-name="DO | La Ruta TV" tvg-logo="https://yt3.ggpht.com/ZukRlhCuw6HbWdDrEqAHsoqTA6Hjjl_hWkNDlOcAOAzArBalOnV43dU0nL1s3gd6RlAb2KTFOQ=s48-c-k-c0x00ffffff-no-rj" group-title="REPUBLICA DOMINICANA", La Ruta TV || REPUBLICA DOMINICANA
https://vsrv2.az-streamingserver.com:3983/live/larutatvlive.m3u8
#EXTINF:-1 tvg-id="DO | Luna TV Canal 53" tvg-name="DO | Luna TV Canal 53" tvg-logo="https://lunatvdo.b-cdn.net/wp/wp-content/uploads/2022/06/logo_new1-300x117.png" group-title="REPUBLICA DOMINICANA", Luna TV Canal 53 || REPUBLICA DOMINICANA
https://streaming.ath.cx:1936/lunatv/lunatv/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Orbit TV" tvg-name="DO | Orbit TV" tvg-logo="https://orbitcable.com.do/wp-content/uploads/2022/05/logotipo-orbit-01-1-e1653590327142.png" group-title="REPUBLICA DOMINICANA", Orbit TV || REPUBLICA DOMINICANA
https://ss3.domint.net:3134/otv_str/orbittv/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Telemilenio" tvg-name="DO | Telemilenio" tvg-logo="https://www.vivalivetv.com/public/files/shows/0/1/1647-640x360-FFFFFF.jpg" group-title="REPUBLICA DOMINICANA", Telemilenio || REPUBLICA DOMINICANA
https://cm.hostlagarto.com:4445/Telemilenio/Telemilenio.myStream/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Vegavision Canal 18" tvg-name="DO | Vegavision Canal 18" tvg-logo="https://canalesdominicanos.live/template/images/radios/vegavision-canal-18.jpg" group-title="REPUBLICA DOMINICANA", Vegavision Canal 18 || REPUBLICA DOMINICANA
https://cdn4.hostlagarto.com:8081/static/canal18hd/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Bajo Techo TV" tvg-name="DO | Bajo Techo TV" tvg-logo="https://yt3.googleusercontent.com/ytc/AL5GRJUsTZhKSXMm95tdLQTmspPc-r6sPuH6Rn72sixXAw=s900-c-k-c0x00ffffff-no-rj" group-title="REPUBLICA DOMINICANA", Bajo Techo TV || REPUBLICA DOMINICANA
https://cdn4.hostlagarto.com:8081/static/bajotechotv/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Delta TV" tvg-name="DO | Delta TV" tvg-logo="https://www.deltatv50.com/wp-content/uploads/2022/11/cropped-DELTA-TV-1536x1437.png" group-title="REPUBLICA DOMINICANA", Delta TV || REPUBLICA DOMINICANA
https://cm.hostlagarto.com:4445/deltatv/deltatv50.myStream/playlist.m3u8?DVR
#EXTINF:-1 tvg-id="DO | Ready TV" tvg-name="DO | Ready TV" tvg-logo="https://readytelevision.com/wp-content/uploads/2020/09/Readytelevision-small.png" group-title="REPUBLICA DOMINICANA", Ready TV || REPUBLICA DOMINICANA
https://streaming.telecablecentral.com.do/ReadyTV/ReadyHD/playlist.m3u8?DVR
#EXTINF:-1 tvg-id="DO | Ecovisión" tvg-name="DO | Ecovisión" tvg-logo="https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/af/14/cb/af14cb9a-a6ac-2da9-8a73-2b17a450b0eb/AppIcon-1x_U007emarketing-0-7-85-220.jpeg/1200x630wa.png" group-title="REPUBLICA DOMINICANA", Ecovisión || REPUBLICA DOMINICANA
https://vdo1.streamgato.us:3014/live/ecovisionlive.m3u8
#EXTINF:-1 tvg-id="DO | Maimon TV" tvg-name="DO | Maimon TV" tvg-logo="https://maimontv.com/images/maimon_logo_clear_lg.png" group-title="REPUBLICA DOMINICANA", Maimon TV || REPUBLICA DOMINICANA
https://ss3.domint.net:3138/mtv_str/maimon/playlist.m3u8
#EXTINF:-1 tvg-id="DO | TV Higüey" tvg-name="DO | TV Higüey" tvg-logo="https://tvhigueydigital.com/wp-content/uploads/2021/08/preloader.png" group-title="REPUBLICA DOMINICANA", TV Higüey || REPUBLICA DOMINICANA
https://vdo1.streamgato.us:3046/live/tvhigueycanal12live.m3u8
#EXTINF:-1 tvg-id="DO | Enntivision TV" tvg-name="DO | Enntivision TV" tvg-logo="https://yt3.googleusercontent.com/32f_5fUtqYWtAmgR-WYVRfUs_M1SHTxE33Rzypa01Y4dggQ2Is4l3PJSQ_i2N3r9BvUEidejZg=s900-c-k-c0x00ffffff-no-rj" group-title="REPUBLICA DOMINICANA", Enntivision TV || REPUBLICA DOMINICANA
https://cdn4.hostlagarto.com:8081/static/enntivisiontv/playlist.m3u8?DVR
#EXTINF:-1 tvg-id="DO | Bonches TV" tvg-name="DO | Bonches TV" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRql_yYrihFb2ifxgAKGPJEpT-ioQi3-Sx0zzIs4kFi_kq8hijrtauTQDe4cJA0OHunfJI&usqp=CAU" group-title="REPUBLICA DOMINICANA", Bonches TV || REPUBLICA DOMINICANA
https://ss5.domint.net:3172/btv_str/bonchestv/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Constanza TV" tvg-name="DO | Constanza TV" tvg-logo="https://www.constanzatv.com/images/contanzatv_web.png" group-title="REPUBLICA DOMINICANA", Constanza TV || REPUBLICA DOMINICANA
https://ss9.domint.net:3026/ctv8_str/contanzatv/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Roca Visión" tvg-name="DO | Roca Visión" tvg-logo="https://play-lh.googleusercontent.com/dsvf-PoHk6sbLCEGxTQ8eF97c1z246rUIAgIYFhFORX2NBmyBDI1Yh0yxYo_oBY-oN2X=w240-h480-rw" group-title="REPUBLICA DOMINICANA", Roca Visión || REPUBLICA DOMINICANA
https://cm.hostlagarto.com/rocavisiondominicana/Dominicanahd.myStream/chunks.m3u8
#EXTINF:-1 tvg-id="DO | Nítida TV" tvg-name="DO | Nítida TV" tvg-logo="https://canalesdominicanos.live/template/images/radios/nitida-tv.jpg" group-title="REPUBLICA DOMINICANA", Nítida TV || REPUBLICA DOMINICANA
https://live.teledomdr.com:3131/live/nitidatvlive.m3u8
#EXTINF:-1 tvg-id="DO | Tu Kosita TV" tvg-name="DO | Tu Kosita TV" tvg-logo="https://tukosita.com/wp-content/uploads/2023/01/cover.png" group-title="REPUBLICA DOMINICANA", Tu Kosita TV || REPUBLICA DOMINICANA
https://ss5.domint.net:3004/tktv_str/tukositatv/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Canal DTV" tvg-name="DO | Canal DTV" tvg-logo="https://4.bp.blogspot.com/-nhpRS1doQRI/XbhaHAcFiuI/AAAAAAAADpE/Iy1prbxqYJ0EMdGGIbnWZZmR2BhjSNxWACK4BGAYYCw/s1600/CANAL%2BDTV%2BLOGO%2BNUEVO.png" group-title="REPUBLICA DOMINICANA", Canal DTV || REPUBLICA DOMINICANA
https://emisoras.hn:8081/dtv/index.m3u8
#EXTINF:-1 tvg-id="DO | TV Quisqueya" tvg-name="DO | TV Quisqueya" tvg-logo="http://www.tvquisqueya.com/wp-content/uploads/2021/05/LOGO-248X100.png" group-title="REPUBLICA DOMINICANA", TV Quisqueya || REPUBLICA DOMINICANA
https://rctvhd.net:8081/tvquisqueyahd/index.m3u8
#EXTINF:-1 tvg-id="DO | Latina TV Internacional" tvg-name="DO | Latina TV Internacional" tvg-logo="https://latinatvinternacional.com/images/latina_tv_int_web.png" group-title="REPUBLICA DOMINICANA", Latina TV Internacional || REPUBLICA DOMINICANA
https://ss3.domint.net:3156/ltv_str/latinatvint/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Teleoriental TV" tvg-name="DO | Teleoriental TV" tvg-logo="https://www.vivalivetv.com/public/files/shows/0/1/2244-800x450-FFFFFF.jpg" group-title="REPUBLICA DOMINICANA", Teleoriental TV || REPUBLICA DOMINICANA
https://vdo1.streamgato.us:3592/live/teleorientaldigitallive.m3u8?DVR
#EXTINF:-1 tvg-id="DO | Señales TV" tvg-name="DO | Señales TV" tvg-logo="https://senalestv.com/wp-content/themes/senalestv/wp/inc/images/logos/logo-senalestv.png" group-title="REPUBLICA DOMINICANA", Señales TV || REPUBLICA DOMINICANA
https://live.teledom.info:4000/live/senalestvlive.m3u8
#EXTINF:-1 tvg-id="DO | Opción TV" tvg-name="DO | Opción TV" tvg-logo="https://canalesdominicanos.live/template/images/radios/opcion-tv.jpg" group-title="REPUBLICA DOMINICANA", Opción TV || REPUBLICA DOMINICANA
https://5790d294af2dc.streamlock.net/8066/8066/playlist.m3u8
#EXTINF:-1 tvg-id="DO | TV Exitos" tvg-name="DO | TV Exitos" tvg-logo="https://image.roku.com/developer_channels/prod/071ae958bc1c7efb9e1c771865d5d4e3c1ed4ef170c77b81c8bde250ba37a4aa.png" group-title="REPUBLICA DOMINICANA", TV Exitos || REPUBLICA DOMINICANA
https://vdo1.streamgato.us:3359/live/tvexitoslive.m3u8
#EXTINF:-1 tvg-id="DO | TDN Caribbean" tvg-name="DO | TDN Caribbean" tvg-logo="https://pbs.twimg.com/media/Fr3W3voXgAAIVhw?format=png&name=small" group-title="REPUBLICA DOMINICANA", TDN Caribbean || REPUBLICA DOMINICANA
https://castv10.plugstreaming.com:19360/tdncaribbean/tdncaribbean.m3u8
#EXTINF:-1 tvg-id="DO | TV Visión" tvg-name="DO | TV Visión" tvg-logo="https://pbs.twimg.com/media/Fr3bCYVWAAgBuvz?format=png&name=240x240" group-title="REPUBLICA DOMINICANA", TV Visión || REPUBLICA DOMINICANA
https://cloudflare.streamgato.us:3691/live/tvvisionlive.m3u8
#EXTINF:-1 tvg-id="DO | Villa Altagracia TV" tvg-name="DO | Villa Altagracia TV" tvg-logo="https://canalesdominicanos.live/template/images/radios/villa-altagracia-tv.jpeg" group-title="REPUBLICA DOMINICANA", Villa Altagracia TV || REPUBLICA DOMINICANA
https://inliveserver.com:1936/10016/10016/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Crom TV" tvg-name="DO | Crom TV" tvg-logo="https://canalesdominicanos.live/template/images/radios/crom-tv-el-canal-del-siglo.png" group-title="REPUBLICA DOMINICANA", Crom TV || REPUBLICA DOMINICANA
https://cdn4.hostlagarto.com:8081/static/cromtv/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Policía TV" tvg-name="DO | Policía TV" tvg-logo="https://canalesdominicanos.live/template/images/radios/policia-tv.jpg" group-title="REPUBLICA DOMINICANA", Policía TV || REPUBLICA DOMINICANA
https://cdn2.streamgato.us/policiard/policiard/playlist.m3u8
#EXTINF:-1 tvg-id="DO | TV Daja" tvg-name="DO | TV Daja" tvg-logo="https://dajatv.streamgato.us/img/load.jpg" group-title="REPUBLICA DOMINICANA", TV Daja || REPUBLICA DOMINICANA
https://cm.hostlagarto.com:4445/Dajatv/Dajatv.myStream/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Jazmin TV" tvg-name="DO | Jazmin TV" tvg-logo="https://canalesdominicanos.live/template/images/radios/jazmin-tv.png" group-title="REPUBLICA DOMINICANA", Jazmin TV || REPUBLICA DOMINICANA
https://tvdatta.com:3957/hybrid/play.m3u8
#EXTINF:-1 tvg-id="DO | Telever" tvg-name="DO | Telever" tvg-logo="https://telever.com.do/wp-content/uploads/2021/04/cropped-logotelever.png" group-title="REPUBLICA DOMINICANA", Telever || REPUBLICA DOMINICANA
https://servilive.com:3758/live/televerlive.m3u8
#EXTINF:-1 tvg-id="DO | Urbancrist TV" tvg-name="DO | Urbancrist TV" tvg-logo="https://dominicanchannels.com/wp-content/uploads/2017/10/WhatsApp-Image-2020-05-28-at-10.35.45-PM-1-300x276.jpeg" group-title="REPUBLICA DOMINICANA", Urbancrist TV || REPUBLICA DOMINICANA
https://5790d294af2dc.streamlock.net/8160/8160/playlist.m3u8?DVR
#EXTINF:-1 tvg-id="DO | Imagen Universal TV" tvg-name="DO | Imagen Universal TV" tvg-logo="https://imagenuniversaltv.com/wp-content/uploads/2022/03/Logo-imagen-Universal-TV-Horizontal-512-x-99.png" group-title="REPUBLICA DOMINICANA", Imagen Universal TV || REPUBLICA DOMINICANA
https://imagenuniversaltv.net:3771/live/iutvlive.m3u8
#EXTINF:-1 tvg-id="DO | Hilando Fino TV" tvg-name="DO | Hilando Fino TV" tvg-logo="http://www.hilandofinotv.com/wp-content/uploads/2020/07/cropped-Imagen1..png" group-title="REPUBLICA DOMINICANA", Hilando Fino TV || REPUBLICA DOMINICANA
https://pop-ts.iptv-global.net/HilandoFino/index.m3u8
#EXTINF:-1 tvg-id="DO | Bonao TV" tvg-name="DO | Bonao TV" tvg-logo="https://www.bonaotv.com/images/bonao_logo_pb_500sm.png" group-title="REPUBLICA DOMINICANA", Bonao TV || REPUBLICA DOMINICANA
https://ss5.domint.net:3026/btv_str/bonao/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Vallevisión" tvg-name="DO | Vallevisión" tvg-logo="https://vallevision.com.do/wp-content/uploads/2020/09/Vallevision-logo200.png" group-title="REPUBLICA DOMINICANA", Vallevisión || REPUBLICA DOMINICANA
https://streaming.telecablecentral.com.do/Vallevision/ValleHD/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Telecanal 12" tvg-name="DO | Telecanal 12" tvg-logo="https://www.vivalivetv.com/public/files/shows/0/1/1662-800x450-FFFFFF.jpg" group-title="REPUBLICA DOMINICANA", Telecanal 12 || REPUBLICA DOMINICANA
https://cdn4.hostlagarto.com:8081/static/telecanal12/playlist.m3u8?DVR
#EXTINF:-1 tvg-id="DO | Cotunanama TV 36" tvg-name="DO | Cotunanama TV 36" tvg-logo="https://cotubanamadigital.net/wp-content/uploads/2023/01/cotubanamatv.png" group-title="REPUBLICA DOMINICANA", Cotunanama TV 36 || REPUBLICA DOMINICANA
https://cdn4.hostlagarto.com:8081/static/cotubanamatv/playlist.m3u8
#EXTINF:-1 tvg-id="DO | TRA Noticias" tvg-name="DO | TRA Noticias" tvg-logo="https://teleradioamerica.com/wp-content/themes/tra2017/imagenes/logo2023.png" group-title="REPUBLICA DOMINICANA", TRA Noticias || REPUBLICA DOMINICANA
https://live.teledom.info:3625/live/tra45live.m3u8
#EXTINF:-1 tvg-id="DO | Buena TV" tvg-name="DO | Buena TV" tvg-logo="https://pbs.twimg.com/media/Fr4MryZWIAMLXPf?format=png&name=small" group-title="REPUBLICA DOMINICANA", Buena TV || REPUBLICA DOMINICANA
https://cdn4.hostlagarto.com:8081/static/buenatv/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Digital 809 TV" tvg-name="DO | Digital 809 TV" tvg-logo="https://digital809tv.com/wp-content/uploads/2019/02/cropped-DIGITAL809TV-teless-245-1.png" group-title="REPUBLICA DOMINICANA", Digital 809 TV || REPUBLICA DOMINICANA
https://inliveserver.com:1936/digital809tv/digital809tv/playlist.m3u8
#EXTINF:-1 tvg-id="DO | HMTV Canal 33" tvg-name="DO | HMTV Canal 33" tvg-logo="https://1.bp.blogspot.com/-Qy2L6hvtw0A/XxOKynZNkfI/AAAAAAAAKRw/JLV3iuecs5sbafhXGsPxrxYg8PXnynbmwCLcBGAsYHQ/s1600/hmtv.png" group-title="REPUBLICA DOMINICANA", HMTV Canal 33 || REPUBLICA DOMINICANA
https://cm.hostlagarto.com:4445/Hmtv/hmtv.myStream/playlist.m3u8
#EXTINF:-1 tvg-id="DO | Megacine TV" tvg-name="DO | Megacine TV" tvg-logo="https://canalesdominicanos.live/template/images/radios/mega-cine-tv.png" group-title="REPUBLICA DOMINICANA", Megacine TV || REPUBLICA DOMINICANA
https://cloudflare.streamgato.us:3125/live/megacinetvlive.m3u8
#EXTINF:-1 tvg-id="DO | Dajabon TV Canal 6" tvg-name="DO | Dajabon TV Canal 6" tvg-logo="https://directostv.teleame.com/wp-content/uploads/2017/10/canal6rd.png" group-title="REPUBLICA DOMINICANA", Dajabon TV Canal 6 || REPUBLICA DOMINICANA
https://soportedvb.click:3504/live/dajabontvlive.m3u8
#EXTINF:-1 tvg-id="DO | Unción TV" tvg-name="DO | Unción TV" tvg-logo="https://canalesdominicanos.live/template/images/radios/uncion-tv.png" group-title="REPUBLICA DOMINICANA", Unción TV || REPUBLICA DOMINICANA
https://livemediacp.com:1936/8064/8064/playlist.m3u8
#EXTINF:-1 tvg-id="MX | Azteca Internacional" tvg-name="MX | Azteca Internacional" tvg-logo="https://e00-elmundo.uecdn.es/television/programacion-tv/img/programas/37/8247.png" group-title="MEXICO", Azteca Internacional || MÉXICO
https://dujft6o2exhah.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-0lvc4h1b07aou/mun.m3u8?ads.device_did=%7BPSID%7D&ads.device_dnt=%7BTARGETOPT%7D&ads.app_domain=%7BAPP_DOMAIN%7D&ads.app_name=%7BAPP_NAME%7D&ads.consent=%7BTC_STRING%7D
#EXTINF:-1 tvg-id="MX | Las Estrellas" tvg-name="MX | Las Estrellas" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Las_Estrellas.svg/180px-Las_Estrellas.svg.png" group-title="MEXICO", Las Estrellas
http://45.228.234.77:3340/play/lasestrellas/index.m3u8
#EXTINF:-1 tvg-id="MX | Canal 5" tvg-name="MX | Canal 5" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Canal_5_Mexico_logo_2014.svg/120px-Canal_5_Mexico_logo_2014.svg.png" group-title="MEXICO", Canal 5 || MÉXICO
https://v3.playerlatino.live/stream/m3u8/14
#EXTINF:-1 tvg-id="MX | Multimedios Televisión Canal 6" tvg-name="MX | Multimedios Televisión Canal 6" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Multimedios_Canal_Seis_Logo.svg/150px-Multimedios_Canal_Seis_Logo.svg.png" group-title="MEXICO", Multimedios Televisión Canal 6 || MÉXICO
http://45.90.105.74:25461/JW2WBOndemand/d8rQEH2h4E/37796
#EXTINF:-1 tvg-id="MX | Azteca 7" tvg-name="MX | Azteca 7" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Logo_Azteca_7_2011.svg/150px-Logo_Azteca_7_2011.svg.png" group-title="MEXICO", Azteca 7 || MÉXICO
https://v3.playerlatino.live/stream/m3u8/5
#EXTINF:-1 tvg-id="MX | Imagen Televisión" tvg-name="MX | Imagen Televisión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Logo_Imagen_Televisi%C3%B3n_2016.png/140px-Logo_Imagen_Televisi%C3%B3n_2016.png" group-title="MEXICO", Imagen Televisión || MÉXICO
https://v3.playerlatino.live/stream/m3u8/341
#EXTINF:-1 tvg-id="MX | Nu9ve" tvg-name="MX | Nu9ve" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/9_de_mexico-mediano.png" group-title="MEXICO", Nu9ve || MÉXICO
http://45.90.105.74:25461/JW2WBOndemand/d8rQEH2h4E/63805
#EXTINF:-1 tvg-id="MX | A Más" tvg-name="MX | A Más" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/A%2B_2021.svg/200px-A%2B_2021.svg.png" group-title="MEXICO", A Más || MÉXICO
https://v3.playerlatino.live/stream/m3u8/406
#EXTINF:-1 tvg-id="MX | Unicable" tvg-name="MX | Unicable" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Unicable_logo.svg/100px-Unicable_logo.svg.png" group-title="MEXICO", Unicable || MÉXICO
http://45.228.234.77:3340/play/unicable/index.m3u8
#EXTINF:-1 tvg-id="MX | ADN 40" tvg-name="MX | ADN 40" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Adn40_2022.png/245px-Adn40_2022.png" group-title="MEXICO", ADN 40 || MÉXICO
https://mdstrm.com/live-stream-playlist/60b578b060947317de7b57ac.m3u8
#EXTINF:-1 tvg-id="MX | N+ Media" tvg-name="MX | N+ Media" tvg-logo="https://img.asmedia.epimg.net/resizer/__0kSWQYeMV8ePRtOMVM_gEfza0=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/EW3U7NAIBNCOZCYGAGD3NYY54A.jpg" group-title="MEXICO", N+ Media || MÉXICO
https://channel04-notusa.akamaized.net/hls/live/2029754/event01/index_4.m3u8
#EXTINF:-1 tvg-id="MX | Canal 11" tvg-name="MX | Canal 11" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_Actual_Canal_Once.png/200px-Logo_Actual_Canal_Once.png" group-title="MEXICO", Canal 11 || MÉXICO
https://v3.playerlatino.live/stream/m3u8/15
#EXTINF:-1 tvg-id="MX | Milenio Televisión" tvg-name="MX | Milenio Televisión" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Milenio_Television.png/150px-Milenio_Television.png" group-title="MEXICO", Milenio Televisión || MÉXICO
http://45.90.105.74:25461/JW2WBOndemand/d8rQEH2h4E/30358
#EXTINF:-1 tvg-id="MX | TV Cuatro de Guanajuato" tvg-name="MX | TV Cuatro de Guanajuato" tvg-logo="https://www.tvcuatro.com/logo%201024.png" group-title="MEXICO", TV Cuatro de Guanajuato || MÉXICO
https://5f1af61612fb5.streamlock.net/tv4/smil:tv4.smil/playlist.m3u8
#EXTINF:-1 tvg-id="MX | Capital 21" tvg-name="MX | Capital 21" tvg-logo="https://directostv.teleame.com/wp-content/uploads/2017/10/Capital-21-TV-en-vivo-Online.png" group-title="MEXICO", Capital 21 || MÉXICO
https://video.cdmx.gob.mx/livestream/stream.m3u8
#EXTINF:-1 tvg-id="PR | TeleOnce" tvg-name="PR | TeleOnce" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Teleonce_Logo_2021.png/220px-Teleonce_Logo_2021.png" group-title="PUERTO RICO", TeleOnce || PUERTO RICO
https://univision-live.cdn.vustreams.com/live/ce88b839-6376-4494-a2ee-83d66bc7cfc1/live.isml/ce88b839-6376-4494-a2ee-83d66bc7cfc1.m3u8
#EXTINF:-1 tvg-id="PR | Telemundo" tvg-name="PR | Telemundo" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/telemundo-mediano.png" group-title="PUERTO RICO", Telemundo || PUERTO RICO
https://nbculocallive.akamaized.net/hls/live/2037499/puertorico/stream1/master_1080.m3u8
#EXTINF:-1 tvg-id="USA | Stream Uno TV" tvg-name="USA | Stream Uno TV" tvg-logo="https://play-lh.googleusercontent.com/gBsGCIfU_w3CAVGpDoruLQjppjeRAJQoKja0p1kciAGdWHMudwjWfwUvN_3iNdP8BCs" group-title="ESTADOS UNIDOS DE AMÉRICA", Stream Uno TV || ESTADOS UNIDOS DE AMÉRICA
https://vsrv2.az-streamingserver.com:3201/live/streamunotvlive.m3u8
#EXTINF:-1 tvg-id="USA | Tribuna TV" tvg-name="USA | Tribuna TV" tvg-logo="https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/9f/4c/f9/9f4cf9e4-8bc2-5ddd-e8be-057e688065e5/mzl.ztmkjvqb.jpg/230x0w.webp" group-title="ESTADOS UNIDOS DE AMÉRICA", Tribuna TV || ESTADOS UNIDOS DE AMÉRICA
https://cm.hostlagarto.com/TRIBUNA-TV/tribuna.myStream/chunks.m3u8
#EXTINF:-1 tvg-id="USA | Mun2 TV" tvg-name="USA | Mun2 TV" tvg-logo="https://www.vivalivetv.com/public/files/shows/0/1/2122-294x165-FFFFFF.jpg" group-title="ESTADOS UNIDOS DE AMÉRICA", Mun2 TV || ESTADOS UNIDOS DE AMÉRICA
https://play.amelbasoluciones.co:3309/live/mun2tvlive.m3u8
#EXTINF:-1 tvg-id="USA | Estrella TV" tvg-name="USA | Estrella TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Estrella_TV_Logo_2020.png/150px-Estrella_TV_Logo_2020.png" group-title="ESTADOS UNIDOS DE AMÉRICA", Estrella TV || ESTADOS UNIDOS DE AMÉRICA
https://estrellatv-oando.amagi.tv/playlistR720P.m3u8
#EXTINF:-1 tvg-id="USA | El Venezolano TV" tvg-name="USA | El Venezolano TV" tvg-logo="https://yt3.googleusercontent.com/RK7y5CEazbPi7q0kWzFo9yxCUZOAkF8qvHm-CBVMuRXlFj6ExZv_YH-Kde4Nxf8no3PxGqMDrQ=s88-c-k-c0x00ffffff-no-rj" group-title="ESTADOS UNIDOS DE AMÉRICA", El Venezolano TV || ESTADOS UNIDOS DE AMÉRICA
https://streannliveevtv.cachefly.net/Protected/sp=1;dirmatch=true/3be25dc13406bf70ff0208230e6fa803b88b95013fad257c025e481e2be3e214/evtv1/evtv1/playlist.m3u8
#EXTINF:-1 tvg-id="USA | Visión Global TV" tvg-name="USA | Visión Global TV" tvg-logo="https://pbs.twimg.com/profile_images/1271993632573267969/iebucZUM_400x400.jpg" group-title="ESTADOS UNIDOS DE AMÉRICA", Visión Global TV || ESTADOS UNIDOS DE AMÉRICA
https://stream.visionglobaltv.net:1936/visionglobal/visionglobal/playlist.m3u8
#EXTINF:-1 tvg-id="USA | TV Hispanic" tvg-name="USA | TV Hispanic" tvg-logo="https://yt3.googleusercontent.com/bHSIL9B_UGJoqzQV5aRgQBXTIqOaxhFc1CjjfLVundh5Jt8BC_VZU1yjukEemoZonaNz-tbDBQ=s900-c-k-c0x00ffffff-no-rj" group-title="ESTADOS UNIDOS DE AMÉRICA", TV Hispanic || ESTADOS UNIDOS DE AMÉRICA
https://livetv.305streamhd.com:3504/live/tvhispaniclive.m3u8
#EXTINF:-1 tvg-id="USA | CNBC" tvg-name="USA | CNBC" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CNBC_logo.svg/125px-CNBC_logo.svg.png" group-title="ESTADOS UNIDOS DE AMÉRICA", CNBC || ESTADOS UNIDOS DE AMÉRICA
https://cdn1.eco.cdn.moderntv.eu/econocable/stream/CNBC/40-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DCNBC_stream_0b&_cdn_session=1359494531&_cdn_timestamp=1699115003&_cdn_token=a68f30c24e1536b72932486c0cf5370bf4e06247
#EXTINF:-1 tvg-id="USA | PIX11 News" tvg-name="USA | PIX11 News" tvg-logo="https://yt3.googleusercontent.com/ytc/AL5GRJX9UNIXSTitdn0NXKNIqp7iyOgYCym5h6OTMmD5hT0=s88-c-k-c0x00ffffff-no-rj" group-title="ESTADOS UNIDOS DE AMÉRICA", PIX11 News || ESTADOS UNIDOS DE AMÉRICA
http://190.122.96.187:8888/http/005
#EXTINF:-1 tvg-id="ES | TVE" tvg-name="ES | TVE" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Logo_TVE-Internacional.svg/150px-Logo_TVE-Internacional.svg.png" group-title="INTERNACIONALES", TVE || ESPAÑA
http://45.5.119.202:54321/play/a05u/index.m3u8
#EXTINF:-1 tvg-id="ES | Star TVE HD" tvg-name="ES | Star TVE HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Star-TVE-logo.png/200px-Star-TVE-logo.png" group-title="ESPAÑA", Star TVE HD || ESPAÑA
http://181.189.243.254:8000/play/a0qf/index.m3u8
#EXTINF:-1 tvg-id="ES | La 1" tvg-name="ES | La 1" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Logo_TVE-1.svg/125px-Logo_TVE-1.svg.png" group-title="ESPAÑA", La 1 || ESPAÑA
https://rtvelivestream.akamaized.net/rtvesec/la1/la1_main_720.m3u8
#EXTINF:-1 tvg-id="ES | La 2" tvg-name="ES | La 2" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Logo_TVE-2.svg/800px-Logo_TVE-2.svg.png" group-title="ESPAÑA", La 2 || ESPAÑA
https://spa-ha-p004.cdn.masmediatv.es/SVoriginOperatorEdge/smil:2_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Antena 3" tvg-name="ES | Antena 3" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Antena_3_%282017%29.svg/125px-Antena_3_%282017%29.svg.png" group-title="ESPAÑA", Antena 3 || ESPAÑA
https://cdn1.eco.cdn.moderntv.eu/econocable/stream/CNBC/40-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DCNBC_stream_0b&_cdn_session=1359494531&_cdn_timestamp=1699115003&_cdn_token=a68f30c24e1536b72932486c0cf5370bf4e06247
#EXTINF:-1 tvg-id="ES | Cuatro" tvg-name="ES | Cuatro" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Cuatro.svg/250px-Cuatro.svg.png" group-title="ESPAÑA", Cuatro || ESPAÑA
https://spa-ha-p004.cdn.masmediatv.es/SVoriginOperatorEdge/smil:9_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | La Sexta" tvg-name="ES | La Sexta" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/La_Sexta_%28A3M%29.svg/75px-La_Sexta_%28A3M%29.svg.png" group-title="ESPAÑA", La Sexta || ESPAÑA
https://nodep002.service.openstream.es/SVoriginOperatorEdge2/smil:11_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Trece" tvg-name="ES | Trece" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Trece.svg/250px-Trece.svg.png" group-title="ESPAÑA", Trece || ESPAÑA
https://nodep002.service.openstream.es/SVoriginOperatorEdge2/smil:24_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Ten TV" tvg-name="ES | Ten TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/TenTV.png/170px-TenTV.png" group-title="ESPAÑA", Ten TV || ESPAÑA
https://nodep002.service.openstream.es/SVoriginOperatorEdge2/smil:26_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Neox" tvg-name="ES | Neox" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Neox_2023_logo.svg/150px-Neox_2023_logo.svg.png" group-title="ESPAÑA", Neox || ESPAÑA
https://spa-ha-p004.cdn.masmediatv.es/SVoriginOperatorEdge/smil:13_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Nova" tvg-name="ES | Nova" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Nova.svg/200px-Nova.svg.png" group-title="ESPAÑA", Nova || ESPAÑA
https://spa-ha-p004.cdn.masmediatv.es/SVoriginOperatorEdge/smil:14_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Factoría de Ficción" tvg-name="ES | Factoría de Ficción" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Factor%C3%ADa_de_Ficci%C3%B3n.svg/125px-Factor%C3%ADa_de_Ficci%C3%B3n.svg.png" group-title="ESPAÑA", FDF || ESPAÑA
https://spa-ha-p004.cdn.masmediatv.es/SVoriginOperatorEdge/smil:16_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | DKISS" tvg-name="ES | DKISS" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/DKISS_2019_logo.svg/250px-DKISS_2019_logo.svg.png" group-title="ESPAÑA", DKISS || ESPAÑA
https://nodep002.service.openstream.es/SVoriginOperatorEdge2/smil:25_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Be Mad" tvg-name="ES | Be Mad" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Be_Mad_TV.svg/125px-Be_Mad_TV.svg.png" group-title="ESPAÑA", Be Mad || ESPAÑA
https://spa-ha-p004.cdn.masmediatv.es/SVoriginOperatorEdge/smil:20_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Mega" tvg-name="ES | Mega" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/MEGA.svg/200px-MEGA.svg.png" group-title="ESPAÑA", Mega || ESPAÑA
https://spa-ha-p004.cdn.masmediatv.es/SVoriginOperatorEdge/smil:15_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | CMM TV" tvg-name="ES | CMM TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/CMMedia.svg/125px-CMMedia.svg.png" group-title="ESPAÑA", CMM TV || ESPAÑA
https://nodep002.service.openstream.es/SVoriginOperatorEdge2/smil:31_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Telemadrid" tvg-name="ES | Telemadrid" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/TeleMadrid.svg/245px-TeleMadrid.svg.png" group-title="ESPAÑA", Telemadrid || ESPAÑA
https://nodep002.service.openstream.es/SVoriginOperatorEdge2/smil:32_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Telemadrid Internacional" tvg-name="ES | Telemadrid Internacional" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/TeleMadrid.svg/245px-TeleMadrid.svg.png" group-title="ESPAÑA", Telemadrid Internacional || ESPAÑA
https://telemadrid-23.secure2.footprint.net/bitrate_3.m3u8
#EXTINF:-1 tvg-id="ES | Divinity" tvg-name="ES | Divinity" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Divinity.svg/125px-Divinity.svg.png" group-title="ESPAÑA", Divinity || ESPAÑA
https://spa-ha-p004.cdn.masmediatv.es/SVoriginOperatorEdge/smil:18_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Energy" tvg-name="ES | Energy" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Energy.svg/125px-Energy.svg.png" group-title="ESPAÑA", Energy || ESPAÑA
https://spa-ha-p004.cdn.masmediatv.es/SVoriginOperatorEdge/smil:19_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Torole TV" tvg-name="ES | Torole TV" tvg-logo="https://play-lh.googleusercontent.com/Y9je-1L9KIW0EWsb3Puk_03a4FBZfM2rP_fHXpiiTz7U1nmrwLQ9ATpCYFwSPRO9FQ=w240-h480-rw" group-title="ESPAÑA", Torole TV || ESPAÑA
https://nodep002.service.openstream.es/SVoriginOperatorEdge2/smil:49_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Canal Extremadura" tvg-name="ES | Canal Extremadura" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/CEXMA_new.png/125px-CEXMA_new.png" group-title="ESPAÑA", Canal Extremadura || ESPAÑA
https://nodep002.service.openstream.es/SVoriginOperatorEdge2/smil:34_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Canal Sur 1" tvg-name="ES | Canal Sur 1" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Canal_Sur_Televisi%C3%B3n_2011-2017_logo.svg/120px-Canal_Sur_Televisi%C3%B3n_2011-2017_logo.svg.png" group-title="ESPAÑA", Canal Sur 1 || ESPAÑA
https://nodep002.service.openstream.es/SVoriginOperatorEdge2/smil:29_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | TV Galicia América" tvg-name="ES | TV Galicia América" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Televisi%C3%B3n_de_Galicia_Logo.svg/75px-Televisi%C3%B3n_de_Galicia_Logo.svg.png" group-title="ESPAÑA", TV Galicia América || ESPAÑA
https://america-crtvg.flumotion.com/crtvg/america_high/chunks.m3u8
#EXTINF:-1 tvg-id="ES | Radio Televisión Mogan" tvg-name="ES | Radio Televisión Mogan" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLR9a3Cn4uJLbEkRS4XPaymSOXxbfkwIpfbvSF_P=s900-c-k-c0x00ffffff-no-rj" group-title="ESPAÑA", Radio Televisión Mogan || ESPAÑA
https://cloudvideo.servers10.com:8081/8028/index.m3u8
#EXTINF:-1 tvg-id="ES | Costa del Sol TV" tvg-name="ES | Costa del Sol TV" tvg-logo="https://yt3.googleusercontent.com/ytc/AL5GRJX_hsF83yqZtuAfSJ6Idywzr0aOFiKKg1Ui13-y-A=s900-c-k-c0x00ffffff-no-rj" group-title="ESPAÑA", Costa del Sol TV || ESPAÑA
https://limited11.todostreaming.es/live/benalmadena-livestream.m3u8
#EXTINF:-1 tvg-id="ES | Nortevision" tvg-name="ES | Nortevision" tvg-logo="https://diretele.com/wp-content/uploads/2020/09/NORTEvision-100x70.png" group-title="ESPAÑA", Nortevision || ESPAÑA
http://amaru.dyndns.org:8870/0.m3u8
#EXTINF:-1 tvg-id="ES | Onda Valencia TV" tvg-name="ES | Onda Valencia TV" tvg-logo="https://www.ondavalencia.es/templates/jsn_boot_pro/images/logo5.png" group-title="ESPAÑA", Onda Valencia TV || ESPAÑA
https://cloudvideo.servers10.com:8081/8116/index.m3u8
#EXTINF:-1 tvg-id="ES | Radio Televisión Estepona" tvg-name="ES | Radio Televisión Estepona" tvg-logo="https://directostv.teleame.com/wp-content/uploads/2018/02/tv-estepona.png" group-title="ESPAÑA", Radio Televisión Estepona || ESPAÑA
https://cloudvideo.servers10.com:8081/8022/index.m3u8
#EXTINF:-1 tvg-id="ES | Teleribera" tvg-name="ES | Teleribera" tvg-logo="https://yt3.googleusercontent.com/ytc/AL5GRJWWHsSb-mBbjuGAgMaaIdMHKGW6FPP8MFynUN1gRQ=s900-c-k-c0x00ffffff-no-rj" group-title="ESPAÑA", Teleribera || ESPAÑA
http://37.187.7.106/teleribera/live.m3u8
#EXTINF:-1 tvg-id="ES | Canal Málaga" tvg-name="ES | Canal Málaga" tvg-logo="https://static.mytuner.mobi/media/tvos_radios/uksr3vhttzzx.png" group-title="ESPAÑA", Canal Málaga || ESPAÑA
https://canalmalaga-tv-live.flumotion.com/playlist.m3u8
#EXTINF:-1 tvg-id="ES | La 7 Región de Murcia" tvg-name="ES | La 7 Región de Murcia" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/La_7_logo.svg/150px-La_7_logo.svg.png" group-title="ESPAÑA", La 7 Región de Murcia || ESPAÑA
https://nodep002.service.openstream.es/SVoriginOperatorEdge2/smil:35_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Boing" tvg-name="ES | Boing" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Boing_2020.svg/160px-Boing_2020.svg.png" group-title="ESPAÑA", Boing || ESPAÑA
https://spa-ha-p004.cdn.masmediatv.es/SVoriginOperatorEdge/smil:17_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Clan" tvg-name="ES | Clan" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Clan_TVE_logo.svg/151px-Clan_TVE_logo.svg.png" group-title="ESPAÑA", Clan || ESPAÑA
https://spa-ha-p004.cdn.masmediatv.es/SVoriginOperatorEdge/smil:6_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Disney Channel" tvg-name="ES | Disney Channel" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/DisneyChannelEMEA.svg/250px-DisneyChannelEMEA.svg.png" group-title="ESPAÑA", Disney Channel || ESPAÑA
https://nodep002.service.openstream.es/SVoriginOperatorEdge2/smil:21_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Paramount Network" tvg-name="ES | Paramount Network" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Paramount_Network.svg/125px-Paramount_Network.svg.png" group-title="ESPAÑA", Paramount Network || ESPAÑA
https://nodep002.service.openstream.es/SVoriginOperatorEdge2/smil:22_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Esport3" tvg-name="ES | Esport3" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Esport3.svg/150px-Esport3.svg.png" group-title="ESPAÑA", E3 || ESPAÑA
https://nodep002.service.openstream.es/SVoriginOperatorEdge2/smil:48_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | National Geographic Wild" tvg-name="ES | National Geographic Wild" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/National_Geographic_Wild_logo.svg/175px-National_Geographic_Wild_logo.svg.png" group-title="ESPAÑA", National Geographic Wild || ESPAÑA
http://livex.pop-app.live/s4n/poplive/ch508/playlist.m3u8
#EXTINF:-1 tvg-id="ES | DMAX" tvg-name="ES | DMAX" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/DMAX_BLACK.svg/250px-DMAX_BLACK.svg.png" group-title="ESPAÑA", DMAX || ESPAÑA
https://spa-ha-p004.cdn.masmediatv.es/SVoriginOperatorEdge/smil:23_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Iberalia TV" tvg-name="ES | Iberalia TV" tvg-logo="https://www.cineytele.com/wp-content/uploads/2017/07/iberalia_tv_logo.jpg" group-title="ESPAÑA", Iberalia TV || ESPAÑA
https://nodep002.service.openstream.es/SVoriginOperatorEdge2/smil:36_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="ES | Escapa TV" tvg-name="ES | Escapa TV" tvg-logo="https://www.mundoplus.tv/wiki/lib/exe/fetch.php?w=144&h=108&tok=e77999&media=https%3A%2F%2Fwww.mundoplus.tv%2Fwiki%2F_media%2Flogos%2Fescapatv.png" group-title="ESPAÑA", Escapa TV || ESPAÑA
https://nodep002.service.openstream.es/SVoriginOperatorEdge2/smil:42_HD.smil/manifest.m3u8
#EXTINF:-1 tvg-id="JP | NHK World" tvg-name="JP | NHK World" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/NHK_World.svg/245px-NHK_World.svg.png" group-title="JAPON", NHK World || JAPON
https://cdn.nhkworld.jp/www11/nhkworld-tv/global/2003458/live.m3u8
#EXTINF:-1 tvg-id="KR | Asian TV" tvg-name="KR | Asian TV" tvg-logo="https://tv-iteractiva-prod.s3.amazonaws.com/media/brand/ASIANTV_LOGO_PRETO-01_menor_DURXi6G.png" group-title="KOREA DEL SUR", Asian TV || KOREA DEL SUR
https://video01.soultv.com.br/asiantv/asiantv/playlist.m3u8
#EXTINF:-1 tvg-id="CI | Ivoire Channel" tvg-name="CI | Ivoire Channel" tvg-logo="https://play-lh.googleusercontent.com/URv6HhGl1NdHOxhCBAZj1vd-GlJBL3Vn9CwDk8z5_SDIufM27Lz76TKmyP8ktEA_bto=s48-rw" group-title="COSTA DE MARFIL", Ivoire Channel || COSTA DE MARFIL
https://video1.getstreamhosting.com:1936/8244/8244/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Radio Atmosfera" tvg-name="PE | Radio Atmosfera" tvg-logo="https://www.planetaradios.com/content/radios_fm/pr_122.png" group-title="EMISORAS LOCALES", Radio Atmósfera 92.3 FM || Moyobamba; Perú
https://cast10.plugstreaming.com:2000/stream/atmosfera/;
#EXTINF:-1 tvg-id="PE | Radio Interactiva" tvg-name="PE | Radio Interactiva" tvg-logo="https://interactivaradio.com/wp-content/uploads/2023/10/LOGO.png" group-title="EMISORAS LOCALES", Interactiva Radio 92.9 FM || Moyobamba; Perú
https://conectperu.com/8390/stream
#EXTINF:-1 tvg-id="PE | Radio Selva" tvg-name="PE | Radio Selva" tvg-logo="https://radioselvatv.pe/wp-content/uploads/2023/08/LOGO-web.png" group-title="EMISORAS LOCALES", Radio Selva 93.7 FM || Moyobamba; Perú
https://conectperu.com/8470//stream
#EXTINF:-1 tvg-id="PE | Radio Ebenezer" tvg-name="PE | Radio Ebenezer" tvg-logo="https://graph.facebook.com/281962128599048/picture?type=large" group-title="EMISORAS LOCALES", Radio Ebenezer 103.5 FM || Moyobamba; Perú
https://stream-40.zeno.fm/nmx8e1y7cm0uv?zs=e2hAOnVRRs2NRTKp98xR6Q&aw_0_req_lsid=1663150054202_0.5060922715387872&an-uid=5362203318446947601&triton-uid=cookie%3A1a8575a0-a2d8-4284-a5c1-853a8ffb7673
#EXTINF:-1 tvg-id="PE | Radio Moda Star" tvg-name="PE | Radio Moda Star" tvg-logo="https://cdn.webrad.io/images/logos/radios-com-pe/moda-moyobamba.png" group-title="EMISORAS LOCALES", Radio Moda Star || Moyobamba; Perú
https://sp.onliveperu.com/8004/stream
#EXTINF:-1 tvg-id="PE | Radio Power" tvg-name="PE | Radio Power" tvg-logo="https://cdn.onlineradiobox.com/img/l/3/93943.v3.png" group-title="EMISORAS LOCALES", Radio Power || Moyobamba; Perú
https://sp.dattavolt.com/8062/stream
#EXTINF:-1 tvg-id="PE | Radio G" tvg-name="PE | Radio G" tvg-logo="https://radiog.pe/wp-content/uploads/2020/08/1logo-radio1.png" group-title="EMISORAS LOCALES", Radio G || Moyobamba; Perú
https://conectperu.com/8436//stream
#EXTINF:-1 tvg-id="PE | Radio La Voz de Moyobamba" tvg-name="PE | Radio La Voz de Moyobamba" tvg-logo="https://play-lh.googleusercontent.com/n1rtB2umm4Aiu1hkiKnRhGDlnnBLJYO2ZEWAClKuaJShBrMmKg7xvnWAZX4jbMMwn0I=w240-h480-rw" group-title="EMISORAS LOCALES", Radio La Voz de Moyobamba || Moyobamba; Perú
https://radio.livestreamingmundial.com:7193/stream?icy=http
#EXTINF:-1 tvg-id="PE | Radio Tropicana" tvg-name="PE | Radio Tropicana" tvg-logo="https://play-lh.googleusercontent.com/SbNWROdHc1mgEQpZQBDPHcdjlNsKX2K1-q3_6V5LXOGtg36sttuxX_7qgNTX3C79JA" group-title="EMISORAS LOCALES", Radio Tropicana 99.7 FM || Soritor; Perú
https://radio.livestreamingmundial.com:7086/live
#EXTINF:-1 tvg-id="PE | Radio Nor Selva" tvg-name="PE | Radio Nor Selva" tvg-logo="https://cdn.webrad.io/images/logos/radios-com-pe/norselva-98-7.png" group-title="EMISORAS PROVINCIALES", Radio Nor Selva 98.7 FM || Rioja; Perú
https://sp.onliveperu.com/8150/stream/;type=mp3
#EXTINF:-1 tvg-id="PE | Radio Rioja" tvg-name="PE | Radio Rioja" tvg-logo="https://www.radioriojaperu.com/panel/archivos-panel/logotipo/Logo-ie4jb-1.png" group-title="EMISORAS PROVINCIALES", Radio Rioja 101.1 FM || Rioja; Perú
https://radio.sonandoahora.com:8164/;
#EXTINF:-1 tvg-id="PE | Radio Via Alto Mayo" tvg-name="PE | Radio Via Alto Mayo" tvg-logo="https://www.viaaltomayotv.com/img/logotipo_radioref.png" group-title="EMISORAS PROVINCIALES", Radio Vía Alto Mayo || Rioja; Perú
https://whmsonic.playerfullhd.com:7099/;/live
#EXTINF:-1 tvg-id="PE | Radio California" tvg-name="PE | Radio California" tvg-logo="https://www.planetaradios.com/content/radios_fm/lradio-california-nueva-cajamarca.png" group-title="EMISORAS PROVINCIALES", Radio California 102.9 FM || Nueva Cajamarca; Perú
https://sp01.servidor.stream/8026/stream
#EXTINF:-1 tvg-id="PE | Radio Ondas del Río Mayo" tvg-name="PE | Radio Ondas del Río Mayo" tvg-logo="https://play-lh.googleusercontent.com/dW1vUmmvg33AvAYIX9wlpQhe015pXfQG2ynFAUtpPtZVh_YXJOg29_GqdcozsFhMmeI" group-title="EMISORAS PROVINCIALES", Radio Ondas del Río Mayo 105.7 FM || Nueva Cajamarca; Perú
https://sp.onliveperu.com/8090/stream
#EXTINF:-1 tvg-id="PE | Radio Estación Lamas" tvg-name="PE | Radio Estación Lamas" tvg-logo="https://radioestacionlamas.com/images/logo.png" group-title="EMISORAS PROVINCIALES", Radio Estación Lamas || Lamas; Perú
https://stream-59.zeno.fm/nquc4xxz6bhvv?zs=au0SXsPKTPWSi2RldHNzgA
#EXTINF:-1 tvg-id="PE | Radio Millenium" tvg-name="PE | Radio Millenium" tvg-logo="https://milleniumrtv.com/wp-content/uploads/2022/07/logo.png" group-title="EMISORAS PROVINCIALES", Radio Millenium || Lamas; Perú
https://shoutcast.tmcreativos.com/proxy/milleniumla/stream
#EXTINF:-1 tvg-id="PE | Radio Amistad" tvg-name="PE | Radio Amistad" tvg-logo="https://www.planetaradios.com/content/radios_fm/pr215.png" group-title="EMISORAS PROVINCIALES", Radio Amistad 94.3 FM || Tarapoto; Perú
https://node-05.zeno.fm/00x5zgc5xg0uv.aac?zs=gaosDMhVRUudgtuUqhx1RA&rj-tok=AAABgW3OIMAAfufZoQ7F6_2Tpg&rj-ttl=5
#EXTINF:-1 tvg-id="PE | Radio Interactiva" tvg-name="PE | Radio Interactiva" tvg-logo="https://www.planetaradios.com/content/radios_fm/interactiva_radio_pe_sda011d01dss.png" group-title="EMISORAS PROVINCIALES", Interactiva Radio 98.3 FM || Tarapoto; Perú
https://conectperu.com/8426/stream
#EXTINF:-1 tvg-id="PE | Radio Fans" tvg-name="PE | Radio Fans" tvg-logo="https://static-media.streema.com/media/cache/0c/f0/0cf0fce695bd125e78e44ff5fc8badf6.jpg" group-title="EMISORAS PROVINCIALES", Radio Fans 95.5 FM || Picota; Perú
http://eu1.serviaudio.com:8066/stream/;
#EXTINF:-1 tvg-id="PE | Radio Poderosa" tvg-name="PE | Radio Poderosa" tvg-logo="https://play-lh.googleusercontent.com/rs0UVLt2k9ON12iW-dzghfoKwKuAChW3aFDh4SSIAIzI49_m8ktG33GmWanD2bSk3Q=s200" group-title="EMISORAS PROVINCIALES", Radio Poderosa 96.7 FM || Picota; Perú
http://eu1.serviaudio.com:8038/
#EXTINF:-1 tvg-id="PE | Radio La Mega de Picota" tvg-name="PE | Radio La Mega de Picota" tvg-logo="https://static-media.streema.com/media/cache/93/9e/939e2e96ae1bd97da85be744a85fda6e.jpg" group-title="EMISORAS PROVINCIALES", Radio La Mega 98.7 FM || Picota; Perú
http://ip.blstreamperu.com:9854/;
#EXTINF:-1 tvg-id="PE | Radio Nueva Z" tvg-name="PE | Radio Nueva Z" tvg-logo="https://www.planetaradios.com/content/radios_fm/Radio-Nueva-Z-FM_Shamboyacu_San_Martin_pe.png" group-title="EMISORAS PROVINCIALES", Radio Nueva Z || Shamboyacu; Perú
https://radio.livestreamingmundial.com:7209/stream
#EXTINF:-1 tvg-id="PE | Radio Fantasía" tvg-name="PE | Radio Fantasía" tvg-logo="https://play-lh.googleusercontent.com/S8JRGHusHv3FbcInfuqPQqkF7AeCdjXMjZJBu5-AqeCX_LKJI-zTXC10WNVoNsdu9Q=w240-h480-rw" group-title="EMISORAS REGIONALES", Radio Fantasía || Iquitos; Perú
https://sp.oyotunstream.com:10943/;
#EXTINF:-1 tvg-id="PE | Radio Astoria" tvg-name="PE | Radio Astoria" tvg-logo="https://play-lh.googleusercontent.com/BvV0UBLSVEm-QwxXU2eufrTals-HZjCyxIrwQX7mBdI60SILC918qkqeGyW2um2Jua8=w240-h480-rw" group-title="EMISORAS REGIONALES", Radio Astoria || Iquitos; Perú
https://gnstreammedia.com:7000/stream
#EXTINF:-1 tvg-id="PE | Radio Tigre" tvg-name="PE | Radio Tigre" tvg-logo="https://www.planetaradios.com/content/radios_fm/Radio__TigreFM_iquitos_Loreto.png" group-title="EMISORAS REGIONALES", Radio Tigre || Iquitos; Perú
http://oyotunstream.com:9352/;
#EXTINF:-1 tvg-id="PE | Radio Amazonía" tvg-name="PE | Radio Amazonía" tvg-logo="https://play-lh.googleusercontent.com/I3BwqEHqUYFXxoUCNN8k6NcVtRI1gMprBDdclaxdtFZOGhy2nxjUYxeiOv3ATWIJtw=w240-h480-rw" group-title="EMISORAS REGIONALES", Radio Amazonía || Iquitos; Perú
https://conectperu.com/8482/stream
#EXTINF:-1 tvg-id="PE | Radio Loreto" tvg-name="PE | Radio Loreto" tvg-logo="https://static.mytuner.mobi/media/tvos_radios/ql2v9ammzfz4.png" group-title="EMISORAS REGIONALES", Radio Loreto || Iquitos; Perú
https://sp.oyotunstream.com/8006/stream
#EXTINF:-1 tvg-id="PE | Radio Inspiración" tvg-name="PE | Radio Inspiración" tvg-logo="https://play-lh.googleusercontent.com/bdDI8p_TJxMf65K3-gYY9CpSJkX3xXyLeCv0vddgYaxWt8TuSiY75aHJ9iZKWWF6tQg=w240-h480-rw" group-title="EMISORAS REGIONALES", Radio Inspiración || Nauta; Perú
https://sp.dattavolt.com/8098/stream
#EXTINF:-1 tvg-id="PE | Radio Rutas" tvg-name="PE | Radio Rutas" tvg-logo="https://play-lh.googleusercontent.com/7hUpRIhYXUf2VRDm9oBEZLvqzSc6eCtMYzRLelnfqYwRFXc75nhJlZZrvZ9ujzgmCw=w240-h480-rw" group-title="EMISORAS REGIONALES", Radio Rutas || Quillabamba; Perú
https://tupanel.info:9920/stream?icy=http
#EXTINF:-1 tvg-id="PE | Expresión Radio TV" tvg-name="PE | Expresión Radio TV" tvg-logo="https://www.telesur.com.pe/recursos/page/expresion/images/logo.png" group-title="EMISORAS DE RADIO CON VIDEO", Expresión Radio TV || Ilo
https://1667517699.rsc.cdn77.org/hls/radioilo.m3u8
#EXTINF:-1 tvg-id="PE | Radio Altamar" tvg-name="PE | Radio Altamar" tvg-logo="https://cableclub.com.pe/wp-content/uploads/2021/04/radio-altamar-150x150-1.jpg" group-title="EMISORAS REGIONALES", Radio Altamar || Ilo
https://cloudstream2030.conectarhosting.com:10968/stream?icy=http
#EXTINF:-1 tvg-id="PE | Radio Mágica" tvg-name="PE | Radio Mágica" tvg-logo="http://radiomagica.pe/assets/images/logo-mediano.png" group-title="EMISORAS NACIONALES", Radio Mágica 88.3 FM || Lima; Perú
http://playerservices.streamtheworld.com/api/livestream-redirect//MAG_SC
#EXTINF:-1 tvg-id="PE | Radio Felicidad" tvg-name="PE | Radio Felicidad" tvg-logo="https://eaudioplayer.radio-grpp.io/static/dist/img/logo_felicidad.png" group-title="EMISORAS NACIONALES", Radio Felicidad 88.9 FM y 900 AM || Lima; Perú
https://us-b4-p-e-pb13-audio.cdn.mdstrm.com/live-audio-aw/5fad731fcf097a068af3c8f7?aid=5faaeb72f92d7b07dfe10181&pid=8KmTN78utvPCPSsSXirttLiC7KfrJxn0&sid=1sjbP1nzkSfBs73atL3RhVGhIou9pSWw&uid=s9Ns1pDpzADqzOi8Qc2GY4fYDVDEmGtq&es=us-b4-p-e-pb13-audio.cdn.mdstrm.com&ote=1697711997299&ot=9Wsgep04OvlVh3C2vIZE6A&proto=https&pz=us&cP=128000&awCollectionId=5faaeb72f92d7b07dfe10181&liveId=5fad731fcf097a068af3c8f7&referer=https%3A%2F%2Fradiosperu.pe%2F&listenerId=s9Ns1pDpzADqzOi8Qc2GY4fYDVDEmGtq
#EXTINF:-1 tvg-id="PE | RPP" tvg-name="PE | RPP" tvg-logo="https://eaudioplayer.radio-grpp.io/static/dist/img/logo_rpp.png" group-title="EMISORAS NACIONALES", RPP Noticias 89.7 FM y 730 AM || Lima; Perú
https://stream-156.zeno.fm/n0fc3vk78ehvv?zs=o9LAymxmR4SvSeTlWMOFpA
#EXTINF:-1 tvg-id="PE | Radio La Zona" tvg-name="PE | Radio La Zona" tvg-logo="https://eaudioplayer.radio-grpp.io/static/dist/img/logo_lazona.png" group-title="EMISORAS NACIONALES", Radio La Zona 90.5 FM || Lima; Perú
https://us-b4-p-e-pb13-audio.cdn.mdstrm.com/live-audio-aw/5fada54116646e098d97e6a5?aid=5faaeb72f92d7b07dfe10181&pid=sV9sFat6DZCsvL6yFENcp7n1eAygjKn8&sid=1sjbP1nzkSfBs73atL3RhVGhIou9pSWw&uid=s9Ns1pDpzADqzOi8Qc2GY4fYDVDEmGtq&es=us-b4-p-e-pb13-audio.cdn.mdstrm.com&ote=1697712081985&ot=94-ySQ45D-482GsTuxZkAg&proto=https&pz=us&cP=128000&awCollectionId=5faaeb72f92d7b07dfe10181&liveId=5fada54116646e098d97e6a5&referer=https%3A%2F%2Fradiosperu.pe%2F&listenerId=s9Ns1pDpzADqzOi8Qc2GY4fYDVDEmGtq
#EXTINF:-1 tvg-id="PE | Radio La Zona Salsa" tvg-name="PE | Radio La Zona Salsa" tvg-logo="https://eaudioplayer.radio-grpp.io/static/dist/img/logo_la_zona_salsa.png" group-title="EMISORAS NACIONALES", Radio La Zona Salsa || Lima; Perú
https://us-b4-p-e-cg11-audio.cdn.mdstrm.com/live-audio-aw/5fada59e471e070829a79443/playlist.m3u8?listeningSessionID=646ef88900a9f392_8838054_Yqq4qEe6__0000009XeOz&downloadSessionID=0&aid=5faaeb72f92d7b07dfe10181&dnt=true&uid=s9Ns1pDpzADqzOi8Qc2GY4fYDVDEmGtq&sid=RpfpIUxqFMtgps7QHlhM9OWg5zaypr6H&pid=yUDKLYZhdP1iNYyFrQNGrnvAsXwyw1zK&ref=audioplayer.pe&es=us-b4-p-e-cg11-audio.cdn.mdstrm.com&ote=1693918639368&ot=q6ac08PtiF3CVRMfX4I2sA&proto=https&pz=us&cP=128000&awCollectionId=5faaeb72f92d7b07dfe10181&aw_0_1st.playerId=audioplayer_web&liveId=5fada59e471e070829a79443&referer=https%3A%2F%2Faudioplayer.pe%2F&propertyName=audioplayer_web&propertyType=web-app&propertyVersion=vv0.1.8&listenerId=s9Ns1pDpzADqzOi8Qc2GY4fYDVDEmGtq
#EXTINF:-1 tvg-id="PE | Radio Disney" tvg-name="PE | Radio Disney" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Radio-Disney.png/225px-Radio-Disney.png" group-title="EMISORAS NACIONALES", Radio Disney 91.1 FM || Lima; Perú
https://27343.live.streamtheworld.com/DISNEY_PER_LMAAC/HLS/playlist.m3u8?dist=web-radiodisney
#EXTINF:-1 tvg-id="PE | Radio PBO" tvg-name="PE | Radio PBO" tvg-logo="https://pboradio.minegocio21.com/wp-content/uploads/2020/10/logo.jpg" group-title="EMISORAS NACIONALES", Radio PBO 91.9 FM || Lima; Perú
https://n08.radiojar.com/2fse67zuv8hvv?rj-ttl=5&rj-tok=AAABhiWMKwIABjORIJPbXUJ4kg
#EXTINF:-1 tvg-id="PE | Radio Studio 92" tvg-name="PE | Radio Studio 92" tvg-logo="https://eaudioplayer.radio-grpp.io/static/dist/img/logo_studio92.png" group-title="EMISORAS NACIONALES", Radio Studio 92 92.5 FM || Lima; Perú
https://us-b4-p-e-cg11-audio.cdn.mdstrm.com/live-audio-aw/5fada553978fe1080e3ac5ea?aid=5faaeb72f92d7b07dfe10181&pid=nGqN8qaPoMd3Qlpx5VkAS2cvMVZeAFmO&sid=1sjbP1nzkSfBs73atL3RhVGhIou9pSWw&uid=s9Ns1pDpzADqzOi8Qc2GY4fYDVDEmGtq&es=us-b4-p-e-cg11-audio.cdn.mdstrm.com&ote=1697712149764&ot=ykX5sE0fTENzvgLG1nGeXA&proto=https&pz=us&cP=128000&awCollectionId=5faaeb72f92d7b07dfe10181&liveId=5fada553978fe1080e3ac5ea&referer=https%3A%2F%2Fradiosperu.pe%2F&listenerId=s9Ns1pDpzADqzOi8Qc2GY4fYDVDEmGtq
#EXTINF:-1 tvg-id="PE | Ritmo Romántica" tvg-name="PE | Ritmo Romántica" tvg-logo="https://peru.mom-gmr.org/uploads/tx_lfrogmom/media/2026-205_import.png" group-title="EMISORAS NACIONALES", Ritmo Romántica 93.1 FM || Lima; Perú
http://playerservices.streamtheworld.com/api/livestream-redirect/CRP_RIT_SC
#EXTINF:-1 tvg-id="PE | Radio La Inolvidable" tvg-name="PE | Radio La Inolvidable" tvg-logo="https://d3kle7qwymxpcy.cloudfront.net/images/broadcasts/8e/08/21103/c175.png" group-title="EMISORAS NACIONALES", Radio La Inolvidable 93.7 FM y 660 AM || Lima; Perú
http://playerservices.streamtheworld.com/api/livestream-redirect/CRP_LI_SC?dist=20001
#EXTINF:-1 tvg-id="PE | Radio Corazon" tvg-name="PE | Radio Corazon" tvg-logo="https://eaudioplayer.radio-grpp.io/static/dist/img/logo_corazon.png" group-title="EMISORAS NACIONALES", Radio Corazón 94.3 FM || Lima; Perú
https://us-b4-p-e-cg11-audio.cdn.mdstrm.com/live-audio-aw/5fada514fc16c006bd63370f?aid=5faaeb72f92d7b07dfe10181&pid=fygorKayYivBVQrKQA8KqwMnkwJY4z4l&sid=1sjbP1nzkSfBs73atL3RhVGhIou9pSWw&uid=s9Ns1pDpzADqzOi8Qc2GY4fYDVDEmGtq&es=us-b4-p-e-cg11-audio.cdn.mdstrm.com&ote=1697712244290&ot=A1yosuo0aFO-dnZjfsZRog&proto=https&pz=us&cP=128000&awCollectionId=5faaeb72f92d7b07dfe10181&liveId=5fada514fc16c006bd63370f&referer=https%3A%2F%2Fradiosperu.pe%2F&listenerId=s9Ns1pDpzADqzOi8Qc2GY4fYDVDEmGtq
#EXTINF:-1 tvg-id="PE | Radio La Karibeña" tvg-name="PE | Radio La Karibeña" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/LOGO_RADIO_KARIBE%C3%91A.png/225px-LOGO_RADIO_KARIBE%C3%91A.png" group-title="EMISORAS NACIONALES", Radio La Karibeña 94.9 FM || Lima; Perú
https://cpliv3.onliv3.com/stream/karibena
#EXTINF:-1 tvg-id="PE | Radio Exitosa" tvg-name="PE | Radio Exitosa" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Logoexitosa.png/225px-Logoexitosa.png" group-title="EMISORAS NACIONALES", Radio Exitosa 95.5 FM || Lima; Perú
https://cpliv3.onliv3.com/stream/radioexitosa
#EXTINF:-1 tvg-id="PE | Radio La Kalle" tvg-name="PE | Radio La Kalle" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/LOGO-CON-SLOGAN1-e1513719885620.png/225px-LOGO-CON-SLOGAN1-e1513719885620.png" group-title="EMISORAS NACIONALES", Radio La Kalle 96.1 FM || Lima; Perú
https://cpliv3.onliv3.com/stream/lakalle/stream
#EXTINF:-1 tvg-id="PE | Radio La MegaMix" tvg-name="PE | Radio La MegaMix" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Radio_La_Mega_Mix.jpg/225px-Radio_La_Mega_Mix.jpg" group-title="EMISORAS NACIONALES", Radio La MegaMix 96.7 FM y 1470 AM || Lima; Perú
https://us-b4-p-e-cg11-audio.cdn.mdstrm.com/live-audio-aw/5fada56fe4e09508207a7951?aid=5faaeb72f92d7b07dfe10181&pid=8I4y6V3FYSchsqUAjuWucTcxxVXeNohG&sid=1sjbP1nzkSfBs73atL3RhVGhIou9pSWw&uid=s9Ns1pDpzADqzOi8Qc2GY4fYDVDEmGtq&es=us-b4-p-e-cg11-audio.cdn.mdstrm.com&ote=1697712353707&ot=JGzYaADyeVcChON8pMsmzQ&proto=https&pz=us&cP=128000&awCollectionId=5faaeb72f92d7b07dfe10181&liveId=5fada56fe4e09508207a7951&referer=https%3A%2F%2Fradiosperu.pe%2F&listenerId=s9Ns1pDpzADqzOi8Qc2GY4fYDVDEmGtq
#EXTINF:-1 tvg-id="PE | Radio Moda" tvg-name="PE | Radio Moda" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Moda_2018.png/225px-Moda_2018.png" group-title="EMISORAS NACIONALES", Radio Moda 97.3 FM || Lima; Perú
http://playerservices.streamtheworld.com/api/livestream-redirect/CRP_MOD_SC
#EXTINF:-1 tvg-id="PE | Radio Onda Cero" tvg-name="PE | Radio Onda Cero" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Logo-Onda.jpg/225px-Logo-Onda.jpg" group-title="EMISORAS NACIONALES", Radio Onda Cero 98.1 FM y 1160 AM || Lima; Perú
https://streaming.gometri.com/stream/8011/stream
#EXTINF:-1 tvg-id="PE | Doble Nueve" tvg-name="PE | Radio Doble Nueve" tvg-logo="https://radiosperu.net/sites/default/files/styles/116_x_116/public/radio/logos/logo-radio-doble-nueve.png?itok=IC3yv-Om" group-title="EMISORAS NACIONALES", Radio Doble Nueve 99.1 FM || Lima; Perú
http://149.56.241.147:8002/stream
#EXTINF:-1 tvg-id="PE | Radio Oasis" tvg-name="PE | Radio Oasis" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Oasis_2015.png/225px-Oasis_2015.png" group-title="EMISORAS NACIONALES", Radio Oasis 100.1 FM || Lima; Perú
http://playerservices.streamtheworld.com/api/livestream-redirect/CRP_OAS_SC
#EXTINF:-1 tvg-id="PE | Radio Panamericana" tvg-name="PE | Radio Panamericana" tvg-logo="https://www.radiopanamericana.com/images/logo-pana_blanco.png" group-title="EMISORAS NACIONALES", Radio Panamericana 101.1 FM y 960 AM || Lima; Perú
https://streaming.gometri.com/stream/8000/stream
#EXTINF:-1 tvg-id="PE | Radio Oxigeno" tvg-name="PE | Radio Oxigeno" tvg-logo="https://eaudioplayer.radio-grpp.io/static/dist/img/logo_oxigeno.png" group-title="EMISORAS NACIONALES", Radio Oxígeno 102.1 FM || Lima; Perú
https://us-b4-p-e-qg12-audio.cdn.mdstrm.com/live-audio-aw/5fab0687bcd6c2389ee9480c?aid=5faaeb72f92d7b07dfe10181&pid=8TD4BjLtTRIbPonKF6KyduDZnjLlB5om&sid=1sjbP1nzkSfBs73atL3RhVGhIou9pSWw&uid=s9Ns1pDpzADqzOi8Qc2GY4fYDVDEmGtq&es=us-b4-p-e-qg12-audio.cdn.mdstrm.com&ote=1697712512294&ot=U8AeRv4mLd7-P_rGE56axA&proto=https&pz=us&cP=128000&awCollectionId=5faaeb72f92d7b07dfe10181&liveId=5fab0687bcd6c2389ee9480c&referer=https%3A%2F%2Fradiosperu.pe%2F&listenerId=s9Ns1pDpzADqzOi8Qc2GY4fYDVDEmGtq
#EXTINF:-1 tvg-id="PE | Radio Filarmonía" tvg-name="PE | Radio Filarmonía" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Radio_filarmon%C3%ADa_2020.png/200px-Radio_filarmon%C3%ADa_2020.png" group-title="EMISORAS NACIONALES", Radio Filarmonía 102.7 FM || Lima; Perú
http://c22.radioboss.fm:8100/stream
#EXTINF:-1 tvg-id="PE | Radio Unión" tvg-name="PE | Radio Unión" tvg-logo="https://cdn-profiles.tunein.com/s86043/images/bannerx.jpg?t=636734949083400000" group-title="EMISORAS NACIONALES", Radio Unión 103.3 FM y 880 AM || Lima; Perú
https://stream-159.zeno.fm/5v1hfcfnru1vv?zs=rHYrGiZlQ7eNZ1L50-PdJA
#EXTINF:-1 tvg-id="PE | Radio Nacional" tvg-name="PE | Radio Nacional" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Logo_radio_nacional_per%C3%B9_2019.png/225px-Logo_radio_nacional_per%C3%B9_2019.png" group-title="EMISORAS NACIONALES", Radio Nacional del Perú 103.9 FM || Lima; Perú
https://d22wuf1e4r36xd.cloudfront.net/out/v1/0773874174fd4eba8bb9eff741d190dc/index_1.m3u8
#EXTINF:-1 tvg-id="PE | Radio América" tvg-name="PE | Radio América" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Radio_Am%C3%A9rica_Per%C3%BA_2021.png/250px-Radio_Am%C3%A9rica_Per%C3%BA_2021.png" group-title="EMISORAS NACIONALES", Radio América 104.7 FM || Lima; Perú
https://us-b5-p-e-kj2-audio.cdn.mdstrm.com/live-audio-aw/60bfd82b9488941e9d86eb1d/playlist.m3u8?listeningSessionID=6221b313eb6cd2c5_1699774_HZjG6feJ__0000005vrDv&downloadSessionID=0&aid=5b8ea6f89ff52d0770a144c4&dnt=true&uid=gcl6jHrQNCYjW2aeqW0nb2fXL33TJuqG&sid=RGgDqsqCNRZo9pgnNRTfzNE621wFzqXL&pid=CUHEKdaPzNcFr6QFFqmAwzLYiurhd5RN&ref=radioamerica.pe&es=us-b5-p-e-kj2-audio.cdn.mdstrm.com&ote=1648161841224&ot=xHK3jX8QeGd8q1Isljo5YQ&proto=https&pz=us&cP=128000&awCollectionId=5b8ea6f89ff52d0770a144c4&liveId=60bfd82b9488941e9d86eb1d&referer=https%3A%2F%2Fradioamerica.pe%2F&propertyName=appName&propertyType=web-app&propertyVersion=v0.0.169
#EXTINF:-1 tvg-id="PE | Radio La Ñ" tvg-name="PE | Radio La Ñ" tvg-logo="https://cdn.onlineradiobox.com/img/l/3/25953.v29.png" group-title="EMISORAS NACIONALES", Radio La Ñ 105.5 FM || Lima; Perú
https://node-30.zeno.fm/v83x1mqnnnruv?rj-ttl=5&rj-tok=AAABfGg7cF8AMFkIqh42CgzQVg
#EXTINF:-1 tvg-id="PE | Radiomar" tvg-name="PE | Radiomar" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/b/b1/Radiomar_2017.svg/revision/latest/scale-to-width-down/1200?cb=20220706023913&path-prefix=es" group-title="EMISORAS NACIONALES", Radiomar 106.3 FM || Lima; Perú
http://playerservices.streamtheworld.com/api/livestream-redirect/CRP_MAR_SC
#EXTINF:-1 tvg-id="PE | Radio Nueva Q" tvg-name="PE | Radio Nueva Q" tvg-logo="https://mmo.aiircdn.com/766/6409e2eea33c6.png" group-title="EMISORAS NACIONALES", Radio Nueva Q 107.1 FM || Lima; Perú
http://playerservices.streamtheworld.com/api/livestream-redirect/CRP_NQ_SC
#EXTINF:-1 tvg-id="PE | Radio Planeta" tvg-name="PE | Radio Planeta" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Planeta_2012.png/225px-Planeta_2012.png" group-title="EMISORAS NACIONALES", Radio Planeta 107.7 FM || Lima; Perú
http://playerservices.streamtheworld.com/api/livestream-redirect/CRP_PLA_SC
#EXTINF:-1 tvg-id="PE | Radio Incasat" tvg-name="PE | Radio Incasat" tvg-logo="http://www.radioinca.com.pe/build/images/logo-inca.png" group-title="EMISORAS NACIONALES", Radio Incasat 540 AM || Lima; Perú
https://14993.live.streamtheworld.com/CRP_INC_SC?csegid=20001&dist=20001&ttag=20001
#EXTINF:-1 tvg-id="PE | Radio Oriente" tvg-name="PE | Radio Oriente" tvg-logo="https://cdn.webrad.io/images/logos/radios-com-pe/oriente-lima.png" group-title="EMISORAS NACIONALES", Radio Oriente 560 AM || Lima; Perú
https://dattavolt.com:8370/stream/1/
#EXTINF:-1 tvg-id="PE | Radio María" tvg-name="PE | Radio María" tvg-logo="https://www.radiomariaperu.org/wp-content/uploads/2018/06/LogoPE.jpg" group-title="EMISORAS NACIONALES", Radio María 580 AM || Lima; Perú
http://dreamsiteradiocp4.com:8020/
#EXTINF:-1 tvg-id="PE | Radio Cordillera" tvg-name="PE | Radio Cordillera" tvg-logo="http://www.radiocordillera600am.com.pe/images/logo.jpg" group-title="EMISORAS NACIONALES", Radio Cordillera 600 AM || Lima; Perú
https://node-24.zeno.fm/nn01m46fwa0uv?rj-ttl=5&rj-tok=AAABfELK4c0Aa33jK9pWPQhzfA
#EXTINF:-1 tvg-id="PE | Radio Ovación" tvg-name="PE | Radio Ovación" tvg-logo="https://yt3.ggpht.com/ytc/AKedOLRCUwSBmmkrj2dk2DZ_2nhJOeBJ18WczbN-r-tetw=s900-c-k-c0x00ffffff-no-rj" group-title="EMISORAS NACIONALES", Radio Ovación 620 AM || Lima; Perú
https://5c3fb01839654.streamlock.net:1963/ipradioovacion1/liveovacion1radio/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Radio Integridad" tvg-name="PE | Radio Integridad" tvg-logo="https://us0-cdn.onlineradiobox.com/img/l/1/25521.v9.png" group-title="EMISORAS NACIONALES", Red Radio Integridad 700 AM || Lima; Perú
https://dattavolt.com/8164/stream
#EXTINF:-1 tvg-id="PE | Radio Bienestar" tvg-name="PE | Radio Bienestar" tvg-logo="https://cdn.webrad.io/images/logos/radios-com-pe/bienestar.png" group-title="EMISORAS NACIONALES", Radio Bienestar 760 AM || Lima; Perú
https://26373.live.streamtheworld.com/BIENESTAR_SC?dist=20001
#EXTINF:-1 tvg-id="PE | Radio Libertad" tvg-name="PE | Radio Libertad" tvg-logo="https://s3.amazonaws.com/cdn.radionewproject.com/5fb35d0c937166520cc7699bcc829cd5.jpg" group-title="EMISORAS NACIONALES", Radio Libertad 820 AM || Lima; Perú
https://radio.pjcks.com/9972/stream
#EXTINF:-1 tvg-id="PE | Radio Latina" tvg-name="PE | Radio Latina" tvg-logo="https://cdn.webrad.io/images/logos/radios-com-pe/latina-lima.png" group-title="EMISORAS NACIONALES", Radio Latina 990 AM || Lima; Perú
http://server07.srvsh.com.br:8016/;
#EXTINF:-1 tvg-id="PE | Radio Cielo" tvg-name="PE | Radio Cielo" tvg-logo="https://cdn.webrad.io/images/logos/radios-com-pe/cielo-lima.png" group-title="EMISORAS NACIONALES", Radio Cielo 1010 AM || Lima; Perú
https://serverssl.innovatestream.pe:8080/http://167.114.118.120:7342/;
#EXTINF:-1 tvg-id="PE | Radio Metropolitana" tvg-name="PE | Radio Metropolitana" tvg-logo="https://cdn.webrad.io/images/logos/radios-com-pe/metropolitana-lima.png" group-title="EMISORAS NACIONALES", Radio Metropolitana 1040 AM || Lima; Perú
http://99.198.110.162:8130/stream/1/
#EXTINF:-1 tvg-id="PE | Radio Éxito" tvg-name="PE | Radio Éxito" tvg-logo="https://static.mytuner.mobi/media/tvos_radios/DVUYtwjYv9.jpg" group-title="EMISORAS NACIONALES", Radio Éxito 1060 AM || Lima; Perú
http://67.212.179.138:7200/;stream/1
#EXTINF:-1 tvg-id="PE | Radio La Luz" tvg-name="PE | Radio La Luz" tvg-logo="http://radiolaluz.com/wp-content/themes/laluz/images/logo_rad.png" group-title="EMISORAS NACIONALES", Radio La Luz 1080 AM || Lima; Perú
http://radio.transmite.pe:9310/stream?icy=http
#EXTINF:-1 tvg-id="PE | Radio Feliz" tvg-name="PE | Radio Feliz" tvg-logo="https://radiofeliz.org/wp-content/uploads/2020/10/logo-web-1.png" group-title="EMISORAS NACIONALES", Radio Feliz 1110 AM || Lima; Perú
https://cloudstream2036.conectarhosting.com/8152/stream
#EXTINF:-1 tvg-id="PE | NSE Radio" tvg-name="PE | NSE Radio" tvg-logo="https://2.bp.blogspot.com/-lMCriJJNr24/XcmPLZk2CmI/AAAAAAAAOdk/qp5TOY47OXAnjhO7QZilSDgZFAlq3KlsgCLcBGAsYHQ/s200/nsearequipa.jpg" group-title="EMISORAS NACIONALES", NSE Radio 1180 AM || Lima; Perú
https://servidor18-2.brlogic.com:7440/live
#EXTINF:-1 tvg-id="PE | Nueva Cadena Radio" tvg-name="PE | Nueva Cadena Radio" tvg-logo="https://files.secure.website/wscfus/10124728/25671317/logo-cadena-2020-w300-o.png" group-title="EMISORAS NACIONALES", Nueva Cadena Radio 1200 AM || Lima; Perú
https://radio.transmite.pe/9300/stream
#EXTINF:-1 tvg-id="PE | Radio Comas" tvg-name="PE | Radio Comas" tvg-logo="https://us0-cdn.onlineradiobox.com/img/l/9/25939.v12.png" group-title="EMISORAS NACIONALES", Radio Comas 101.7 FM y 1300 AM || Lima; Perú
http://65.60.2.26:8044/stream?icy=http
#EXTINF:-1 tvg-id="PE | Radio Nuevo Tiempo" tvg-name="PE | Radio Nuevo Tiempo" tvg-logo="https://api.raddios.com/api/radios/723/image/miniaturamovil?2020-04-20%2010:38:56" group-title="EMISORAS NACIONALES", Radio Nuevo Tiempo 1380 AM || Lima; Perú
https://stream.live.novotempo.com/radio/smil:radionuevotiempo.smil/playlist.m3u8
#EXTINF:-1 tvg-id="PE | Radio Imperial 2" tvg-name="PE | Radio Imperial 2" tvg-logo="https://2.bp.blogspot.com/-BE7svSJRqm8/WkqA24CSdLI/AAAAAAAALOY/4LBnGGSK4RYl05JcxoyJ89GPBiFS8Zu6QCLcBGAs/s1600/imperial_am.jpg" group-title="EMISORAS NACIONALES", Radio Imperial 2 99.5 FM y 1440 AM || Lima; Perú
https://sonic.dattassd.com:10853/stream
#EXTINF:-1 tvg-id="PE | Radio Santa Rosa" tvg-name="PE | Radio Santa Rosa" tvg-logo="https://radiosantarosa.com.pe/wp-content/uploads/2019/02/c52.png" group-title="EMISORAS NACIONALES", Radio Santa Rosa 1500 AM || Lima; Perú
https://c21.radioboss.fm:8073/streammain
#EXTINF:-1 tvg-id="PE | Radio Milenia" tvg-name="PE | Radio Milenia" tvg-logo="https://cdn.webrad.io/images/logos/radios-com-pe/milenia-lima.png" group-title="EMISORAS NACIONALES", Radio Milenia 1530 AM || Lima; Perú
https://radio.pjcks.com/8020/stream
#EXTINF:-1 tvg-id="PE | Radio Independencia" tvg-name="PE | Radio Independencia" tvg-logo="https://radioindependencia.pe/images/logo.svg" group-title="EMISORAS NACIONALES", Radio Independencia 1550 AM || Lima; Perú
https://sonic.dattassd.com/8172/stream
#EXTINF:-1 tvg-id="PE | Radio Bethel" tvg-name="PE | Radio Bethel" tvg-logo="https://bethelradio.fm/images/logo-bethel.svg" group-title="EMISORAS NACIONALES", Radio Bethel 1570 AM || Lima; Perú
https://tampa.audio-stream.com/proxy/bethelra?mp=/stream
#EXTINF:-1 tvg-id="PE | RBC La Estación" tvg-name="PE | RBC La Estación" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/4/43/RBC_La_Estaci%C3%B3n_2021.svg/revision/latest/scale-to-width-down/283?cb=20220620203944&path-prefix=es" group-title="EMISORAS NACIONALES", RBC La Estación || Lima; Perú
http://dattavolt.com/8366/streamhttp://32fvhj3.257.cz/ycast/icon?id=RB_2fed376f-7ca5-47ba-a24e-5d045a475664PE32AAC+3StationRB_bc3bf0f5-abd6-413d-a6ff-9baf7bd007bbRCS
#EXTINF:-1 tvg-id="PE | Radio Cumbia Mix" tvg-name="PE | Radio Cumbia Mix" tvg-logo="https://cdn.webrad.io/images/logos/radios-com-pe/mas-91-9.png" group-title="EMISORAS NACIONALES", Radio Cumbia Mix || Lima; Perú
https://streaming.gometri.com/stream/8017/stream
#EXTINF:-1 tvg-id="PE | Radio Internacional del Perú" tvg-name="PE | Radio Internacional del Perú" tvg-logo="https://radiointernacionaldelperu.com/wp-content/uploads/2021/12/cropped-logo-riperu2.png" group-title="EMISORAS NACIONALES", Radio Internacional del Perú || Lima; Perú
https://node-03.zeno.fm/sd5dfgp4yg0uv?rj-ttl=5&rj-tok=AAABfl8IEBsA1hN8eLiCm9BwTg
#EXTINF:-1 tvg-id="PE | Radio Besame" tvg-name="PE | Radio Besame" tvg-logo="https://cdn.webrad.io/images/logos/radios-com-pe/besame.png" group-title="EMISORAS NACIONALES", Radio Bésame || Lima; Perú
https://cpliv3.onliv3.com/stream/radiobesame/stream
#EXTINF:-1 tvg-id="PE | Radio Z" tvg-name="PE | Radio Z" tvg-logo="http://i0.wp.com/www.radioz.pe/wp-content/uploads/2017/12/LOGO-EFECTO.png" group-title="EMISORAS NACIONALES", Radio Z Rock & Pop || Lima; Perú
https://cpliv3.onliv3.com/stream/radiozeta/stream
#EXTINF:-1 tvg-id="PE | Radio Nueva Ola" tvg-name="PE | Radio Nueva Ola" tvg-logo="https://3.bp.blogspot.com/-teMEWPI32SI/Wdn7PKip4FI/AAAAAAAAKzk/GDcGMICWYvoVJZU9zJEn9S75w4pf__IoACLcBGAs/s1600/nueva-ola.jpg" group-title="EMISORAS NACIONALES", Radio Nueva Ola || Lima; Perú
http://stm11.xcast.com.br:12584/stream
#EXTINF:-1 tvg-id="PE | Radio Onda Digital" tvg-name="PE | Radio Onda Digital" tvg-logo="https://static.mytuner.mobi/media/tvos_radios/pj5fuwe7gjeu.png" group-title="EMISORAS DE RADIO CON VIDEO", Radio Onda Digital || Lima; Perú
https://v4.tustreaming.cl/radioondadigitaltv/index.m3u8
#EXTINF:-1 tvg-id="EC | Radio Fabu" tvg-name="EC | Radio Fabu" tvg-logo="https://us0-cdn.onlineradiobox.com/img/l/9/29849.v4.png" group-title="EMISORAS INTERNACIONALES", Radio Fabu 105.7 FM || ECUADOR
https://d24f4m5860jcuo.cloudfront.net/fabugy.m3u8
#EXTINF:-1 tvg-id="EC | Radio Atalaya" tvg-name="EC | Radio Atalaya" tvg-logo="https://radioatalaya.net/wp-content/uploads/2017/08/cropped-LOGO-ATALAYA.png" group-title="EMISORAS INTERNACIONALES", Radio Atalaya 680 AM || ECUADOR
https://streaming.ecuastreaming.com/9978/stream
#EXTINF:-1 tvg-id="EC | Radio Sucre" tvg-name="EC | Radio Sucre" tvg-logo="https://radiosucre.com.ec/wp-content/uploads/2020/07/OK.png" group-title="EMISORAS INTERNACIONALES", Radio Sucre 700 AM || ECUADOR
https://streamingecuador.net:8076/radiosucre
#EXTINF:-1 tvg-id="EC | Radio Huancavilca" tvg-name="EC | Radio Huancavilca" tvg-logo="https://radiohuancavilca.com.ec/wp-content/uploads/2020/03/logo-web-huancavilca.png" group-title="EMISORAS INTERNACIONALES", Radio Huancavilca 830 AM || ECUADOR
https://streamingecuador.net:7078/stream
#EXTINF:-1 tvg-id="EC | Radio Cristal" tvg-name="EC | Radio Cristal" tvg-logo="https://cdn.webrad.io/images/logos/radios-com-ec/cristal.png" group-title="EMISORAS INTERNACIONALES", Radio Cristal 870 AM || ECUADOR
http://78.47.60.149/9958/;
#EXTINF:-1 tvg-id="EC | Radio Sistema 2" tvg-name="EC | Radio Sistema 2" tvg-logo="https://cdn.webrad.io/images/logos/radios-com-ec/sistema-2-1080-am.png" group-title="EMISORAS INTERNACIONALES", Radio Sistema 2 1080 AM || ECUADOR
https://streamingecuador.net:8052/radiosistema2
#EXTINF:-1 tvg-id="EC | Radio Popular" tvg-name="EC | Radio Popular" tvg-logo="https://static.mytuner.mobi/media/tvos_radios/k2dyp3rzuap3.png" group-title="EMISORAS INTERNACIONALES", Radio Popular de Cuenca 1290 AM || ECUADOR
https://stream-50.zeno.fm/py6f6znfntzuv?zs=kYEzAzomTc-ju220HEsXzg
#EXTINF:-1 tvg-id="EC | Radio Soberana 98.7 FM" tvg-name="EC | Radio Soberana 98.7 FM" tvg-logo="https://play-lh.googleusercontent.com/n-g2gEIh3jnuxzDo7h4exKiEVBal8ztsjFdej0zrbtoIob1uFe2MWsoK5DA91_2Lskc=s200" group-title="EMISORAS DE RADIO CON VIDEO", Radio Soberana 98.7 FM || ECUADOR
https://cloudvideo.servers10.com:8081/8072/index.m3u8
#EXTINF:-1 tvg-id="CO | RCN Radio" tvg-name="CO | RCN Radio" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/RCN_Radio_Colombia_logo.svg/250px-RCN_Radio_Colombia_logo.svg.png" group-title="EMISORAS INTERNACIONALES", RCN Radio 93.9 FM || COLOMBIA
https://us-b4-p-e-cg11-audio.cdn.mdstrm.com/live-audio-aw/627c1c39637d89088290f64d/playlist.m3u8?listeningSessionID=641b564000df2c8b_10312435_gNFDpasb__0000004weCT&downloadSessionID=0&aid=6271a4d5d206c3172f3c9a9c&dnt=true&pid=qgZCCtmgb1WvSzOj89obc7kYWsULjYt0&sid=CJzQwkQ3Io0b0Xes0dWJBqZ6d8v2OP71&uid=prXB5zSZ2xeIGlP8C27uDF2cTjJgV7mh&es=us-b4-p-e-cg11-audio.cdn.mdstrm.com&ote=1689911983863&ot=MppR9VPzMzImd1o3tfASRg&proto=https&pz=us&cP=128000&awCollectionId=6271a4d5d206c3172f3c9a9c&aw_0_1st.playerId=lightning-player&liveId=627c1c39637d89088290f64d&propertyName=lightning-player&propertyType=web-&listenerId=prXB5zSZ2xeIGlP8C27uDF2cTjJgV7mh
#EXTINF:-1 tvg-id="CO | La FM" tvg-name="CO | La FM" tvg-logo="https://dnqt2wx2urq99.cloudfront.net/ondirectv/LOGOS/Canales/PE/992.png" group-title="EMISORAS INTERNACIONALES", La FM 94.9 FM || COLOMBIA
https://us-b4-p-e-cg11-audio.cdn.mdstrm.com/live-audio/6271a4d5d206c3172f3c9a9c/632c9b23d1dcd7027f32f7fe/playlist.m3u8?aid=6271a4d5d206c3172f3c9a9c&dnt=true&uid=CGTcWnMdeb6oxfGxJxV0BdYRsXjK4lHp&sid=r7bgeKbdce7kYiLuz1M7qdvM3RdgyhbC&pid=BWEIy7Vwb8RcoZlkfLc6ELHW0wtfi7jq&es=us-b4-p-e-cg11-audio.cdn.mdstrm.com&ote=1689912993482&ot=4zCRqrQGZhesy4HpVGzAYw&proto=https&pz=us&cP=128000
#EXTINF:-1 tvg-id="CO | W Radio" tvg-name="CO | W Radio" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/W_Radio_Colombia_logo.svg/225px-W_Radio_Colombia_logo.svg.png" group-title="EMISORAS INTERNACIONALES", W Radio 99.9 FM || COLOMBIA
https://27323.live.streamtheworld.com/WRADIOAAC.aac
#EXTINF:-1 tvg-id="CO | Radio Caracol" tvg-name="CO | Radio Caracol" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Caracol_Radio_logo.svg/1280px-Caracol_Radio_logo.svg.png" group-title="EMISORAS INTERNACIONALES", Radio Caracol 100.9 FM || COLOMBIA
https://27383.live.streamtheworld.com/CARACOL_RADIOAAC_SC?csegid=2000
#EXTINF:-1 tvg-id="CO | Radio La Cariñosa" tvg-name="CO | Radio La Cariñosa" tvg-logo="https://cdn.colombia.com/canales/la-carinosa-5068-v2.webp" group-title="EMISORAS INTERNACIONALES", Radio La Cariñosa 610 AM || COLOMBIA
https://us-b4-p-e-pb13-audio.cdn.mdstrm.com/live-audio-aw/632c9c3d202d6801a3178028/playlist.m3u8?listeningSessionID=646ef88900a9f392_4831858_DhmlEiXZ__0000005rx5R&downloadSessionID=0&aid=6271a4d5d206c3172f3c9a9c&dnt=true&uid=CGTcWnMdeb6oxfGxJxV0BdYRsXjK4lHp&sid=r7bgeKbdce7kYiLuz1M7qdvM3RdgyhbC&pid=K25Bhhges8xl0nTSNJmEYV7KUdfJcYh2&es=us-b4-p-e-pb13-audio.cdn.mdstrm.com&ote=1689912443059&ot=HEBn8jJTNhTRbRu7dSKFvQ&proto=https&pz=us&cP=128000&awCollectionId=6271a4d5d206c3172f3c9a9c&aw_0_1st.playerId=lightning-player&liveId=632c9c3d202d6801a3178028&referer=https%3A%2F%2Fwww.colombia.com%2F&propertyName=lightning-player&propertyType=web-app&propertyVersion=v0.0.199&listenerId=CGTcWnMdeb6oxfGxJxV0BdYRsXjK4lHp
#EXTINF:-1 tvg-id="CO | Antena 2 Radio" tvg-name="CO | Antena 2 Radio" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Antena_2_logo.svg/225px-Antena_2_logo.svg.png" group-title="EMISORAS INTERNACIONALES", Antena 2 Radio 650 AM || COLOMBIA
https://us-b4-p-e-zs14-audio.cdn.mdstrm.com/live-audio-aw/632c9b439234f869e9a50e2b/playlist.m3u8?aid=6271a4d5d206c3172f3c9a9c&dnt=true&uid=34B3JzJ6IfJ8EtVMd3x4xZGtDY39fx10&sid=TUJaBb8fc7qLkdhqfMCGL7VT9zM8RnjU&pid=QIoxr4HtTIngEnPmpAQBmI5RFFrwX3fM&es=us-b4-p-e-zs14-audio.cdn.mdstrm.com&ote=1689912234284&ot=vGK9OMAlSTKwigqS7Z7RIg&proto=https&pz=us&cP=128000&awCollectionId=6271a4d5d206c3172f3c9a9c&aw_0_1st.playerId=lightning-player&liveId=632c9b439234f869e9a50e2b&referer=https%3A%2F%2Fwww.colombia.com%2F&propertyName=lightning-player&propertyType=web-app&propertyVersion=v0.0.199&listenerId=34B3JzJ6IfJ8EtVMd3x4xZGtDY39fx10
#EXTINF:-1 tvg-id="CO | Radio Años Maravillosos" tvg-name="CO | Radio Años Maravillosos" tvg-logo="https://wordpress.rcnmundo.com/wp-content/uploads/2015/08/BOTON_A_MARAVILLOSOS.webp" group-title="EMISORAS INTERNACIONALES", Radio Años Maravillosos 1340 AM || COLOMBIA
https://us-b4-p-e-cg11-audio.cdn.mdstrm.com/live-audio-aw/632ceb3b50052d08bd154f88/playlist.m3u8?listeningSessionID=641b564000df2c8b_10307214_aOXb7z3O__0000004w6xU&downloadSessionID=0&aid=6271a4d5d206c3172f3c9a9c&dnt=true&uid=CGTcWnMdeb6oxfGxJxV0BdYRsXjK4lHp&sid=KNgwjESFjpKFRtRLPF8hrzXl5Ix19XJu&pid=xa6H7KEk63blAMp3sI0OQbmZvFNVXdIa&es=us-b4-p-e-cg11-audio.cdn.mdstrm.com&ote=1689906763357&ot=j6hStEFun755wUXYAmcTFw&proto=https&pz=us&cP=128000&awCollectionId=6271a4d5d206c3172f3c9a9c&aw_0_1st.playerId=lightning-player&liveId=632ceb3b50052d08bd154f88&referer=https%3A%2F%2Fwww.colombia.com%2F&propertyName=lightning-player&propertyType=web-app&propertyVersion=v0.0.199&listenerId=CGTcWnMdeb6oxfGxJxV0BdYRsXjK4lHp
#EXTINF:-1 tvg-id="VE | Unión Radio" tvg-name="VE | Unión Radio" tvg-logo="https://static.mytuner.mobi/media/tvos_radios/48s2CFcwQF.png" group-title="EMISORAS INTERNACIONALES", Unión Radio || VENEZUELA
https://acp4.lorini.net/proxy/ur2080?mp=/stream
#EXTINF:-1 tvg-id="VE | La Radio del Sur" tvg-name="VE | La Radio del Sur" tvg-logo="http://www.laradiodelsur.com.ve/wp-content/uploads/2020/03/c300.png" group-title="EMISORAS INTERNACIONALES", La Radio del Sur || VENEZUELA
http://190.202.130.61:8000/lrds
#EXTINF:-1 tvg-id="BO | Radio Estelar" tvg-name="BO | Radio Estelar" tvg-logo="https://cdn.webrad.io/images/logos/radios-com-bo/estelar-fm-92-5.png" group-title="EMISORAS INTERNACIONALES", Radio Estelar 92.5 FM || BOLIVIA
https://turadioweb.net/radio/8070/radio
#EXTINF:-1 tvg-id="BO | Radio Panamericana 96.1 FM" tvg-name="BO | Radio Panamericana 96.1 FM" tvg-logo="https://www.panamericana.bo/media/radiopanamerica/images/2021/01/01/2021010100000073897.png" group-title="EMISORAS INTERNACIONALES", Radio Panamericana 96.1 FM || BOLIVIA
https://node-10.zeno.fm/8n08k00zveruv?rj-ttl=5&aw_0_req_lsid=d3eb6028b1b90c267d3cbbc22c579110&acu-uid=630572328206&bsw-uid=1c193f44-9191-4b67-8b70-9a52bce372e6&cto-uid=bea7dd87-5a33-45a7-acad-c6a42ee0ccd2-61b426c0-5045&adt-uid=cuid_8ce542d3-5b27-11ec-8553-12
#EXTINF:-1 tvg-id="AR | Radio Mitre" tvg-name="AR | Radio Mitre" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Logo_Mitre_SA.svg/1200px-Logo_Mitre_SA.svg.png" group-title="EMISORAS INTERNACIONALES", Radio Mitre 790 AM || ARGENTINA
https://22203.live.streamtheworld.com/AM790_56AAC.aac?dist=radiomitre_webplayer&autoplay=0&tdsdk=js-2.9&swm=true&pname=TDSdk&pversion=2.9&banners=none&burst-time=15&sbmid=2db63805-11b9-4e73-f947-309fb7963469
#EXTINF:-1 tvg-id="CR | Teletica Radio" tvg-name="CR | Teletica Radio" tvg-logo="https://cdn.webrad.io/images/logos/radios-co-cr/teletica.png" group-title="EMISORAS INTERNACIONALES", Teletica Radio || COSTA RICA
https://g2qd375ol7an-hls-live.5centscdn.com/Radio/eae835e83c0494a376229f254f7d3392.sdp/chunks.m3u8
#EXTINF:-1 tvg-id="NI | La Buenísima 93.1 FM" tvg-name="NI | La Buenísima 93.1 FM" tvg-logo="https://dah75mnh595dg.cloudfront.net/wp-content/uploads/sites/17/2021/10/05143231/La-Buenisima-1-300x300.png" group-title="EMISORAS INTERNACIONALES", La Buenísima 93.1 FM || NICARAGUA
https://cootv.cootel.com.ni:8095/Radio_LaBuenisima/playlist.m3u8
#EXTINF:-1 tvg-id="NI | La Picosa 97.9 FM" tvg-name="NI | La Picosa 97.9 FM" tvg-logo="https://radionicaragua.net/sites/default/files/styles/player_image/public/2022-07/La%252520Picosa%25252097.9FM.png.webp?itok=TAafnu8S" group-title="EMISORAS INTERNACIONALES", La Picosa 97.9 FM || NICARAGUA
https://cootv.cootel.com.ni:8095/Radio_LaPicosa/playlist.m3u8
#EXTINF:-1 tvg-id="NI | Romántica 98.7 FM" tvg-name="NI | Romántica 98.7 FM" tvg-logo="https://dah75mnh595dg.cloudfront.net/wp-content/uploads/sites/17/2021/10/04123733/Romantica-300x300.png" group-title="EMISORAS INTERNACIONALES", Romántica 98.7 FM || NICARAGUA
https://cootv.cootel.com.ni:8095/Radio_Romantica/playlist.m3u8
#EXTINF:-1 tvg-id="GT | Fabuestéreo FM" tvg-name="GT | Fabuestéreo FM" tvg-logo="https://static.mytuner.mobi/media/tvos_radios/8G5gWG6Jqx.jpg" group-title="EMISORAS INTERNACIONALES", Fabuestéreo 88.1 FM || GUATEMALA
https://node-21.zeno.fm/9qt3nd2te0quv?rj-ttl=5&rj-tok=AAABfUMw5CwAR6Q_asRITIsfxg
#EXTINF:-1 tvg-id="GT | Emisoras Unidas" tvg-name="GT | Emisoras Unidas" tvg-logo="https://emisorasunidas.com/wp-content/uploads/2020/12/logo-full-emisoras-unidas-190x60-1.png" group-title="EMISORAS INTERNACIONALES", Radio Emisoras Unidas || GUATEMALA
https://node-32.zeno.fm/eypgq8m08wquv?rj-ttl=5&rj-tok=AAABfUARHM4Akpk-cHiz5aAFGQ
#EXTINF:-1 tvg-id="GT | Radio Joya" tvg-name="GT | Radio Joya" tvg-logo="https://cdn.webrad.io/images/logos/emisoras-com-gt/joya-guatemala.png" group-title="EMISORAS INTERNACIONALES", Radio Joya 92.9 FM || GUATEMALA
https://radios-gt.cdn.nedmedia.io/radios/gt/joya.m3u8
#EXTINF:-1 tvg-id="GT | Romántica 105.3 FM" tvg-name="GT | Romántica 105.3 FM" tvg-logo="https://static.mytuner.mobi/media/tvos_radios/bfkegbmpkwmv.jpg" group-title="EMISORAS INTERNACIONALES", Romántica 105.3 FM || GUATEMALA
http://54.39.106.215:9314/;
#EXTINF:-1 tvg-id="GT | Radio Panamericana 1030 AM" tvg-name="GT | Radio Panamericana 1030 AM" tvg-logo="https://cdn-profiles.tunein.com/s138009/images/logod.png?t=156821" group-title="EMISORAS INTERNACIONALES", Radio Panamericana 1030 AM || GUATEMALA
http://server3.sit-mexico.com:8011/live
#EXTINF:-1 tvg-id="GT | Recuerdo Stereo 101.9 FM Sacatepequez" tvg-name="GT | Recuerdo Stereo 101.9 FM Sacatepequez" tvg-logo="https://www.medios.gt/galeriausuarios/mediosg7sm/imagenesmessage/imagem100529224717960.jpg" group-title="EMISORAS INTERNACIONALES", Recuerdo Stereo 101.9 FM Sacatepequez || GUATEMALA
https://cloudstream2032.conectarhosting.com/8300/stream
#EXTINF:-1 tvg-id="SV | Radio YSKL" tvg-name="SV | Radio YSKL" tvg-logo="https://s3.amazonaws.com/cdn.radionewproject.com/f522f60ef27b6593e8d03be1e4944dac.jpg" group-title="EMISORAS INTERNACIONALES", Radio YSKL 104.1 FM y 770 AM || EL SALVADOR
https://media.dominiocreativo.com/radioyskl
#EXTINF:-1 tvg-id="MX | Radio México Internacional" tvg-name="MX | Radio México Internacional" tvg-logo="https://dbs.radioline.fr/pictures/radio_77ffed9be8fe88f1a6b4fc56810bb64e/logo200.jpg?size=600" group-title="EMISORAS INTERNACIONALES", Radio México Internacional || MEXICO
https://s2.mexside.net/8020/stream
#EXTINF:-1 tvg-id="USA | Red de Radiodifusión Bíblica" tvg-name="USA | Red de Radiodifusión Bíblica" tvg-logo="https://bbn1.bbnradio.org/spanish/wp-content/uploads/sites/5/2020/12/50thLogoSP.png" group-title="EMISORAS INTERNACIONALES", BBN (Bible Broadcasting Network) Radio || ESTADOS UNIDOS
https://audio-edge-es6pf.mia.g.radiomast.io/475ebed1-595e-4717-b888-64fe8fc6b09f
#EXTINF:-1 tvg-id="DO | Amor FM" tvg-name="D0 | Amor FM" tvg-logo="https://cdn.webrad.io/images/logos/radios-com-do/amor.png" group-title="EMISORAS INTERNACIONALES", Amor 91.9 FM || REPUBLICA DOMINICANA
http://radio.domiplay.net:9190/stream/1/
#EXTINF:-1 tvg-id="DO | La Voz de María Radio" tvg-name="D0 | La Voz de María Radio" tvg-logo="http://lavozdemariaradio.com/wp-content/uploads/2022/10/cropped-logo-lvm-radio-200.png" group-title="EMISORAS INTERNACIONALES", La Voz de María Radio || REPUBLICA DOMINICANA
https://cast3.asurahosting.com/proxy/luis12/stream?mp=/1;&1679264623993
#EXTINF:-1 tvg-id="DO | Radio Vida" tvg-name="D0 | Radio Vida" tvg-logo="https://cdn.onlineradiobox.com/img/l/8/34128.v2.png" group-title="EMISORAS INTERNACIONALES", Radio Vida 105.3 FM || REPUBLICA DOMINICANA
http://paginas.moisespaulino.com:8036/stream?type=.mp3
#EXTINF:-1 tvg-id="ES | NSE (Nuestra Señora del Encuentro con Dios) Radio" tvg-name="ES | NSE (Nuestra Señora del Encuentro con Dios) Radio" tvg-logo="https://public-rf-upload.minhawebradio.net/166842/cover/73f0ce5e8eab2e197fc683cb50d7b20b.jpg" group-title="EMISORAS INTERNACIONALES", NSE Radio || ESPAÑA
https://evcast.mediacp.eu:2060/stream
#EXTINF:-1 tvg-id="ES | Melodía 60 Radio" tvg-name="ES | Melodía 60 Radio" tvg-logo="https://play-lh.googleusercontent.com/WrMg6XsDM5oL4FHNVmnYPCX_QOKgPci93vVTQN0f1q1oeFrgpUu0EjyB3pj0GIu_A7U" group-title="EMISORAS INTERNACIONALES", Melodía 60 Radio || ESPAÑA
https://server1.streamingradio.online/proxy/radio1/stream
#EXTINF:-1 tvg-id="FR | Radio Francia Internacional" tvg-name="FR | Radio Francia Internacional" tvg-logo="https://dnqt2wx2urq99.cloudfront.net/ondirectv/LOGOS/Canales/PE/984.png" group-title="EMISORAS INTERNACIONALES", Radio Francia Internacional || FRANCIA
https://rfienespagnol64k.ice.infomaniak.ch/rfienespagnol-64.mp3
#EXTINF:-1 tvg-id="CA | Stingray Music Classic Rock" tvg-name="CA | Stingray Music Classic Rock" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stingray_Digital.svg/252px-Stingray_Digital.svg.png" group-title="CANALES DE AUDIO", Stingray Music Classic Rock
https://stirr.ott-channels.stingray.com/101/master.m3u8
#EXTINF:-1 tvg-id="CA | Stingray Music Greatest Hits" tvg-name="CA | Stingray Music Greatest Hits" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stingray_Digital.svg/252px-Stingray_Digital.svg.png" group-title="CANALES DE AUDIO", Stingray Music Greatest Hits
https://stirr.ott-channels.stingray.com/155/master.m3u8
#EXTINF:-1 tvg-id="CA | Stingray Music Hit List" tvg-name="CA | Stingray Music Hit List" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stingray_Digital.svg/252px-Stingray_Digital.svg.png" group-title="CANALES DE AUDIO", Stingray Music Hit List
https://stirr.ott-channels.stingray.com/107/master.m3u8
#EXTINF:-1 tvg-id="CA | Stingray Music Hot Country" tvg-name="CA | Stingray Music Hot Country" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stingray_Digital.svg/252px-Stingray_Digital.svg.png" group-title="CANALES DE AUDIO", Stingray Music Hot Country
https://stirr.ott-channels.stingray.com/108/master.m3u8
#EXTINF:-1 tvg-id="CA | Stingray Music Éxitos del momento" tvg-name="CA | Stingray Music Éxitos del momento" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stingray_Digital.svg/252px-Stingray_Digital.svg.png" group-title="CANALES DE AUDIO", Stingray Music Éxitos del momento
https://stirr.ott-channels.stingray.com/190/master.m3u8
#EXTINF:-1 tvg-id="CA | Stingray Music Hip-Hop/R&B" tvg-name="CA | Stingray Music Hip-Hop/R&B" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stingray_Digital.svg/252px-Stingray_Digital.svg.png" group-title="CANALES DE AUDIO", Stingray Music Hip-Hop/R&B
https://stirr.ott-channels.stingray.com/133/master.m3u8
#EXTINF:-1 tvg-id="CA | Stingray Music Soul Storm" tvg-name="CA | Stingray Music Soul Storm" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stingray_Digital.svg/252px-Stingray_Digital.svg.png" group-title="CANALES DE AUDIO", Stingray Music Soul Storm
https://stirr.ott-channels.stingray.com/134/master.m3u8
#EXTINF:-1 tvg-id="CA | Stingray Music Flashback 70's" tvg-name="CA | Stingray Music Flashback 70's" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stingray_Digital.svg/252px-Stingray_Digital.svg.png" group-title="CANALES DE AUDIO", Stingray Music Flashback 70's
https://ott-linear-channels.stingray.com/hls/stirr/115.m3u8
#EXTINF:-1 tvg-id="CA | Stingray Music Remember The 80's" tvg-name="CA | Stingray Music Remember The 80's" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stingray_Digital.svg/252px-Stingray_Digital.svg.png" group-title="CANALES DE AUDIO", Stingray Music Remember The 80's
https://stirr.ott-channels.stingray.com/128/master.m3u8
#EXTINF:-1 tvg-id="CA | Stingray Music Pop Adult" tvg-name="CA | Stingray Music Pop Adult" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stingray_Digital.svg/252px-Stingray_Digital.svg.png" group-title="CANALES DE AUDIO", Stingray Music Pop Adult
https://ott-linear-channels.stingray.com/hls/stirr/104.m3u8
#EXTINF:-1 tvg-id="CA | Stingray Music Rock Alternative" tvg-name="CA | Stingray Music Rock Alternative" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stingray_Digital.svg/252px-Stingray_Digital.svg.png" group-title="CANALES DE AUDIO", Stingray Music Rock Alternative
https://ott-linear-channels.stingray.com/hls/stirr/102.m3u8
#EXTINF:-1 tvg-id="CA | Stingray Music Today's Latin Pop" tvg-name="CA | Stingray Music Today's Latin Pop" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stingray_Digital.svg/252px-Stingray_Digital.svg.png" group-title="CANALES DE AUDIO", Stingray Music Today's Latin Pop
https://ott-linear-channels.stingray.com/hls/stirr/190.m3u8
#EXTINF:-1 tvg-id="CA | Stingray Music Urban Beats" tvg-name="CA | Stingray Music Urban Beats" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stingray_Digital.svg/252px-Stingray_Digital.svg.png" group-title="CANALES DE AUDIO", Stingray Music Urban Beats
https://ott-linear-channels.stingray.com/hls/stirr/133.m3u8
#EXTINF:-1 tvg-id="CA | Stingray Music Djazz" tvg-name="CA | Stingray Music Djazz" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stingray_Digital.svg/252px-Stingray_Digital.svg.png" group-title="CANALES DE VIDEO", Stingray Music Djazz
https://dai.google.com/linear/hls/event/C-lfmhUVTGeDNWwU13_EgA/master.m3u8
#EXTINF:-1 tvg-id="CA | Stingray Music Classica" tvg-name="CA | Stingray Music Classica" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stingray_Digital.svg/252px-Stingray_Digital.svg.png" group-title="CANALES DE VIDEO", Stingray Music Classica
https://dai.google.com/linear/hls/event/AaFxJXOhQl-BsTVC9OCunQ/master.m3u8
#EXTINF:-1 tvg-id="PE | Música Libre" tvg-name="PE | Música Libre" tvg-logo="https://static.vecteezy.com/system/resources/previews/000/586/196/original/headphone-music-note-logo-vector-illustration.jpg" group-title="CANALES DE AUDIO", Música Libre
https://cloudvideo.servers10.com:8081/8010/index.m3u8
#EXTM3U 
#EXTINF:-1 tvg-id="156" tvg-name="+ Listas en M3U.CL" tvg-logo="https://cdn.m3u.cl/logo/156___Listas_en_M3U_CL.png", + Listas en M3U.CL ✪ | CL
https://scl.edge.grupoz.cl/transmision/live/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1509" tvg-name="Peruvisual" tvg-logo="https://cdn.m3u.cl/logo/1509_Peruvisual.png", Peruvisual ✪ | PE
https://stmv5.voxtvhd.com.br/peruvisual/peruvisual/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="692" tvg-name="Best Cable Sports" tvg-logo="https://cdn.m3u.cl/logo/692_Best_Cable_Sports.png", Best Cable Sports | PE
https://ca2.inka.net.pe/Best-sport-000000111/index.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1179" tvg-name="Contacto Deportivo" tvg-logo="https://cdn.m3u.cl/logo/1179_Contacto_Deportivo.png", Contacto Deportivo | PE
https://live.obslivestream.com/cdeportivo/video.m3u8?token=ckPPAmBEYJtkr0&PlaylistM3UCL
#EXTINF:-1 tvg-id="38" tvg-name="Best Cable Music" tvg-logo="https://cdn.m3u.cl/logo/38_Best_Cable_Music.jpg", Best Cable Music | PE
https://mi.godo.net.pe/best-Music-00112000050/index.m3u8?token=e0a18bf6735f8e15846914ed33e6ca41deb7efaf-e2c72e45701a92d4e8a3c20a03ecc95a-1696000579-1695989779&PlaylistM3UCL
#EXTINF:-1 tvg-id="41" tvg-name="Hatun TV" tvg-logo="https://cdn.m3u.cl/logo/41_Hatun_TV.jpg", Hatun TV | PE
https://mi.godo.net.pe/Best00Hatum-0032101002/index.m3u8?token=bac16f8fe1d988a82e2077bfca45e1a29eab1d09-20fd168079ba17eb3f588267bdb38172-1696000662-1695989862&PlaylistM3UCL
#EXTINF:-1 tvg-id="40" tvg-name="Mas Cumbia" tvg-logo="https://cdn.m3u.cl/logo/40_Mas_Cumbia.png", Mas Cumbia | PE
https://mi.godo.net.pe/best-MasCum-0102210011/index.m3u8?token=f749c69e1bb169e24049c4c557e65899ba0718bc-df0876db1acf2e21cb925551f116726f-1696000627-1695989827&PlaylistM3UCL
#EXTINF:-1 tvg-id="471" tvg-name="Memorias TV" tvg-logo="https://cdn.m3u.cl/logo/471_Memorias_TV.png", Memorias TV | PE
https://mediacp.us:8081/8002/index.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="771" tvg-name="Mundo de la Musica TV" tvg-logo="https://cdn.m3u.cl/logo/771_Mundo_de_la_Musica_TV.png", Mundo de la Musica TV | CL
https://tv.streaming-chile.com:1936/mundodelamusicatv/mundodelamusicatv/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1092" tvg-name="Planeta TV" tvg-logo="https://cdn.m3u.cl/logo/1092_Planeta_TV.png", Planeta TV | PE
https://live.obslivestream.com/planetatv/index.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1471" tvg-name="Ritmos Peru" tvg-logo="https://cdn.m3u.cl/logo/1471_Ritmos_Peru.png", Ritmos Peru | PE
https://servilive.com:3791/live/ritmosperulive.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="35" tvg-name="TOP Latino TV" tvg-logo="https://cdn.m3u.cl/logo/35_TOP_Latino_TV.png", TOP Latino TV | PE
https://5cefcbf58ba2e.streamlock.net:543/tltvweb/latin-tv.stream/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="43" tvg-name="Turbo Mix TV" tvg-logo="https://cdn.m3u.cl/logo/43_Turbo_Mix_TV.png", Turbo Mix TV | PE
https://7.innovatestream.pe:19360/turbomixoficial/turbomixoficial.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="876" tvg-name="Vision Musica TV" tvg-logo="https://cdn.m3u.cl/logo/876_Vision_Musica_TV.png", Vision Musica TV | PE
https://multimedia.tmcreativos.com:1936/visionmusica/visionmusica/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="684" tvg-name="Nativa" tvg-logo="https://cdn.m3u.cl/logo/684_Nativa.png", Nativa | PE
https://oneplay.iptvperu.tv:1936/static/nativa1.stream/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="969" tvg-name="Onda Digital TV" tvg-logo="https://cdn.m3u.cl/logo/969_Onda_Digital_TV.png", Onda Digital TV | PE
https://v4.tustreaming.cl:443/ondadigitaltv/index.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="705" tvg-name="TV Peru Noticias" tvg-logo="https://cdn.m3u.cl/logo/705_TV_Peru_Noticias.png", TV Peru Noticias | PE
https://d10tjjjvbn1fcu.cloudfront.net/out/v1/902c1a0395264f269f1160efa00660e4/index.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="694" tvg-name="Antares TV" tvg-logo="https://cdn.m3u.cl/logo/694_Antares_TV.png", Antares TV | PE
https://5c3fb01839654.streamlock.net:1963/iptvantares/liveantarestv/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1065" tvg-name="ATV" tvg-logo="https://cdn.m3u.cl/logo/1065_ATV.png", ATV | PE
https://d3krdjs7is1y42.cloudfront.net/ATVpe/df13ed57843877b21ad969184ab6888f.sdp/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1492" tvg-name="ATV Sur" tvg-logo="https://cdn.m3u.cl/logo/1492_ATV_Sur.png", ATV Sur | PE
https://d3krdjs7is1y42.cloudfront.net/ATVSur/f05b236d4a4d43b3987d6f5ed5686d6e.sdp/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1066" tvg-name="ATV+" tvg-logo="https://cdn.m3u.cl/logo/1066_ATV_.png", ATV+ | PE
https://d3krdjs7is1y42.cloudfront.net/ATVmas/74ee4169b59e6f987ae3d77317309109.sdp/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1089" tvg-name="Autentica TV" tvg-logo="https://cdn.m3u.cl/logo/1089_Autentica_TV.png", Autentica TV | PE
https://live.obslivestream.com/autenticatvmux/index.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1088" tvg-name="Best Cable TV" tvg-logo="https://cdn.m3u.cl/logo/1088_Best_Cable_TV.png", Best Cable TV | PE
https://mi.godo.net.pe/BesTv-001120000100/index.m3u8?token=96c33c537c690c7e39aad2b7c54374e6ba47cdfc-dd4159a98a84e1810a54706ce10e3a13-1696000320-1695989520&PlaylistM3UCL
#EXTINF:-1 tvg-id="695" tvg-name="BHTV" tvg-logo="https://cdn.m3u.cl/logo/695_BHTV.png", BHTV | PE
https://5c3fb01839654.streamlock.net:1963/iptvbhtv/livebhtvtv/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1097" tvg-name="Canal 8 Catacaos" tvg-logo="https://cdn.m3u.cl/logo/1097_Canal_8_Catacaos.png", Canal 8 Catacaos | PE
https://live.obslivestream.com/canal8/index.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1188" tvg-name="Controversia TV" tvg-logo="https://cdn.m3u.cl/logo/1188_Controversia_TV.png", Controversia TV | PE
https://live.obslivestream.com/controversiatv/index.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1180" tvg-name="CR TV" tvg-logo="https://cdn.m3u.cl/logo/1180_CR_TV.png", CR TV | PE
https://live.obslivestream.com/crtvmux/index.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="696" tvg-name="Cultura 24 TV" tvg-logo="https://cdn.m3u.cl/logo/696_Cultura_24_TV.png", Cultura 24 TV | PE
https://vs8.live.opencaster.com/cultura24/smil:cultura24/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="978" tvg-name="DMJ" tvg-logo="https://cdn.m3u.cl/logo/978_DMJ.png", DMJ | PE
https://stmv1.voxhdnet.com/dmjsurtv/dmjsurtv/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1256" tvg-name="Doble C TV" tvg-logo="https://cdn.m3u.cl/logo/1256_Doble_C_TV.png", Doble C TV | PE
https://7.innovatestream.pe:19360/cctvchupaca/cctvchupaca.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="691" tvg-name="Exitosa" tvg-logo="https://cdn.m3u.cl/logo/691_Exitosa.jpg", Exitosa | PE
https://streamtv.onliv3.online:1936/exito-tv/exito-tv/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1093" tvg-name="Genios TV" tvg-logo="https://cdn.m3u.cl/logo/1093_Genios_TV.png", Genios TV | PE
https://live.obslivestream.com/geniostvmux/index.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="697" tvg-name="Hechicera TV" tvg-logo="https://cdn.m3u.cl/logo/697_Hechicera_TV.png", Hechicera TV | PE
https://video.misistemareseller.com:443/corporationhc/corporationhc/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="690" tvg-name="JN19" tvg-logo="https://cdn.m3u.cl/logo/690_JN19.png", JN19 | PE
https://servilive.com:3028/live/jntv19live.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1190" tvg-name="Master Television" tvg-logo="https://cdn.m3u.cl/logo/1190_Master_Television.png", Master Television | PE
https://tv.ondadigital.pe:1936/master/master/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="689" tvg-name="Mega TV" tvg-logo="https://cdn.m3u.cl/logo/689_Mega_TV.png", Mega TV | PE
https://hls.servidor.stream/storage/megatv.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1491" tvg-name="Mega TV Jaen" tvg-logo="https://cdn.m3u.cl/logo/1491_Mega_TV_Jaen.png", Mega TV Jaen | PE
https://7.innovatestream.pe:19360/megatvjaen/megatvjaen.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1095" tvg-name="OK TeVe" tvg-logo="https://cdn.m3u.cl/logo/1095_OK_TeVe.png", OK TeVe | PE
https://live.obslivestream.com/oktv/video.m3u8?token=Bk-DXAXulO1OV0&PlaylistM3UCL
#EXTINF:-1 tvg-id="699" tvg-name="Ovacion" tvg-logo="https://cdn.m3u.cl/logo/699_Ovacion.png", Ovacion | PE
https://5c3fb01839654.streamlock.net:1963/iptvovacion1/liveovacion1tv/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1290" tvg-name="Palmeras TV" tvg-logo="https://cdn.m3u.cl/logo/1290_Palmeras_TV.png", Palmeras TV | PE
https://video.ingenioperu.com:3982/live/palmerastvlive.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1405" tvg-name="Peru Channel" tvg-logo="https://cdn.m3u.cl/logo/1405_Peru_Channel.png", Peru Channel | PE
https://a.cdni.live/peruchanel/peruchanel/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1187" tvg-name="Sanjuanera TV" tvg-logo="https://cdn.m3u.cl/logo/1187_Sanjuanera_TV.png", Sanjuanera TV | PE
https://live.obslivestream.com/sanjuanera/index.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1189" tvg-name="Telecolor TV" tvg-logo="https://cdn.m3u.cl/logo/1189_Telecolor_TV.png", Telecolor TV | PE
https://live.obslivestream.com/telecolormux/index.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1115" tvg-name="Tumpis TV" tvg-logo="https://cdn.m3u.cl/logo/1115_Tumpis_TV.png", Tumpis TV | PE
https://servilive.com:3531/stream/play.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="701" tvg-name="TV Cosmos 15.1" tvg-logo="https://cdn.m3u.cl/logo/701_TV_Cosmos_15_1.png", TV Cosmos 15.1 | PE
https://5790d294af2dc.streamlock.net:443/8134/8134/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1091" tvg-name="TVPE" tvg-logo="https://cdn.m3u.cl/logo/1091_TVPE.png", TVPE | PE
https://d6vls0u25arys.cloudfront.net/out/v1/777b4d4cc0984575a7d14f6ee57dbcaf/index.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="686" tvg-name="TVperuanisima" tvg-logo="https://cdn.m3u.cl/logo/686_TVperuanisima.png", TVperuanisima | PE
https://59ef525c24caa.streamlock.net/TVperuanisima/TVperuanisima/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="702" tvg-name="Unitel" tvg-logo="https://cdn.m3u.cl/logo/702_Unitel.png", Unitel | PE
https://vdo.grupolimalive.com:3365/live/unitellive.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1094" tvg-name="Uranio TV" tvg-logo="https://cdn.m3u.cl/logo/1094_Uranio_TV.png", Uranio TV | PE
https://live.obslivestream.com/uraniotv/index.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1191" tvg-name="Via Alto Mayo TV" tvg-logo="https://cdn.m3u.cl/logo/1191_Via_Alto_Mayo_TV.png", Via Alto Mayo TV | PE
https://live.obslivestream.com/viaaltomayomux/index.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="703" tvg-name="Via Television Tarapoto" tvg-logo="https://cdn.m3u.cl/logo/703_Via_Television_Tarapoto.png", Via Television Tarapoto | PE
https://videoserver.tmcreativos.com:19360/cablerasvia/cablerasvia.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1490" tvg-name="Vision Sur Television" tvg-logo="https://cdn.m3u.cl/logo/1490_Vision_Sur_Television.png", Vision Sur Television | PE
https://ott1.hdlatam.tv/live_abr/webtvVisionSur/playlist.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1183" tvg-name="VZ TV" tvg-logo="https://cdn.m3u.cl/logo/1183_VZ_TV.png", VZ TV | PE
https://live.obslivestream.com/vztv/index.m3u8?PlaylistM3UCL
#EXTINF:-1 tvg-id="1536" tvg-name="Sinai TV" tvg-logo="https://cdn.m3u.cl/logo/1536_Sinai_TV.png", Sinai TV | PE
https://stmv1.voxhdnet.com/segundonehemias5770/segundonehemias5770/playlist.m3u8?PlaylistM3UCL
https://stmv1.voxhdnet.com/segundonehemias5770/segundonehemias5770/playlist.m3u8?PlaylistM3UCL
`

let parseM3u = m3utojson(m3u);
