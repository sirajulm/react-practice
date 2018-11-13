import { fork } from 'redux-saga/effects';
import { watchAPI } from './watcher';

export default function* startForeman() {
    yield [
        fork(watchAPI)
    ]
}