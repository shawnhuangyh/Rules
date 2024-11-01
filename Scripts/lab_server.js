var ssids = [
    'ECNU-1X'
];

ssids = '^(' + ssids.join('|') + ')$';
ssids = new RegExp(ssids);

var ssid = $network.wifi.ssid ? $network.wifi.ssid : '';  //有线网络

var ssidMatched = ssid.match(ssids);

// 如果在指定的 SSID 下 或者 路由器下发的 DNS 是 AdGuard
if (ssidMatched) {
    $done({address: "172.23.137.53"})
} else {
    $done({address: "192.168.151.2"})
}