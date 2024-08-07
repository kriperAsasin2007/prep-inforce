package com.prep.demo.model;

import jakarta.persistence.*;
//import jakarta.validation.constraints.*;
import lombok.*;
import java.util.UUID;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "items")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

//    @Column(name = "image_url")
//    private String imageUrl;

    @Column(name = "name")
    private String name;

    @Column(name = "count")
    private int count;

    @Embedded
    private Size size;

    @Column(name = "weight")
    private int weight;
}
