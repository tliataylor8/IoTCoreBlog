package repository;

import model.BlogPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogPostRepository extends JpaRepository<BlogPost, Long> {
    // Find posts by title (case-insensitive)
    List<BlogPost> findByTitleContainingIgnoreCase(String title);

    // Find posts by content (case-insensitive)
    List<BlogPost> findByContentContainingIgnoreCase(String content);

    // Find posts ordered by creation date (newest first)
    List<BlogPost> findAllByOrderByCreatedAtDesc();

    // Find top N most recent posts
    List<BlogPost> findTop5ByOrderByCreatedAtDesc();
}