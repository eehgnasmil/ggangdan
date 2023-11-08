package com.ggangdan.serviceImpl;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.ggangdan.dto.InvestigationDTO;
import com.ggangdan.dto.BoardVO;
import com.ggangdan.mapper.BoardMapper;
import com.ggangdan.mapper.InvestigationMapper;
import com.ggangdan.service.BoardService;
import com.ggangdan.service.HeaderService;

@Service
public class BoardServiceImpl implements BoardService{

	@Autowired
	BoardMapper board;

	@Override
	public void insert(BoardVO vo) {
		MultipartFile file = vo.getFile();

		if (file.isEmpty()) {
			// MultipartFile이 비어 있을 때, 대체 이미지 경로로 대체
			String defaultImagePath = "/resources/noimg.jpg";
		} else {

			String fileRealName = file.getOriginalFilename(); //파일명을 얻어낼 수 있는 메서드!
			vo.setOfile(fileRealName);
			long size = file.getSize(); //파일 사이즈

			//서버에 저장할 파일이름 fileextension으로 .jsp이런식의  확장자 명을 구함
			String fileExtension = fileRealName.substring(fileRealName.lastIndexOf("."),fileRealName.length());
			//String uploadFolder = "E:\\kdigital2307\\spring\\springws\\ggangdan\\src\\main\\webapp\\resources\\file";
			String uploadFolder = "D:\\kdigital2307\\Spring\\springws\\ggangdan\\src\\main\\webapp\\resources\\imgs\\boardImg";


			/*
		  파일 업로드시 파일명이 동일한 파일이 이미 존재할 수도 있고 사용자가 
		  업로드 하는 파일명이 언어 이외의 언어로 되어있을 수 있습니다. 
		  타인어를 지원하지 않는 환경에서는 정산 동작이 되지 않습니다.(리눅스가 대표적인 예시)
		  고유한 랜던 문자를 통해 db와 서버에 저장할 파일명을 새롭게 만들어 준다.
			 */

			UUID uuid = UUID.randomUUID();
			String[] uuids = uuid.toString().split("-");

			String uniqueName = uuids[0];

			vo.setSfile(uniqueName);

			// File saveFile = new File(uploadFolder+"\\"+fileRealName); uuid 적용 전

			File saveFile = new File(uploadFolder+"\\"+uniqueName + fileExtension);  // 적용 후
			try {
				file.transferTo(saveFile); // 실제 파일 저장메서드(filewriter 작업을 손쉽게 한방에 처리해준다.)
			} catch (IllegalStateException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		board.insert(vo);

	}

}
