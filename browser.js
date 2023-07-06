function isBrowserEmulator() {
  // Check for the presence of a specific object or property that emulators may not support
  return typeof window.SomeObject === 'undefined';
}

if (isBrowserEmulator()) {
  console.log('Browser emulator detected!');
  // Return HTTP status 444
  window.location.href = '/error-page?status=444';
} else {
  console.log('Real browser detected.');
}
