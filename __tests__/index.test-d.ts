import {expectType} from 'tsd';
import {osLocale, osLocaleSync} from '../src/index.js';

expectType<Promise<string>>(osLocale());
expectType<Promise<string>>(osLocale({spawn: false}));

expectType<string>(osLocaleSync());
expectType<string>(osLocaleSync({spawn: false}));
