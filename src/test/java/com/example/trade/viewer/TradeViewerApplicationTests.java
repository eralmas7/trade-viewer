package com.example.trade.viewer;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.web.WebAppConfiguration;

import com.example.trade.viewer.TradeViewerApplication;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = TradeViewerApplication.class)
@WebAppConfiguration
public class TradeViewerApplicationTests {

	@Test
	public void contextLoads() {
	}

}
