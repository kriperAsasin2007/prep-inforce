package com.prep.demo.mapper;

import com.prep.demo.dto.CreateItemRequest;
import com.prep.demo.model.Item;
import org.springframework.stereotype.Service;

@Service
public class ItemMapper {
    public Item requestToEntity(CreateItemRequest request) {
        Item item = new Item();
        item.setCount(request.getCount());
        item.setName(request.getName());
        item.setWeight(request.getWeight());
        item.setSize(request.getSize());

        return item;
    }
}
