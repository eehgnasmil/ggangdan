package com.ggangdan.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.ggangdan.dto.BoardVO;
import com.ggangdan.dto.InvestigationDTO;
import com.ggangdan.dto.MemberDTO;
import com.ggangdan.dto.PagingDTO;
import com.ggangdan.dto.PopularInvestigationDTO;
import com.ggangdan.dto.ProfileImageDTO;
import com.ggangdan.service.HeaderService;
import com.ggangdan.service.MainService;
import com.ggangdan.service.MemberService;

/**
 * Handles requests for the application home page.
 */
@Controller
@RequestMapping("main")
public class MainController {

	@Autowired
	@Qualifier("headerServiceImpl")
	HeaderService HeaderService;

	@Autowired
	@Qualifier("mainServiceImpl")
	MainService MainService;

	@Autowired
	@Qualifier("memberServiceImpl")
	MemberService MemberService;

	@RequestMapping("main")
	public String home() {

		return "main/main";
	}

	@RequestMapping("write")
	public String write() {
		return "main/write";
	}

	@RequestMapping("getInvestigation")
	@ResponseBody
	public InvestigationDTO getInvestigation(int idx) {
		
		return MainService.getInvestigation(idx);
	}
	
	@PostMapping("popularInvestigation")
	@ResponseBody
	public ArrayList<PopularInvestigationDTO> popularInvestigation() {
		return MainService.popularInvestigation();
	}
	
	// 프로필 이미지 관련 컨트롤러
	@PostMapping("uploadFile")
	@ResponseBody
    public int fileUpload(@RequestParam("file") MultipartFile file,HttpSession session,HttpServletRequest request) throws IOException {
		int rs = 0;
		String originalFileName = file.getOriginalFilename();
		String fileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));
		String codename = (String)session.getAttribute("codename");
		
        if (!file.isEmpty()) {
        	
        	String imagePath = "D:\\kdigital2307\\Spring\\springws\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\ggangdan\\resources\\imgs\\uploadImg";
			
            String reName; 
            UUID uuid = UUID.randomUUID();
            String[] uuids = uuid.toString().split("-");
            String uniqueName = uuids[0];

			reName = uniqueName + fileExtension;
			File saveFile = new File(imagePath,reName);
			file.transferTo(saveFile);
			
			Map<String,String> imageData = new HashMap<String,String>();
			imageData.put("codename", codename);
			imageData.put("imgpath",reName);
			System.out.println(imageData);
			rs = MainService.uploadProfileImage(imageData);
			return rs;
        } else {
            return rs;
        }
    }
	
	@PostMapping("getProfileImage")
	@ResponseBody
	public Map<String,ArrayList<ProfileImageDTO>> getProfileImage(HttpSession session) {
		String codename = (String)session.getAttribute("codename");
		
		Map<String,ArrayList<ProfileImageDTO>> getImagemap = new HashMap<String,ArrayList<ProfileImageDTO>>();
		ArrayList<ProfileImageDTO> getImageList = MainService.getProfileImage(codename);
		
		getImagemap.put("profileImage", getImageList);
		
		return getImagemap;
	}
	
	@PostMapping("useImg")
	@ResponseBody
	public int useImg(String image,HttpSession session) {
		String codename = (String)session.getAttribute("codename");
		MainService.resetUseImage(codename);
		
		image = image.substring(image.lastIndexOf("/")+1);
		
		Map<String,String> imgMap = new HashMap<String, String>();
		imgMap.put("codename", codename);
		imgMap.put("imgpath", image);
		
		int rs = MainService.selectUseImage(imgMap);
		
		return rs;
	}
	
	@PostMapping("profileImage")
	@ResponseBody
	public ProfileImageDTO profileImage(HttpSession session) {
		String codename = (String)session.getAttribute("codename");
		ProfileImageDTO dto = MainService.getUseImage(codename);
		
		return dto;
	}

