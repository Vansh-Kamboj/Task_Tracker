package leap.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import leap.springboot.exception.ResourceNotFoundException;
import leap.springboot.model.Tasks;
import leap.springboot.repository.TaskRepo;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class TasksController {

	@Autowired
	private TaskRepo taskRepository;
	
	// get all employees
	@GetMapping("/employees")
	public List<Tasks> getAllEmployees(){
		return taskRepository.findAll();
	}		
	
	// create employee rest api
	@PostMapping("/employees")
	public Tasks createEmployee(@RequestBody Tasks employee) {
		return taskRepository.save(employee);
	}
	
	// get employee by id rest api
	@GetMapping("/employees/{id}")
	public ResponseEntity<Tasks> getEmployeeById(@PathVariable Long id) {
		Tasks employee = taskRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(employee);
	}
	
	// update employee rest api
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Tasks> updateEmployee(@PathVariable Long id, @RequestBody Tasks taskDetails){
		System.out.println(id+" task==");
		System.out.println(taskDetails.toString());
		Tasks tsk = taskRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		tsk.setDescription(taskDetails.getDescription());
		tsk.setCompleted(taskDetails.getCompleted());
		tsk.setDue_date(taskDetails.getDue_date());
//		tsk.setId(taskDetails.getId());
		tsk.setTitle(taskDetails.getTitle());
		
		Tasks updatedEmployee = taskRepository.save(tsk);
		return ResponseEntity.ok(updatedEmployee);
	}
	
	// delete employee rest api
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		Tasks employee = taskRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		taskRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
