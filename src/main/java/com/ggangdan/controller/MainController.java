package com.ggangdan.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.ggangdan.dto.InvestigationDTO;
import com.ggangdan.dto.MemberDTO;
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
		
	@PostMapping("uploadFile")
	@ResponseBody
    public int fileUpload(@RequestParam("file") MultipartFile file,HttpSession session,HttpServletRequest request) throws IOException {
		int rs = 0;
		String originalFileName = file.getOriginalFilename();
		String fileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));
		String codename = (String)session.getAttribute("codename");
		
        if (!file.isEmpty()) {
        	
        	String imagePath = "D:\\kdigital2307\\Spring\\springws\\ggangdan\\src\\main\\webapp\\resources\\imgs\\uploadImg";
			
            String reName; 
            UUID uuid = UUID.randomUUID();
            String[] uuids = uuid.toString().split("-");
            String uniqueName = uuids[0];

			System.out.println(originalFileName);
			reName = uniqueName + fileExtension;
			File saveFile = new File(imagePath,reName);
			file.transferTo(saveFile);
			
			Map<String,String> imageData = new HashMap<String,String>();
			imageData.put("codename", codename);
			imageData.put("imgpath",reName);
			
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
		getImagemap.put("profileImage", MainService.getProfileImage(codename));
		
		return getImagemap;
	}
	
	
	// 영선님 작업

	@PostMapping("getOne")
	@ResponseBody
	public MemberDTO getOne(MemberDTO dto) {
		MemberDTO getdto = MemberService.getOne(dto.getId());
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
		System.out.println("idx : " + idx);
		int rs = MainService.cancel(idx);
		System.out.println("rs : " + rs);

		return rs;
	}
}
