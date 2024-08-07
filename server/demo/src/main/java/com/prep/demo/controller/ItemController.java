package com.prep.demo.controller;

import com.prep.demo.dto.CreateItemRequest;
import com.prep.demo.model.Item;
import com.prep.demo.model.OperationalResponse;
import com.prep.demo.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/items")
public class ItemController {
    private final ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @PostMapping()
    public ResponseEntity<Item> create(@RequestBody CreateItemRequest request) {
        Item response = itemService.create(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
    @GetMapping("/{item_id}")
    public ResponseEntity<Item> getById(@PathVariable("item_id")UUID itemId) {
        Item response = itemService.readById(itemId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    @GetMapping("/all")
    public ResponseEntity<List<Item>> getById() {
        List<Item> response = itemService.getAll();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{item_id}")
    public ResponseEntity<OperationalResponse> delete (@PathVariable("item_id") UUID itemId) {
        itemService.delete(itemId);
        return new ResponseEntity<>(new OperationalResponse("Item was deleted"), HttpStatus.OK);
    }
}
