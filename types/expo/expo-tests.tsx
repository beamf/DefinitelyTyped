import * as React from 'react';
import * as Expo from 'expo';

/**
 * Accelerometer
 */
const { Accelerometer } = Expo;

Accelerometer.addListener(obj => {
    const sum = obj.x + obj.y + obj.z;
});

Accelerometer.removeAllListeners();

Accelerometer.setUpdateInterval(42);

/**
 * AdMob
 */

const {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    BannerSize,
} = Expo;

const adMobBanner = () => (
    <AdMobBanner
        bannerSize={BannerSize.fullBanner}
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        testDeviceID="EMULATOR"
        didFailToReceiveAdWithError={() => console.log('oops')}
    />
);

const publisherBanner = () => (
    <PublisherBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        testDeviceID="EMULATOR"
        didFailToReceiveAdWithError={() => console.log('oops')}
        admobDispatchAppEvent={() => console.log('dispatched')}
    />
);

// Display an interstitial
AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
AdMobInterstitial.setTestDeviceID('EMULATOR');
AdMobInterstitial.requestAd(() => AdMobInterstitial.showAd());

// Display a rewarded ad
AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
AdMobRewarded.setTestDeviceID('EMULATOR');
AdMobRewarded.requestAd(() => AdMobRewarded.showAd());

/**
 * Amplitude
 */

const { Amplitude } = Expo;

Amplitude.initialize('foo');
Amplitude.setUserId('bar');
Amplitude.setUserProperties({ city: 'San Francisco' });
Amplitude.clearUserProperties();
Amplitude.logEvent('baz');
Amplitude.logEventWithProperties('foo', { name: 'bob' });
Amplitude.setGroup('sports', ['tennis', 'soccer']);

/**
 * AppLoading
 */

const { AppLoading } = Expo;

const Loader = () => (
    <AppLoading
        startAsync={() => new Promise(resolve => setTimeout(resolve, 1000))}
        onError={err => console.warn(err)}
        onFinish={() => console.log('finished!')}
    />
);

/**
 * Asset
 */

const { Asset } = Expo;

const asset = new Expo.Asset();
console.log(
    asset.name,
    asset.type,
    asset.hash,
    asset.uri,
    asset.localUri,
    asset.width,
    asset.height
);
asset.downloadAsync().then(() => console.log('downloaded'));

const imageURI = Expo.Asset.fromModule(1).uri;
Asset.loadAsync([1, 2, 3]).then(() => console.log('loaded!'));

/**
 * Audio
 */

const { Audio } = Expo;

Audio.setIsEnabledAsync(false).then(() => {});
Audio.setAudioModeAsync({ allowsRecordingIOS: true }).then(() => {});

const { Sound } = Audio;

const sound = new Sound({ source: 'foo.wav' });
sound.loadAsync(1, {});
sound.unloadAsync();
