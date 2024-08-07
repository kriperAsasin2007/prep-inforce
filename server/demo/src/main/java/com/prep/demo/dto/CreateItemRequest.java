package com.prep.demo.dto;

import com.prep.demo.model.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CreateItemRequest {
    private String name;
    private int count;
    private Size size;
    private int weight;
}
