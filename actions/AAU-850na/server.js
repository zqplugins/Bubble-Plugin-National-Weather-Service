async function(properties, context) {
    (function (_0x31c113, _0x27b20d) {
        const _0x50924f = _0x5ab6, _0x2d3eef = _0x31c113();
        while (!![]) {
            try {
                const _0x39b091 = parseInt(_0x50924f(0x173)) / 0x1 * (-parseInt(_0x50924f(0x171)) / 0x2) + parseInt(_0x50924f(0x176)) / 0x3 + -parseInt(_0x50924f(0x167)) / 0x4 * (parseInt(_0x50924f(0x165)) / 0x5) + -parseInt(_0x50924f(0x15e)) / 0x6 * (parseInt(_0x50924f(0x16d)) / 0x7) + parseInt(_0x50924f(0x15d)) / 0x8 + -parseInt(_0x50924f(0x162)) / 0x9 * (parseInt(_0x50924f(0x166)) / 0xa) + -parseInt(_0x50924f(0x174)) / 0xb * (-parseInt(_0x50924f(0x15a)) / 0xc);
                if (_0x39b091 === _0x27b20d)
                    break;
                else
                    _0x2d3eef['push'](_0x2d3eef['shift']());
            } catch (_0x3aeda7) {
                _0x2d3eef['push'](_0x2d3eef['shift']());
            }
        }
    }(_0x1d71, 0x8daed));
    function _0x1d71() {
        const _0x5b5eed = [
            'longitude',
            'name',
            '940yeqiuc',
            '80SzWExQ',
            '16628TcGBMV',
            'abs',
            'getTime',
            'isDaytime',
            'endTime',
            'date',
            '45094aheCvS',
            'icon',
            'map',
            'forEach',
            '2NZteBq',
            'getForecast',
            '960442vBQzCs',
            '1840949NFrhdS',
            'temperature',
            '1039956sxFOjO',
            'startTime',
            '180axHGSs',
            'detailedForecast',
            'match',
            '6515536XFyVoD',
            '444gawTOA',
            'windSpeed',
            'message',
            'temperatureUnit',
            '981540HlEKWG'
        ];
        _0x1d71 = function () {
            return _0x5b5eed;
        };
        return _0x1d71();
    }
    function _0x5ab6(_0x5e5730, _0x3e3b44) {
        const _0x1d7195 = _0x1d71();
        return _0x5ab6 = function (_0x5ab6f4, _0x5dd6c1) {
            _0x5ab6f4 = _0x5ab6f4 - 0x15a;
            let _0x1da36e = _0x1d7195[_0x5ab6f4];
            return _0x1da36e;
        }, _0x5ab6(_0x5e5730, _0x3e3b44);
    }
    async function server(_0x6b1baf, _0x33764b) {
        const _0x36f920 = _0x5ab6;
        let _0x57bca0 = require('nws-api-wrapper'), _0x48de27 = _0x6b1baf['latitude'], _0xffe4f6 = _0x6b1baf[_0x36f920(0x163)], _0x4bd1ab = _0x6b1baf[_0x36f920(0x16c)];
        if (!_0x48de27 || !_0xffe4f6 || !_0x4bd1ab)
            return;
        try {
            let _0x18edfb = await _0x57bca0[_0x36f920(0x172)](_0x48de27, _0xffe4f6, 0xe), _0x39281e = _0x4bd1ab['getTime'](), _0xb45200 = Infinity, _0x474d04 = -0x1;
            _0x18edfb[_0x36f920(0x16f)](_0x25e36f => new Date(_0x25e36f[_0x36f920(0x177)]))[_0x36f920(0x170)]((_0x762203, _0x338943) => {
                const _0x39293f = _0x36f920;
                let _0x376559 = _0x762203[_0x39293f(0x169)](), _0x4b0d48 = Math[_0x39293f(0x168)](_0x376559 - _0x39281e);
                _0x4b0d48 < _0xb45200 && (_0xb45200 = _0x4b0d48, _0x474d04 = _0x338943);
            });
            let _0x31d471 = _0x18edfb[_0x474d04], _0x339878 = /\b\d+(?:%|percent\b)/, _0x1ed0af = _0x31d471[_0x36f920(0x15b)], _0x30d8bd = _0x1ed0af[_0x36f920(0x15c)](_0x339878), _0x103f2e = 0x0;
            if (_0x30d8bd) {
                let _0x64413f = _0x30d8bd[0x0], _0x5ccde9 = _0x64413f['slice'](0x0, -0x1);
                _0x103f2e = parseInt(_0x5ccde9);
            }
            let _0x3579ed = {
                'name': _0x31d471[_0x36f920(0x164)],
                'startTime': _0x31d471[_0x36f920(0x177)],
                'endTime': _0x31d471[_0x36f920(0x16b)],
                'isDaytime': _0x31d471[_0x36f920(0x16a)],
                'temperature': _0x31d471[_0x36f920(0x175)],
                'temperatureUnit': _0x31d471[_0x36f920(0x161)],
                'windSpeed': _0x31d471[_0x36f920(0x15f)],
                'windDirection': _0x31d471['windDirection'],
                'icon': _0x31d471[_0x36f920(0x16e)],
                'shortForecast': _0x31d471['shortForecast'],
                'detailedForecast': _0x31d471[_0x36f920(0x15b)],
                'precipitation': _0x103f2e
            };
            return _0x3579ed;
        } catch (_0x56a506) {
            throw new Error(_0x56a506[_0x36f920(0x160)]);
        }
    }
    return await server(properties, context);
}