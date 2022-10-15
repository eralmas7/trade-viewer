package com.example.trade.viewer;

import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class TradeViewerController {

  @Autowired
  private RestTemplate restTemplate;
  
  @GetMapping("/indices")
  public List<Index> getValue() {
      return Arrays.asList(restTemplate.getForObject("http://index-service/", Index[].class));
  }
  
  @GetMapping("/constituent/{indexId}")
  public List<String> getConstitents(@PathVariable("indexId") String indexId) {
      return Arrays.asList(restTemplate.getForObject("http://index-service/constituent/" + indexId, String[].class));
  }
  
  @GetMapping("/trade/{indexId}")
  public List<TradeInfo> getTrades(@PathVariable("indexId") String indexId) {
      return Arrays.asList(restTemplate.getForObject("http://trade-service/trade/" + indexId, TradeInfo[].class));
  }
}
