package com.prep.demo.service;

import com.prep.demo.dto.CreateItemRequest;
import com.prep.demo.mapper.ItemMapper;
import com.prep.demo.model.Item;
import com.prep.demo.repository.ItemRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ItemService {

    private final ItemRepository itemRepository;
    private final ItemMapper itemMapper;

    @Autowired
    public ItemService(ItemRepository itemRepository, ItemMapper itemMapper) {
        this.itemRepository = itemRepository;
        this.itemMapper = itemMapper;
    }

    public Item create(CreateItemRequest request) {

        return itemRepository.save(itemMapper.requestToEntity(request));
    }

    public Item readById(UUID id) {
        return itemRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Item not found"));
    }

    public List<Item> getAll() {
        return itemRepository.findAll();
    }
    public void delete(UUID id) {
        itemRepository.delete(readById(id));
    }
}