//////////////////////////////////////////////////////
	@PostMapping("getOne")
	@ResponseBody
	public MemberDTO getOne(HttpSession session) {
		String id = (String) session.getAttribute("id");

		MemberDTO getdto = MemberService.getOne(id);
		return getdto;

	}

	@PostMapping("getList")
	@ResponseBody
	public InvestigationDTO getList(String investigationName) {
		InvestigationDTO getdto = MainService.getList(investigationName);
		return getdto;

	}

	@RequestMapping("updateInverstigation")
	@ResponseBody
	public int updateInverstigation(InvestigationDTO dto) {
		int rs = MainService.updateInverstigation(dto);
		return rs;
	}

	@RequestMapping("complete")
	@ResponseBody
	public int complete(int idx) {
		int rs = MainService.complete(idx);
		return rs;
	}

	@RequestMapping("cancel")
	@ResponseBody
	public int cancel(int idx) {
		int rs = MainService.cancel(idx);
		return rs;
	}

	@RequestMapping("boardList")
	@ResponseBody
	public int boardList(                               
			Integer idx,
	        @RequestParam(defaultValue = "") String selectVal, 
	        @RequestParam(defaultValue = "") String searchInput
	) {
	    Map<String, Object> map = new HashMap<>();

	    map.put("idx", idx);
	    map.put("selectVal", ("".equals(selectVal) ? null : selectVal));
	    map.put("searchInput", ("".equals(searchInput) ? null : searchInput));
	    
	    int getdto = MainService.boardList(map);
	    return getdto;
	}
	
	@RequestMapping("loadList")
	@ResponseBody
	public List<BoardVO> loadList(
	    Model model,
	    @RequestParam(defaultValue = "0") int page,
	    @RequestParam(defaultValue = "5") int itemsPerPage,
	    int idx,
	    @RequestParam(defaultValue = "") String selectVal,
	    @RequestParam(defaultValue = "") String searchInput
	) {
	    Map<String, Object> map = new HashMap<String, Object>();
	    List<BoardVO> getdto = null;
	    
	    map.put("page", page);
	    map.put("itemsPerPage", itemsPerPage);
	    map.put("idx", idx);
	    map.put("selectVal", ("".equals(selectVal) ? null : selectVal));
	    map.put("searchInput", ("".equals(searchInput) ? null : searchInput));
	    getdto = MainService.loadList(map);
	    
	    model.addAttribute("getdto", getdto);
	    return getdto;
	}
	
	@RequestMapping("paging")
	@ResponseBody
	public PagingDTO paging(Model model , Map<String, Integer> map ,Integer page,Integer total) {
		System.out.println("page : " + page);
		System.out.println("total : " + total);
		map = new HashMap<String, Integer>();
		Integer startPage = 1;
		Integer middlePage = 1;
		Integer nextPage = 1;
		Integer prevPage = 1;
		Integer endPage = 0; // 페이지 수
		
		// 전체 수의 나머지가 있을때는 + 1 페이지 더 추가
		if(total % 5 == 0) {
			endPage = total / 5;
		} else {
			endPage = (total / 5) + 1;
		}
		
		if(endPage > 5) {
			if(total % 5 == 0) {
				// 전체가 5로 딱 떨어짐
				if(page <=5) {
					startPage = 1;
					middlePage = startPage + 4;
				} else if((endPage - page) < 1) {
					Integer startP = endPage / 5;
					startPage = startPage + (5* startP);
					middlePage = endPage;
				} else {
					startPage = startPage + 5;
					middlePage = startPage + 4;
				}
			} else {
				// 전체가 5로 딱 떨어지지 않음
				if(page <=5) {
					startPage = 1;
					middlePage = startPage + 4;
				}
				else if(((page -1) %5 == 0 && (endPage - page) >= 1) || ((page < page + 5) && (endPage - page) >= 1)) {
					startPage = startPage + 5;
					middlePage = startPage + 4;
				}
				else if((page %5 != 0) && ((endPage - page) < 1)) {
					Integer startP = endPage / 5;
					startPage = startPage + 5;
					middlePage = endPage;
				}
			}
		}
		else {
			startPage = 1;
			middlePage = endPage;
		}
		
		//////////

		if(total > 5 || total % 5 == 0) {
			if (total % 5 == 0) {
				if(page == endPage) {
					nextPage = endPage;
				} else if (page == middlePage) {
					if((endPage - page) < 5) {
						nextPage = endPage;
					} else {
						nextPage = page+1;
					}
				} else nextPage = page+1;
			} else {
				if(page == endPage) {
					nextPage = endPage;
				} else {
					nextPage = page+1;
				}
			}
		} else {
			nextPage = 1;
		}
		
		if(total > 5 || total % 5 == 0) {
			prevPage = page-1;
			if (total % 5 == 0) {
			} else {
				prevPage = page-1;
				if(page == 1) {
					prevPage = 1;
				} else {
					prevPage = page-1;
					if(page %5 == 0) {
						if(prevPage == 0) prevPage = 1;
					}
				}
			}
		} else {
			prevPage = 1;
		}
		
		
		// page이 null 또는 total이 null / page가 0보다 작거나 total보다 클때
		if(page == null || page < 0) {
			page = 1;
		}
		if(total == null) {
			total = 1; 
		}
		if(page > total) {
			page = total;
		}
		
		// total이 == 0일때 
		if(total == 0) {
			page = 1;
			startPage = 1;
			endPage = 1;
		}
		
		PagingDTO dto = new PagingDTO();
		dto.setCurrentPage(page);
		dto.setTotalCount(total);
		dto.setEndPage(endPage);
		dto.setStartPage(startPage);
		dto.setMiddlePage(middlePage);
		dto.setNextPage(nextPage);
		dto.setPrevPage(prevPage);
		
		System.out.println("dto : " + dto);
		System.out.println("//////////////");
		
		return dto;
	}
	
	////////////랭킹/////////////////////
		
	@PostMapping("getallranklist")
	@ResponseBody
	public ArrayList<MemberDTO> getallranklist(HttpSession session) {
	return MemberService.getallranklist();
	}
	
	@PostMapping("getdepartmentranklist")
	@ResponseBody
	public ArrayList<MemberDTO> getdepartmentranklist(String id) {
	return MemberService.getdepartmentranklist(id);
	}
	
}
