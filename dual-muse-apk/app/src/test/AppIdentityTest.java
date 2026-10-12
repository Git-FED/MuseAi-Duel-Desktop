package com.fedpromptly.musenumbertwo;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class AppIdentityTest {
    @Test public void referralCodeIsConfigured() {
        assertEquals("5F2V31", ReferralInfo.CODE);
    }

    @Test public void referralJoinUrlIsConfigured() {
        assertEquals("https://muse.ai/join", ReferralInfo.JOIN_URL);
    }
}
