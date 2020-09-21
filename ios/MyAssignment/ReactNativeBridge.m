//
//  ReactNativeBridge.m
//  MyAssignment
//
//  Created by SAIF on 20/09/20.
//

#import "ReactNativeBridge.h"
#import "AppDelegate.h"

@implementation ReactNativeBridge

RCT_EXPORT_MODULE();

- (BOOL) isEmulator {
    struct utsname systemInfo;
    uname(&systemInfo);
    NSString* deviceId = [NSString stringWithCString:systemInfo.machine
                                            encoding:NSUTF8StringEncoding];

    if ([deviceId isEqualToString:@"i386"] || [deviceId isEqualToString:@"x86_64"] ) {
        return YES;
    } else {
        return NO;
    }
}
RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(isEmulatorSync) {
    return @(self.isEmulator);
}

RCT_EXPORT_METHOD(isSimulatorEmulator:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
    resolve(@(self.isEmulator));
}

@end
