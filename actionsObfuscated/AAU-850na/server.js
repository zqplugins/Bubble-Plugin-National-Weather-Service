async function(properties, context){
	(function (_0x24b913, _0x5c4da0) {
    const _0x4f222b = _0x583b, _0x5354ed = _0x24b913();
    while (!![]) {
        try {
            const _0x1462e8 = -parseInt(_0x4f222b(0xe3)) / 0x1 * (-parseInt(_0x4f222b(0xd9)) / 0x2) + parseInt(_0x4f222b(0xea)) / 0x3 * (parseInt(_0x4f222b(0xe9)) / 0x4) + parseInt(_0x4f222b(0xe7)) / 0x5 * (-parseInt(_0x4f222b(0xeb)) / 0x6) + parseInt(_0x4f222b(0xdc)) / 0x7 * (-parseInt(_0x4f222b(0xe6)) / 0x8) + parseInt(_0x4f222b(0xd8)) / 0x9 * (-parseInt(_0x4f222b(0xec)) / 0xa) + parseInt(_0x4f222b(0xe5)) / 0xb * (-parseInt(_0x4f222b(0xdd)) / 0xc) + parseInt(_0x4f222b(0xd7)) / 0xd * (parseInt(_0x4f222b(0xe8)) / 0xe);
            if (_0x1462e8 === _0x5c4da0)
                break;
            else
                _0x5354ed['push'](_0x5354ed['shift']());
        } catch (_0x4c170f) {
            _0x5354ed['push'](_0x5354ed['shift']());
        }
    }
}(_0x34d6, 0x2c65a));
function _0x583b(_0x6d9929, _0x22cdfc) {
    const _0x34d65e = _0x34d6();
    return _0x583b = function (_0x583bf9, _0x4bd3fa) {
        _0x583bf9 = _0x583bf9 - 0xd2;
        let _0x59a81b = _0x34d65e[_0x583bf9];
        return _0x59a81b;
    }, _0x583b(_0x6d9929, _0x22cdfc);
}
async function server(_0x57b77b, _0x1b98d7) {
    const _0x22304a = _0x583b;
    let _0x5a4f2a = require('nws-api-wrapper'), _0x2f7ff5 = _0x57b77b[_0x22304a(0xdf)], _0x5ad069 = _0x57b77b[_0x22304a(0xe4)], _0x54cf06 = _0x57b77b[_0x22304a(0xee)];
    if (!_0x2f7ff5 || !_0x5ad069 || !_0x54cf06)
        return;
    try {
        let _0x373a6a = await _0x5a4f2a[_0x22304a(0xd5)](_0x2f7ff5, _0x5ad069, 0xe), _0x35b8cd = _0x54cf06[_0x22304a(0xda)](), _0x4f833c = Infinity, _0x196890 = -0x1;
        _0x373a6a['map'](_0xaae489 => new Date(_0xaae489['startTime']))[_0x22304a(0xd4)]((_0xff354e, _0x7454cf) => {
            const _0x463083 = _0x22304a;
            let _0x2458e0 = _0xff354e[_0x463083(0xda)](), _0x38ac16 = Math[_0x463083(0xde)](_0x2458e0 - _0x35b8cd);
            _0x38ac16 < _0x4f833c && (_0x4f833c = _0x38ac16, _0x196890 = _0x7454cf);
        });
        let _0x17025b = _0x373a6a[_0x196890], _0x3cf3f2 = /\b\d+(?:%|percent\b)/, _0x51015b = _0x17025b['detailedForecast'], _0x3cc685 = _0x51015b[_0x22304a(0xd6)](_0x3cf3f2), _0x5524a1 = 0x0;
        if (_0x3cc685) {
            let _0x5221f6 = _0x3cc685[0x0], _0x4451c5 = _0x5221f6['slice'](0x0, -0x1);
            _0x5524a1 = parseInt(_0x4451c5);
        }
        let _0x586836 = {
            'name': _0x17025b['name'],
            'startTime': _0x17025b[_0x22304a(0xd2)],
            'endTime': _0x17025b[_0x22304a(0xe1)],
            'isDaytime': _0x17025b[_0x22304a(0xf0)],
            'temperature': _0x17025b[_0x22304a(0xef)],
            'temperatureUnit': _0x17025b[_0x22304a(0xdb)],
            'windSpeed': _0x17025b['windSpeed'],
            'windDirection': _0x17025b['windDirection'],
            'icon': _0x17025b[_0x22304a(0xe2)],
            'shortForecast': _0x17025b[_0x22304a(0xe0)],
            'detailedForecast': _0x17025b[_0x22304a(0xd3)],
            'precipitation': _0x5524a1
        };
        return _0x586836;
    } catch (_0x465b7d) {
        throw new Error(_0x465b7d[_0x22304a(0xed)]);
    }
}
function _0x34d6() {
    const _0x4714aa = [
        'startTime',
        'detailedForecast',
        'forEach',
        'getForecast',
        'match',
        '6452043XuEABI',
        '270iREoVj',
        '158ujbZEc',
        'getTime',
        'temperatureUnit',
        '154IgIFcd',
        '1518768eGbJvr',
        'abs',
        'latitude',
        'shortForecast',
        'endTime',
        'icon',
        '4135XXoRsY',
        'longitude',
        '22MNBZNI',
        '3056yHhMMk',
        '15PYhjux',
        '14rBYDwC',
        '70732Krsyhr',
        '33qTDWFG',
        '662514PeXUGq',
        '80950zccvFm',
        'message',
        'date',
        'temperature',
        'isDaytime'
    ];
    _0x34d6 = function () {
        return _0x4714aa;
    };
    return _0x34d6();
}
	return await server(properties, context);
}