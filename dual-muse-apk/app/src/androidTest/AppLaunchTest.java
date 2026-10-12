package com.fedpromptly.musenumbertwo;

import android.view.ViewGroup;
import android.webkit.WebView;

import androidx.test.core.app.ActivityScenario;
import androidx.test.ext.junit.runners.AndroidJUnit4;

import org.junit.Test;
import org.junit.runner.RunWith;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

@RunWith(AndroidJUnit4.class)
public class AppLaunchTest {
    @Test public void launchesMuseWebsite() {
        try (ActivityScenario<MainActivity> scenario = ActivityScenario.launch(MainActivity.class)) {
            scenario.onActivity(activity -> {
                ViewGroup content = activity.findViewById(android.R.id.content);
                assertTrue(content.getChildCount() > 0);
                assertTrue(content.getChildAt(0) instanceof WebView);
                WebView web = (WebView) content.getChildAt(0);
                assertEquals("https://muse.ai/", web.getUrl());
            });
        }
    }
}
