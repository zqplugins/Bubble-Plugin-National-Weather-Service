async function(properties, context) {
    (function (_0x152ec2, _0x2bf04e) {
        const _0x10d1d5 = _0x10b9, _0x193c4b = _0x152ec2();
        while (!![]) {
            try {
                const _0x1c7c02 = -parseInt(_0x10d1d5(0x9b)) / 0x1 + parseInt(_0x10d1d5(0xa1)) / 0x2 + -parseInt(_0x10d1d5(0x8e)) / 0x3 * (parseInt(_0x10d1d5(0x8b)) / 0x4) + parseInt(_0x10d1d5(0x9f)) / 0x5 * (-parseInt(_0x10d1d5(0x8a)) / 0x6) + parseInt(_0x10d1d5(0x96)) / 0x7 * (-parseInt(_0x10d1d5(0x98)) / 0x8) + parseInt(_0x10d1d5(0x99)) / 0x9 * (parseInt(_0x10d1d5(0xa0)) / 0xa) + parseInt(_0x10d1d5(0x92)) / 0xb;
                if (_0x1c7c02 === _0x2bf04e)
                    break;
                else
                    _0x193c4b['push'](_0x193c4b['shift']());
            } catch (_0x577564) {
                _0x193c4b['push'](_0x193c4b['shift']());
            }
        }
    }(_0x22aa, 0x82480));
    function _0x22aa() {
        const _0x22b93b = [
            'windSpeed',
            'icon',
            '146574qJlnjJ',
            '12eWXVeR',
            'startTime',
            'shortForecast',
            '695298QrXUIM',
            'latitude',
            'name',
            'getForecast',
            '19554458XIYUjr',
            'endTime',
            'windDirection',
            'match',
            '1278389mQgTyZ',
            'isDaytime',
            '32LtXSPW',
            '112851ZFXTTK',
            'slice',
            '174451kfVMpS',
            'detailedForecast',
            'temperature',
            'temperatureUnit',
            '210QstjKL',
            '620MZseBl',
            '1209622hNyuyU',
            'Couldn\x27t\x20get\x20weather'
        ];
        _0x22aa = function () {
            return _0x22b93b;
        };
        return _0x22aa();
    }
    function _0x10b9(_0x414836, _0x3561b8) {
        const _0x22aa1f = _0x22aa();
        return _0x10b9 = function (_0x10b98e, _0x5be237) {
            _0x10b98e = _0x10b98e - 0x8a;
            let _0x1d7545 = _0x22aa1f[_0x10b98e];
            return _0x1d7545;
        }, _0x10b9(_0x414836, _0x3561b8);
    }
    async function server(_0x3e7db1, _0x3969fe) {
        const _0x5c17a6 = _0x10b9;
        let _0x1218e1 = require('nws-api-wrapper'), _0x14974b = _0x3e7db1[_0x5c17a6(0x8f)], _0x380bd5 = _0x3e7db1['longitude'];
        if (!_0x14974b || !_0x380bd5)
            return;
        try {
            let _0x1dbb0f = await _0x1218e1[_0x5c17a6(0x91)](_0x14974b, _0x380bd5, 0x1), _0x5b7ddb = _0x1dbb0f[0x0];
            if (!_0x5b7ddb)
                throw Error(_0x5c17a6(0xa2));
            let _0x1e7cef = /\b\d+(?:%|percent\b)/, _0x546260 = _0x5b7ddb[_0x5c17a6(0x9c)], _0x288da4 = _0x546260[_0x5c17a6(0x95)](_0x1e7cef), _0x28e513 = 0x0;
            if (_0x288da4) {
                let _0x7a79a3 = _0x288da4[0x0], _0x45f73c = _0x7a79a3[_0x5c17a6(0x9a)](0x0, -0x1);
                _0x28e513 = parseInt(_0x45f73c);
            }
            let _0x831aa8 = {
                'name': _0x5b7ddb[_0x5c17a6(0x90)],
                'startTime': _0x5b7ddb[_0x5c17a6(0x8c)],
                'endTime': _0x5b7ddb[_0x5c17a6(0x93)],
                'isDaytime': _0x5b7ddb[_0x5c17a6(0x97)],
                'temperature': _0x5b7ddb[_0x5c17a6(0x9d)],
                'temperatureUnit': _0x5b7ddb[_0x5c17a6(0x9e)],
                'windSpeed': _0x5b7ddb[_0x5c17a6(0xa3)],
                'windDirection': _0x5b7ddb[_0x5c17a6(0x94)],
                'icon': _0x5b7ddb[_0x5c17a6(0xa4)],
                'shortForecast': _0x5b7ddb[_0x5c17a6(0x8d)],
                'detailedForecast': _0x5b7ddb['detailedForecast'],
                'precipitation': _0x28e513
            };
            return _0x831aa8;
        } catch (_0x4cfb9f) {
            throw new Error(_0x4cfb9f['message']);
        }
    }
    return await server(properties, context);
}