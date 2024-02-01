package leap.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import leap.springboot.model.Tasks;

@Repository
public interface TaskRepo extends JpaRepository<Tasks, Long>{

}
