package com.controller;
import com.model.BlogPost;
import com.service.BlogPostService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

// V1
// @RestController
// @RequestMapping("/api/posts")
// @CrossOrigin(origins = "http://localhost:3000")
// public class BlogPostController {

@RestController
@RequestMapping("/api/posts")

public class BlogPostController {
    // V2
    private final BlogPostService blogPostService;
    public BlogPostController(BlogPostService blogPostService) {
        this.blogPostService = blogPostService;
    }
    @GetMapping
    public List<BlogPost> getAllPosts() {
        return blogPostService.getAllPosts();
    }
    @PostMapping("/createPost")
    public BlogPost createPost(@RequestBody BlogPost post) {
        return blogPostService.createPost(post);
    }
    @GetMapping("/{id}")
    public BlogPost getPostById(@PathVariable Long id) {
        return blogPostService.getPostById(id);
    }
    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable Long id) {
        blogPostService.deletePost(id);
    }
}