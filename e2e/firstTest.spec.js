describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  // afterEach(() => {
  //   MockServerApi.reset();
  // });

  it("should display the posts list on app launch", async () => {
    await expect(element(by.id("posts-list"))).toBeVisible();
  });
});
